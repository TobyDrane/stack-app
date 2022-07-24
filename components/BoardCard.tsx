import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const BoardCard = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <Box shadow="sm" bg="white" _dark={{ bg: 'gray.800' }} p="10px">
      <Heading
        as="h3"
        color="gray.600"
        _dark={{ color: 'whiteAlpha.800' }}
        fontSize="md"
        mb="10px"
      >
        {title}
      </Heading>
      <Text
        as="sub"
        fontSize=" sm"
        color="gray.500"
        _dark={{ color: 'whiteAlpha.700' }}
      >
        {description}
      </Text>
    </Box>
  )
}

export default BoardCard
