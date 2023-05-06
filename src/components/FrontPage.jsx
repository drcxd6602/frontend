import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon, Search2Icon } from "@chakra-ui/icons";
// import "./FrontPage.scss";
// import bg from "../assets/bgimgoftrain.jpeg";
import bg from "../assets/bgimg.jpg";

import {
  Box,
  Input,
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Icon,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Divider, Image } from "@chakra-ui/react";
import TrainCard from "./TrainCard";

const FrontPage = () => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState();
  const [seatClass, setSeatClass] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      source: source,
      dest: dest,
      date: date,
      seatClass: seatClass,
    };

    console.log(obj);
  };

  return (
    <Box>
      <Box
        w={"container.xl"}
        h={"100vh"}
        bgImage={bg}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        // opacity={0.8}
        css={{ Filter: "blur(6px)" }}
      >
        <Box w={"50%"} m={"auto"} padding={"3rem 0rem"}>
          <Heading
            style={{
              fontSize: "3rem",
              textAlign: "center",
              fontWeight: "900",
              color: "#e2e2e2",
              textShadow: "2px 2px red",
              marginBottom: "3rem",
              top: "100px",
            }}
          >
            WELCOME TO INDIAN RAILWAYS
          </Heading>
          <form onSubmit={submitHandler}>
            <VStack w={"100%"} gap={"0.7rem"}>
              <HStack w={"100%"}>
                <Input
                  value={source}
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                  w={"100%"}
                  p={"30px"}
                  borderTopLeftRadius={"12px"}
                  border={"none"}
                  bgColor={"#e2e2e2"}
                  color={"blackAlpha.700"}
                  placeholder="Enter your source"
                  fontSize={"1.2rem"}
                  css={{
                    outline: "none",
                  }}
                  required
                />

                <Input
                  w={"100%"}
                  p={"30px"}
                  value={dest}
                  borderTopRightRadius={"12px"}
                  border={"none"}
                  bgColor={"#e2e2e2"}
                  color={"blackAlpha.700"}
                  placeholder="Enter your destination"
                  fontSize={"1.2rem"}
                  onChange={(e) => {
                    setDest(e.target.value);
                  }}
                  css={{
                    outline: "none",
                  }}
                  required
                />
              </HStack>
              <HStack w={"100%"}>
                <Input
                  w={"100%"}
                  p={"30px"}
                  type="date"
                  borderBottomLeftRadius={"12px"}
                  border={"none"}
                  value={date}
                  bgColor={"#e2e2e2"}
                  color={"blackAlpha.700"}
                  placeholder="Enter your source"
                  fontSize={"1.2rem"}
                  css={{
                    outline: "none",
                  }}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  required
                />
                {console.log(date)}
                <Input
                  w={"100%"}
                  p={"30px"}
                  borderBottomRightRadius={"12px"}
                  border={"none"}
                  bgColor={"#e2e2e2"}
                  color={"blackAlpha.700"}
                  value={seatClass}
                  onChange={(e) => setSeatClass(e.target.value)}
                  placeholder="Class"
                  fontSize={"1.2rem"}
                  css={{
                    outline: "none",
                  }}
                  required
                />
              </HStack>

              <HStack w={"100%"}>
                <Button
                  w={"100%"}
                  p={"30px"}
                  type="submit"
                  borderRadius={"12px"}
                  border={"none"}
                  bgColor={"#ff650e"}
                  color={"#e2e2e2"}
                  fontSize={"1.3rem"}
                  cursor={"pointer"}
                  css={{
                    outline: "none",
                    ":hover": {
                      opacity: "0.9",
                    },
                  }}
                >
                  Search Trains
                </Button>
              </HStack>
            </VStack>
          </form>
        </Box>
      </Box>
      <TrainCard/>
    </Box>
  );
};

export default FrontPage;
