import { Text, BoxProps } from '@chakra-ui/react'

interface GradientHeaderProps {
  content: string
}

const GradientHeader: React.FC<BoxProps & GradientHeaderProps> = ({ content, ...titleprops}) => {
  return (
    <Text
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
      {...titleprops}
    >
      {content}
    </Text>
  )
}
export default GradientHeader
