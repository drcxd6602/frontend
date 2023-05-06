import React from 'react';
import { HStack, Box, Text, Image, Button} from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <HStack
        m={"0"}
        p={"0"}
        w={"100%"}
        h={"90"}
        bgColor={"#252994"}
        justifyContent={"space-between"}
        color={"white"}
        fontSize={"20"}
        position={"sticky"}
        top={"0"}
        
      >
        <Image src={logo} h={"100"} w={"100"} paddingLeft={"50"} />
        <HStack justifyContent={"space-between"} width={"40%"} padding={"10"}>
          <Link
            to={"/"}
            cursor={"pointer"}
            style={{
              color: "white",
            }}
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to={"/contacts"}
            cursor={"pointer"}
            style={{
              color: "white",
            }}
          >
            {" "}
            Contact{" "}
          </Link>
          <Link
            to={"/booking"}
            cursor={"pointer"}
            style={{
              color: "white",
            }}
          >
            {" "}
            bookings{" "}
          </Link>
          <Text>Blogs</Text>
          <Button
            bgColor={"#FF650E"}
            color={"white"}
            w={"full"}
            p={"15"}
            border={"none"}
            borderRadius={"12"}
            fontSize={"20"}
          >
            Logout
          </Button>
        </HStack>
      </HStack>
    );
}

export default Navbar
