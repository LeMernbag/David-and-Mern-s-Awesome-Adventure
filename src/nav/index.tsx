import {
  Box,
  HStack,
  IconButton,
  Show,
  useDisclosure
} from "@chakra-ui/react"
import React from "react"
import { FiMenu } from "react-icons/fi";
import NavLinks from './NavLinks'
import Hamburger from './Hamburger'


const Nav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Box width='100%' display="flex" alignItems="center" justifyContent="flex-end">
        <HStack>
          <Show breakpoint='(min-width: 769px)'>
            <NavLinks />
          </Show>
          <Show breakpoint='(max-width: 768px)'>
            <Box marginTop="1rem" marginRight="1rem">
              <IconButton
                aria-label="Nav Menu Button"
                icon={<FiMenu />}
                variant="outline"
                colorScheme="blue"
                onClick={onToggle}
              />
            </Box>
          </Show>
        </HStack>
      </Box>
      <Hamburger onToggle={onToggle} isOpen={isOpen} />
    </Box>
  )
}

export default Nav
