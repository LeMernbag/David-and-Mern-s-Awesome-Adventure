import { Box } from "@chakra-ui/react"
import GradientHeader from './../../components/Gradient-Header'

const PicsPage = () => {
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
          content="Let's edit some images."
          textAlign="center"
          width="100%"
        />
      </Box>
    </>
  )
}

export default PicsPage
