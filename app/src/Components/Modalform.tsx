import React, { useEffect, useReducer, useState } from 'react'
import {
    Button, Flex,
    FormControl,
    Input, Modal, ModalBody,
    ModalContent,
    ModalOverlay, Select, useToast, Image
} from '@chakra-ui/react'

import check from '../Assets/check.webp'

interface ModalSignUpProps {
    onOpen: () => void,
    onClose: () => void,
    isOpen: boolean
}

const Modalform: React.FC<ModalSignUpProps> = ({ isOpen, onClose, onOpen }) => {
    const toast = useToast();
    const [name, setName] = useState<string>("")
    const [mobile, setMobile] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [program, setProgram] = useState<string>("")


    const handleSubmit = async () => {
        addUser(name, mobile, email, program);
    }
    const alertSuccess = () => {
        toast({
            title: 'Succesfully accepted',
            description: "We've created a call for you",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }
    const alertFail = () => {
        toast({
            title: 'Call already placed',
            description: "We've already created a call for you",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }
    const host = "http://localhost:8000";
    const addUser = async (name: string, mobile: string, email: string, program: string) => {
        console.log("Adding a new User")
        //API CALL
        try {


            const response = await fetch(`${host}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ name, mobile, email, program })
            });
            const json = await response.json();
            alertSuccess();
        } catch (error) {
            alertFail();
        }


    }
    const initialRef = React.useRef(null)
    return (
        <>
            <Modal size={'5xl'}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >

                    <ModalBody p={0}>
                        <Flex width={"100%"} alignItems="center" justifyContent={"center"}>

                            <Flex direction={"column"} height="80vh" width={"40%"} alignItems="center" justifyContent={"center"}>
                                <Flex height={"10%"} width="80%" alignItems={"center"} justifyContent="center" fontSize={"1.5rem"}>Call Our Experts</Flex>
                                <Flex height={"10%"} width="80%" alignItems={"center"} justifyContent="center" color={"blue"}>Data Science: +91 7676767676</Flex>
                                <Flex height={"35%"} width="80%" direction={'column'} alignItems="center" justifyContent={"space-around"}>
                                    {/* <Flex width="80%" fontSize={"1rem"}>Get 360 Degree Placement Support</Flex>
                                    <Flex width="80%" fontSize={"1rem"}>Live Interactive Classes by Experts</Flex>
                                    <Flex width="80%" fontSize={"1rem"}>Join 4000+ Alumni Network</Flex>
                                    <Flex width="80%" fontSize={"1rem"}>2000+ Career Alumni Network</Flex>
                                    <Flex width="80%" fontSize={"1rem"}>63% Average Salary Hike</Flex> */}
                                    <Image
                                        // boxSize='100px'
                                        objectFit='cover'
                                        src={check}
                                        alt='Image'
                                    />
                                </Flex>
                            </Flex>


                            <Flex width={"5%"} height={"80vh"} direction="column">
                                <Flex width={"100%"} height="10vh" alignItems={"flex-end"} justifyContent="center">OR</Flex>
                                <Flex className='vertical' height="60vh" alignItems={"center"} justifyContent="center"></Flex>
                            </Flex>


                            <Flex direction={"column"} height="80vh" width={"40%"} alignItems="center" justifyContent={"center"}>
                                <Flex height={"10%"} width="80%" alignItems={"center"} justifyContent="center" fontSize={"1.2rem"}>Schedule a 1-on-1 consultation</Flex>
                                <Flex height={"10%"} width="80%" alignItems={"center"} justifyContent="center" color={"blue"} fontSize={"1.5rem"}>Request a Call back</Flex>
                                <FormControl height={"45%"} width="80%">
                                    <Input width={"100%"} placeholder='Mobile' type={"number"} m={2} onChange={(e) => setMobile(e.target.value)} />
                                    <Input width={"100%"} placeholder='Name' m={2} onChange={(e) => setName(e.target.value)} />
                                    <Input width={"100%"} placeholder='Email' type={"email"} m={2} onChange={(e) => setEmail(e.target.value)} />
                                    <Select placeholder='---Select Program---' m={2} onChange={(e) => setProgram(e.target.value)}>
                                        <option value='Data Science'>Data Science</option>
                                        <option value='Product Management'>Product Management</option>
                                    </Select>
                                    <Button width={"100%"} onClick={handleSubmit} colorScheme='orange' m={2}>Call Me Back</Button>

                                </FormControl>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Modalform