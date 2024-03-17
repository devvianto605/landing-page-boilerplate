import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useId, useState } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

const Showcase = () => {
  const [goToSlide, setGoToSlide] = useState(1);

  const slides = [
    {
      content: (
        <Box
          bgColor={'blue.500'}
          bgImage={''}
          bgSize='cover'
          borderRadius='24px'
          h={{ base: '185px', md: '400px' }}
          w={{ base: '288px', md: '622px' }}
        >
          <Flex
            alignItems='end'
            bgGradient='linear(to-t, rgba(17, 15, 15, 0.6) 10%,rgba(0, 0, 0, 0.0))'
            borderRadius='24px'
            h={{ base: '185px', md: '400px' }}
            justifyContent='flex-start'
            w={{ base: '288px', md: '622px' }}
          >
            <Box mb={{ base: '16px', md: '24px' }} ml={{ base: '16px', md: '32px' }}>
              <Text color='white' fontFamily='Poppins' fontSize={{ base: '14px', md: '24px' }} fontWeight='500'>
                Lorem ipsum dolor sit amet
              </Text>
            </Box>
          </Flex>
        </Box>
      ),
      key: useId(),
    },
    {
      content: (
        <Box
          bgColor={'blue.500'}
          bgImage={''}
          bgSize='cover'
          borderRadius='24px'
          h={{ base: '185px', md: '400px' }}
          w={{ base: '288px', md: '622px' }}
        >
          <Flex
            alignItems='end'
            bgGradient='linear(to-t, rgba(17, 15, 15, 0.6) 10%,rgba(0, 0, 0, 0.0))'
            borderRadius='24px'
            h={{ base: '185px', md: '400px' }}
            justifyContent='flex-start'
            w={{ base: '288px', md: '622px' }}
          >
            <Box mb={{ base: '16px', md: '24px' }} ml={{ base: '16px', md: '32px' }}>
              <Text color='white' fontFamily='Poppins' fontSize={{ base: '14px', md: '24px' }} fontWeight='500'>
                Lorem ipsum dolor sit amet
              </Text>
            </Box>
          </Flex>
        </Box>
      ),
      key: useId(),
    },
    {
      content: (
        <Box
          bgColor={'blue.500'}
          bgImage={''}
          bgSize='cover'
          borderRadius='24px'
          h={{ base: '185px', md: '400px' }}
          w={{ base: '288px', md: '622px' }}
        >
          <Flex
            alignItems='end'
            bgGradient='linear(to-t, rgba(17, 15, 15, 0.6) 10%,rgba(0, 0, 0, 0.0))'
            borderRadius='24px'
            h={{ base: '185px', md: '400px' }}
            justifyContent='flex-start'
            w={{ base: '288px', md: '622px' }}
          >
            <Box mb={{ base: '16px', md: '24px' }} ml={{ base: '16px', md: '32px' }}>
              <Text color='white' fontFamily='Poppins' fontSize={{ base: '14px', md: '24px' }} fontWeight='500'>
                Lorem ipsum dolor sit amet
              </Text>
            </Box>
          </Flex>
        </Box>
      ),
      key: useId(),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <Stack alignItems='center' overflow='hidden' position='relative' pt={{ base: '96px', md: '200px' }} w='100vw'>
      <Heading fontFamily='Poppins' fontSize={{ base: '30px', md: '48px' }} fontWeight={600} lineHeight='40px'>
        Lorem ipsum
      </Heading>
      <Box height={{ base: '240px', lg: '500px' }} w={{ base: '120vw', md: '80vw' }}>
        <Carousel
          animationConfig={config.gentle}
          goToSlide={goToSlide}
          offsetRadius={100}
          showNavigation={false}
          slides={slides}
        />
      </Box>
    </Stack>
  );
};

export default Showcase;
