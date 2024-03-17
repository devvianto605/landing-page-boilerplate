import Location from '@assets/icons/carbon_location-filled.svg'; // Replace with random image
import Email from '@assets/icons/ic_round-email.svg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import RandomLogo from '@assets/icons/random_logo.svg'; // Replace with folder of logos
import Phone from '@assets/icons/teenyicons_phone-solid.svg';
import { Box, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg='#121212' p={{ base: '40px', md: '80px' }} w='100%'>
      <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '30px', md: '60px' }}>
        <Stack gap={{ base: '11px', md: '36px' }} w={{ base: '100%', md: '40%' }}>
          {/* <Image alt='Email' maxH={{ base: '100px', md: '120px' }} src={RandomLogo} /> */}
          <Text
            color='white'
            fontFamily='Poppins'
            fontSize={{ base: '12px', md: '20px' }}
            fontWeight={400}
            lineHeight='30px'
          >
            {`"Blorp your way to a flooberful experience!"`}
          </Text>
        </Stack>
        <Divider
          border='0.1px solid white'
          display={{ base: 'none', md: 'block' }}
          h='240px'
          opacity={0.4}
          orientation='vertical'
        />
        <Stack flex={1} gap='24px'>
          <Heading
            color='white'
            fontFamily='Poppins'
            fontSize={{ base: '16px', md: '2จpx' }}
            fontWeight={700}
            lineHeight='20px'
            mb='6px'
          >
            Contact Us
          </Heading>
          <Flex alignItems='center' gap='24px'>
            <Image alt='Location Pin' height='28px' src={Location} width='28px' />
            <Stack spacing={0}>
              <Text color='white' fontSize={{ base: '10px', md: '12px' }} textStyle='footer'>
                123 Whimsical Lane, Dimension X
              </Text>
            </Stack>
          </Flex>
          <Flex alignItems='center' gap='24px'>
            <Image alt='Phone' height='28px' src={Phone} width='28px' />
            <Text color='white' fontSize={{ base: '10px', md: '12px' }} textStyle='footer'>
              987-555-Bleep
            </Text>
          </Flex>
          <Flex alignItems='center' gap='24px'>
            <Image alt='Email' height='28px' src={Email} width='28px' />
            <Text color='white' fontSize={{ base: '10px', md: '12px' }} textStyle='footer'>
              nonsensicalcompany@madeupdomain.com
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
