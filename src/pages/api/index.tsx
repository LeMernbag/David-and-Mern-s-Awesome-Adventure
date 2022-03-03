import { Box } from "@chakra-ui/react"
import GradientHeader from './../../components/Gradient-Header'

const ApiPage = () => {
  return (
    <>
      <Box
        textAlign="center"
        fontSize="xl"
        display="flex"
        minH="100vh"
        alignItems="center"
      >
        <GradientHeader
          content="Let's make an API call."
          textAlign="center"
          width="100%"
        />
      </Box>
    </>
  )
}

export default ApiPage
