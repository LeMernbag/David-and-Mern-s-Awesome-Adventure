import { Box, Heading, Text, useColorModeValue, BoxProps } from '@chakra-ui/react'

interface FeatureElements {
  title: string,
  desc: string,
  page?: string
}

const Feature: React.FC<FeatureElements> = ({ title, desc, page, ...rest }): JSX.Element => {

  const lightProps: BoxProps = {
    shadow: "md",
    bg: "white",
    _hover: {
      bg: "gray.100"
    }
  }

  const darkProps: BoxProps = {
    shadow: "2xl",
    bg: "whiteAlpha.100",
    _hover: {
      bg: "whiteAlpha.200"
    }
  }

  const props = useColorModeValue(lightProps, darkProps);


  return (
    <Box as='button' borderRadius='md' p={5} borderWidth='1px' {...rest} {...props}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text fontSize='md' mt={4}>{desc}</Text>
    </Box>
  )
}


export default Feature
