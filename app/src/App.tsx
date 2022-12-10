import React from 'react';
import './App.css';
import { Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react';

import logo from '../src/Assets/logo.webp'
import Body from './Components/Body';


function App() {
  
  return (
    <>
      <Flex width={"100vw"} alignItems="center" justifyContent={"space-around"} height={"12vh"} borderBottom={"0.5px solid grey"}>
        <Flex width={"30%"} height="100%">
          <Box boxSize='sm' ml={"8rem"} mt={3}>
            <Image src={logo} alt='Dan Abramov' height={"20%"} width="70%" />
          </Box>
        </Flex>
        <Flex width={"60%"} height="100%" justifyContent="space-around">
          <Flex mt={"1.8rem"} fontSize="1.1rem" fontWeight={"bold"}>
            <a href="/">Programs</a>
          </Flex>
          <Flex mt={"1.8rem"} fontSize="1.1rem" fontWeight={"bold"}>
            <a href="/">Success Stories</a>
          </Flex>
          <Flex mt={"1.8rem"} fontSize="1.1rem" fontWeight={"bold"}>
            <a href="/">For Corporate</a>
          </Flex>
          <Flex mt={"1.8rem"} fontSize="1.1rem" fontWeight={"bold"}>
            <a href="/">About INSAID</a>
          </Flex>
          
          <Flex mt={"1.8rem"}>
          <Button colorScheme='blue'>Login</Button>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
      <Body/>
      
    </>
  );
}

export default App;
