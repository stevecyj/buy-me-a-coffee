import {
  Container,
  Box,
  Flex,
  Text,
  Image,
  Center,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Skeleton,
  Input,
  Textarea,
} from '@chakra-ui/react';
import CoffeeLogo from './coffee.svg';
import {
  ConnectWallet,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { BUYACOFFEE_ADDRESS } from './const/contractAddress';
import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { contract } = useContract(BUYACOFFEE_ADDRESS);
  // method getTotalCoffee in contract
  const { data: totalCoffee, isLoading: loadingTotalCoffee } = useContractRead(
    contract,
    'getTotalCoffee',
  );

  // useEffect(() => {
  //   console.log('contract', contract);
  // }, [contract]);

  return (
    <Box bg='#fefefe' w={'100%'} h={'100%'}>
      <Container maxW={'1200px'} w={'100%'}>
        {/*Navbar*/}
        <Flex
          px='10px'
          bg={{ base: '#fff' }}
          h={'120px'}
          borderRadius={'20px'}
          boxShadow={'lg'}
        >
          <Center w='100%'>
            <Image src={CoffeeLogo} w={50} h={50} alt='Buy Me a Coffee' />
            <Text w={'100%'} fontWeight={600} fontSize={'24px'}>
              Buy Me A Coffee
            </Text>
            <Box mr='2rem'>
              <ConnectWallet btnTitle='連接錢包' />
            </Box>
          </Center>
        </Flex>
        <Flex
          w={'100%'}
          alignItems={'center'}
          justifyItems={'space-between'}
          py={'20px'}
          h='100px'
          flexDirection={'column'}
        >
          <SimpleGrid columns={2} spacing={10} mt={'40px'} w={'100%'}>
            {/*左半邊卡片*/}
            <Box>
              <Card>
                <CardBody>
                  <Heading size='md' mb='20px'>
                    Buy Me a Coffee
                  </Heading>
                  <Flex>
                    <Text>Total Coffee：</Text>
                    <Skeleton w={'20px'} isLoaded={!loadingTotalCoffee}>
                      {totalCoffee?.toString()}
                    </Skeleton>
                  </Flex>
                  <Text fontSize='xl' py='10px'>
                    你的名字
                  </Text>
                  <Input
                    bg='gray.100'
                    maxLength={16}
                    placeholder='請輸入名字，例：Mike'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/*  你的訊息*/}
                  <Text fontSize='xl' py='10px'>
                    你的訊息
                  </Text>
                  <Textarea
                    value={message}
                    size='lg'
                    bg='gray.100'
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Box mt={'20px'}></Box>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
