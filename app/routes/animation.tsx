import { 
  Flex, Button, HStack, 
  chakra,
  Text
} from "@chakra-ui/react";
// import Logo from "../public/logo.svg";
// import { Link } from "react-scroll";
// import data from "./header.data";
import React from "react";
const CTA = "Get Started";
export default function Header() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* <Image src={Logo.src} h="50px" /> */}
        <HStack as="nav" spacing="5">
          <Text size="large">Hello World</Text>
          {/* {data.map((item, i) => (
            <Link key={i}>
              <Button variant="nav"> {item.label} </Button>
            </Link>
          ))} */}
        </HStack>
        <HStack>
          <Button>{CTA}</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
