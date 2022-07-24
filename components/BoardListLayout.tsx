import React from 'react'
import { Grid } from '@chakra-ui/react'

const BoardListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      as="section"
      gridAutoRows="max-content"
      gap="15px"
      p="15px"
      borderRadius="3px"
      bg="blackAlpha.100"
      _dark={{ background: 'gray.700' }}
    >
      {children}
    </Grid>
  )
}

export default BoardListLayout
