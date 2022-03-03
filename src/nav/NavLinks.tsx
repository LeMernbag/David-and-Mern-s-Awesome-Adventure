import {
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { navLinks } from "./links";
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const NavLinks = () => {
  return (
    <ButtonGroup
      isAttached
      alignSelf="center"
      display="flex"
      flexFlow="row nowrap"
      alignItems="center"
      width="760px"
      justifyContent="flex-end"
    >
      {navLinks.map((item) => (

        <Button
          key={item.title}
          as="a"
          href={item.link}
          variant="ghost"
          size="md"
          fontWeight="normal"
          padding="10px 30px"
        >
          {item.title}
        </Button>

      ))}
      <ColorModeSwitcher />

    </ButtonGroup>
  );
};

export default NavLinks;
