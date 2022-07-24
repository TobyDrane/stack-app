import React from 'react'
import type { NextComponentType } from 'next'
import {
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header: NextComponentType = () => {
  // Icon used to change the color theme, moon for when in light
  // sun for when in dark
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  // Hook used to toggle between light and dark themes
  const { toggleColorMode: toggleLightDarkMode } = useColorMode()

  return (
    <chakra.header
      pos="sticky"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      shadow="sm"
      zIndex="3"
    >
      <chakra.div height="4.5rem" mx="auto" maxW="8xl" maxWidth="8xl">
        <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
          <Heading
            as="h1"
            color="gray.600"
            _dark={{ color: 'whiteAlpha.900' }}
            letterSpacing="-1.8px"
            fontSize="3xl"
          >
            Stacks
          </Heading>
          <Flex justify="flex-end" w="100%" align="center" color="gray.400">
            <HStack spacing="5">
              <IconButton
                aria-label="xx"
                icon={<SwitchIcon />}
                variant="ghost"
                color="current"
                size="md"
                fontSize="lg"
                ml={{ base: '0', md: '3' }}
                onClick={toggleLightDarkMode}
              />
            </HStack>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}

export default Header
