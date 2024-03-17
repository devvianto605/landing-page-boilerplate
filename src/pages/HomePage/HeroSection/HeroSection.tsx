import Logo from '@assets/svg/random_logo.svg';
import React from 'react';
import { Box, Flex, Hide, Image, Show, VStack, Heading, Text } from '@chakra-ui/react';
import StoreCard from './StoreCard/StoreCard';
import AppStore from '@assets/images/appStore.png';
import AppStoreWhite from '@assets/images/appStore-white.png';
import PlayStore from '@assets/images/playStore.png';
import PlayStoreWhite from '@assets/images/playStore-white.png';

const HeroSection = () => {
  return (
    <Box display='flex' position='relative'>
      <Box
        bgGradient='linear(to-b, rgba(255, 255, 255, 0.6),rgba(0, 0, 0, 0.0))'
        h={{ base: '340px', md: '100vh' }}
        position='absolute'
        w='100vw'
      />
      <Image bgColor={'blue.200'} h={{ base: '340px', md: '100vh' }} objectFit='cover' src={''} w='100vw' />
      <VStack gap={{ base: '36px', md: '96px' }} left='50%' position='absolute' transform='translateX(-50%)'>
        <Image mt={{ base: '96px', md: '120px' }} src={Logo} width={{ base: '150px', md: '300px' }} />
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '20px', md: '40px' }}
          height={{ base: '68px', md: '440px' }}
        >
          <Show below='md'>
            <StoreCard image={AppStoreWhite} url={''} />
            <StoreCard image={PlayStoreWhite} url={''} />
          </Show>
          <Hide below='md'>
            <StoreCard
              description={
                <React.Fragment>
                  <Heading
                    display={{ base: 'none', md: 'block' }}
                    fontSize='30px'
                    lineHeight='1.5'
                    textAlign='center'
                    textStyle='h2'
                  >
                    Download Now!
                  </Heading>
                  <Text display={{ base: 'none', md: 'block' }} fontSize='24px' textAlign='center' textStyle='h4'>
                    for iOs
                  </Text>
                </React.Fragment>
              }
              image={AppStore}
              url={''}
            />
            <StoreCard
              description={
                <React.Fragment>
                  <Heading
                    display={{ base: 'none', md: 'block' }}
                    fontSize='30px'
                    lineHeight='1.5'
                    textAlign='center'
                    textStyle='h2'
                  >
                    Download Now!
                  </Heading>
                  <Text display={{ base: 'none', md: 'block' }} fontSize='24px' textAlign='center' textStyle='h4'>
                    for Android
                  </Text>
                </React.Fragment>
              }
              image={PlayStore}
              url={''}
            />
          </Hide>
        </Flex>
      </VStack>
    </Box>
  );
};

export default HeroSection;
