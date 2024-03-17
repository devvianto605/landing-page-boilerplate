import { Center, Stack, Text, Box } from '@chakra-ui/react';

const Intro = () => {
  return (
    <Box>
      <Center pb={{ base: '60px', md: '100px' }} px={{ base: '40px', md: '80px' }}>
        <Stack alignItems='center' maxW='1000px' spacing='30px'>
          <Text
            fontFamily='Poppins'
            fontSize={{ base: '16px', md: '20px' }}
            fontWeight={500}
            lineHeight='30px'
            textAlign='center'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text
            fontFamily='Poppins'
            fontSize={{ base: '16px', md: '18px' }}
            fontWeight={400}
            lineHeight='26px'
            textAlign='center'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Intro;
