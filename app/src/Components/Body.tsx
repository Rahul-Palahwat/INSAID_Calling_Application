import { Button, Flex, useDisclosure, Image, Box } from '@chakra-ui/react'
import React from 'react'
import Modalform from './Modalform'

import user from '../Assets/User.jpg'
import salary from '../Assets/salary.png'
const Body: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex height={"60vh"} width={"100%"} alignItems="center" justifyContent={"center"}>
        <Flex width={"100%"} alignItems="center" justifyContent={"center"}>

          <Flex direction={"column"} height="60vh" width={"50%"} alignItems="center" justifyContent={"center"}>
            <Flex height={"20%"} width="80%" alignItems={"flex-end"} fontSize={"1.5rem"}>Get your Dream Job with</Flex>
            <Flex height={"20%"} width="80%" alignItems={"center"} fontSize={"2rem"} fontWeight="bold">Top Programs</Flex>
            <Flex height={"10%"} width="80%" fontSize={"1rem"}>Learn with india's leading online school for working professionals</Flex>
            <Flex height={"10%"} width="80%" color={"blue"}>
              <Button width={"40%"} onClick={onOpen} colorScheme='blue'>Request a Call Back</Button>
            </Flex>
            <Flex height={"20%"} alignItems="center" width="80%" fontSize={"1rem"}>
              <Flex>
                <Image boxSize='30px'
                  objectFit='cover' src={salary} alt='Salary' />
              </Flex>
              <Flex ml={4}>150% Highest Salary Hike</Flex></Flex>

          </Flex>



          <Flex direction={"column"} height="60vh" width={"33%"} alignItems="center" justifyContent={"center"}>
            <Flex border={"2px solid blue"} borderRadius={"1rem"} height={"80%"} width={"60%"} direction="column" alignItems={"center"} justifyContent="center">
              <Flex>
                <Image
                  borderRadius='full'
                  boxSize='100px'
                  src={user}
                  alt='Rahul kumar'
                />
              </Flex>
              <Flex fontSize={"1.1rem"} m={2} fontWeight={"bold"}>Senior Data Engineer</Flex>
              <Flex fontSize={"2rem"} m={1} fontWeight={"bold"} color="blue">PHILIPS</Flex>
              <Flex fontSize={"1rem"} m={2} fontWeight={"bold"}>PGPD SAI, 12 Months Program</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modalform onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Body