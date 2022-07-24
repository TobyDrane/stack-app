import type { NextPage } from 'next'
import { chakra, Box } from '@chakra-ui/react'

import Header from '../components/Header'
import Board from '../components/Board'

const Home: NextPage = () => {
  return (
    <main className="content-main">
      <Header />
      <chakra.main maxW="8xl" maxWidth="8xl" mx="auto">
        <Box mb={10} px="6">
          <Box as="section" pt="4rem" pb={{ base: '0', md: '5rem' }}>
            <Board />
          </Box>
        </Box>
      </chakra.main>
    </main>
  )
}

export default Home
