import { Container, Box, Flex, Text, Image, Center } from '@chakra-ui/react';
import CoffeeLogo from './coffee.svg';

export default function Home() {
  return (
    <Box bg='#fefefe' w={'100%'} h={'100%'}>
      <Container maxW={'1200px'} w={'100%'}>
        {/*Navbar*/}
        <Flex px='10px' bg={{ base: '#fff' }} h={'120px'} borderRadius={'20px'} boxShadow={'lg'}>
          <Center>
            <Image src={CoffeeLogo} w={50} h={50} alt='Buy Me a Coffee' />
            <Text w={'100%'} fontWeight={600} fontSize={'24px'}>
              Buy Me A Coffee
            </Text>
          </Center>
        </Flex>
      </Container>
    </Box>
  );
}
