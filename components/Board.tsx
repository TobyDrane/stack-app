import React from 'react'
import type { NextComponentType } from 'next'
import BoardLayout from './BoardLayout'
import BoardListLayout from './BoardListLayout'
import { Heading } from '@chakra-ui/react'
import BoardCard from './BoardCard'

const Board: NextComponentType = () => {
  return (
    <BoardLayout>
      <BoardListLayout>
        <Heading
          as="h2"
          color="gray.600"
          _dark={{ color: 'whiteAlpha.800' }}
          fontSize="2xl"
        >
          Day
        </Heading>
        <BoardCard title="Card 1" description="Test card 1 description" />
        <BoardCard title="Card 2" description="Test card 1 description" />
      </BoardListLayout>

      <BoardListLayout>
        <Heading
          as="h2"
          color="gray.600"
          _dark={{ color: 'whiteAlpha.800' }}
          fontSize="2xl"
        >
          Half Sprint
        </Heading>
      </BoardListLayout>

      <BoardListLayout>
        <Heading
          as="h2"
          color="gray.600"
          _dark={{ color: 'whiteAlpha.800' }}
          fontSize="2xl"
        >
          Full Sprint
        </Heading>
      </BoardListLayout>
    </BoardLayout>
  )
}

export default Board
