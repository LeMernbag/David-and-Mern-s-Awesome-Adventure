import {
  Box,
  Button,
  Collapse,
  Stack,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import { navLinks } from "./links";
import { ColorModeSwitcher } from "./ColorModeSwitcher"

interface MenuElements {
  isOpen: boolean,
  onToggle: (() => void)
}

const CollapseMenu: React.FC<MenuElements> = ({ isOpen, onToggle }) : JSX.Element => {
  return (
    <Collapse in={isOpen}>
      <Box
        mt="1"
        borderRadius="md"
        d="flex"
        flexDir="column"
        minH="90vh"
        bg={useColorModeValue("white.900", "gray.800")}
      >
        <Stack alignItems="flex-start" pt="4">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              as="a"
              href={item.link}
              size="lg"
              padding="12px"
              fontWeight="normal"
              onClick={onToggle}
            >
              {item.title}
            </Link>
          ))}
        </Stack>
        <ColorModeSwitcher />

      </Box>
    </Collapse>
  );
};

export default CollapseMenu;
