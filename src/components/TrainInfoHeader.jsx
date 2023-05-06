import { HStack, VStack ,Text,Container } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return <>
       <Container  maxW={'70%'} bgColor={'#FF6E1D'}  m={'0px auto'}  color={'white'} fontSize={'20px'}>
            <HStack p={'0 20px'} justifyContent={'space-around'}>
                <Text>4 Results </Text>
                <Text>Date</Text>
            </HStack>
       </Container>
       <Container  maxW={'70%'} bgColor={'#717070'}  m={'0px auto'}  color={'white'}>
            <HStack justifyContent={'space-between'} p={'0 20px'}>
                <Text>Train No. & Name</Text>
                <Text>Departure</Text>
                <Text>Duration </Text>
                <Text>Arrival</Text>
            </HStack>
       </Container>

  </>
}

export default Header
