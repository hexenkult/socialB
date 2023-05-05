import Navbar from './components/Navbar.tsx'
import Card from './components/Card.tsx'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex bg="#E5E5E5">
      <Flex bg="white" flex="1">
        <Navbar />
        <Card />
      </Flex>
    </Flex>
  )
}

export default App
