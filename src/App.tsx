import React from 'react'
import Navbar from "./components/Navbar.tsx"
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex bg="#E5E5E5">
      <Flex bg="white" flex="1">
        <Navbar />
      </Flex>
    </Flex>
  )
}

export default App
