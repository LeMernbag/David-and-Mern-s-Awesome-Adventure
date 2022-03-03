import { HStack, Box, Heading, Text } from '@chakra-ui/react'
import Feature from "./features"

function StackEx() {

  return (
    <HStack spacing={8}>
      <Feature
        title='Sign Up Form'
        desc='Be in the know'
      />
      <Feature
        title='Calculate Stuff'
        desc='Perform an operation'
      />
    </HStack>
  )
}


export default StackEx
