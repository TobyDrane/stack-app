/* Replace with your SQL commands */

/* Project - id name description created updated sprint-length */
/* Card - id title description prioirty parent-card-id project-id closed deleted sprint-status created updated */
CREATE EXTENSION pgcrypto;
CREATE TYPE PRIORITY AS ENUM ('high', 'mid', 'low');
CREATE TYPE SPRINT_STATUS AS ENUM ('day', 'half', 'full');

/* Create tables */
CREATE TABLE IF NOT EXISTS project (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  spring_length INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS card (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  priority PRIORITY,
  parent_card_id UUID,
  project_id UUID NOT NULL,
  closed BOOLEAN NOT NULL,
  deleted BOOLEAN DEFAULT false,
  sprint_status SPRINT_STATUS NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   CONSTRAINT fk_parent_card
      FOREIGN KEY(parent_card_id) 
	  REFERENCES card(id),
   CONSTRAINT fk_project
      FOREIGN KEY(project_id) 
	  REFERENCES project(id)
);

/* Create function to auto update the updated_at timestamp */
CREATE OR REPLACE FUNCTION trigger_set_updated_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

/* Apply function triggers */
CREATE TRIGGER project_set_updated_at_timestamp
BEFORE UPDATE ON project
FOR EACH ROW
EXECUTE FUNCTION trigger_set_updated_at_timestamp();

CREATE TRIGGER card_set_updated_at_timestamp
BEFORE UPDATE ON card
FOR EACH ROW
EXECUTE FUNCTION trigger_set_updated_at_timestamp();
