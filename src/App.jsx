import { Container, Box, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="#fefefe" w={'100%'} h={'100%'}>
      <Container maxW={'1200px'} w={'100%'}>
        {/*Navbar*/}
        <Flex px="10px" bg={{ base: '#fff'}} h={'120px'} borderRadius={'20px'} boxShadow={'lg'}></Flex>
      </Container>
    </Box>
  );
}
