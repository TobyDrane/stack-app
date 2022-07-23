DROP TRIGGER IF EXISTS project_set_updated_at_timestamp ON project;
DROP TRIGGER IF EXISTS card_set_updated_at_timestamp ON card;

DROP TABLE card;
DROP TABLE project;

DROP FUNCTION trigger_set_updated_at_timestamp;
DROP TYPE PRIORITY;
DROP TYPE SPRINT_STATUS;
DROP EXTENSION pgcrypto;