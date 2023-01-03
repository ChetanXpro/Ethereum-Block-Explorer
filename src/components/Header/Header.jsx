import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.jsx";
// import { VariantsSelectorWrapper } from "./VariantsSelectorWrappe";
import classes from './header.module.css'
export default function App() {
  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];

  return (
    <>
      <Navbar className={` bg-gray-900`}   variant={variant}>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
         
          <Navbar.Link href="#">Transactioins</Navbar.Link>
         
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
