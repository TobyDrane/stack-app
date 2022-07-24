import React from 'react'
import { chakra, Grid } from '@chakra-ui/react'

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <chakra.div>
      <Grid
        gridAutoColumns="430px"
        gridAutoFlow="column"
        gap="45px"
        height="100vh"
        overflow="auto"
      >
        {children}
      </Grid>
    </chakra.div>
  )
}

export default BoardLayout
