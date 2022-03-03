import { Box } from "@chakra-ui/react"
import GradientHeader from './../../components/Gradient-Header'

const FormPage = () => {
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
          content="Let's make a form."
          textAlign="center"
          width="100%"
        />
      </Box>
    </>
  )
}

export default FormPage
