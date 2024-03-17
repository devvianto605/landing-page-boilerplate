import ScreenShot from '@assets/images/app-screenshot.png';
import { Box, Button, Center, Divider, HStack, Heading, Image, Link, Show, Stack, Text } from '@chakra-ui/react';
import { useId, useState } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

const MobileApp = () => {
  const [goToSlide, setGoToSlide] = useState(1);

  const slides = [
    {
      content: (
        <Stack spacing='36px' width='300px'>
          <Image h='360px' src={ScreenShot} />
          <Text fontFamily='Poppins' fontSize='18px' fontWeight={500} lineHeight='26px' textAlign='center'>
            Lorem ipsum
          </Text>
        </Stack>
      ),
      key: useId(),
    },
    {
      content: (
        <Stack spacing='36px' width='300px'>
          <Image h='360px' src={ScreenShot} />
          <Text fontFamily='Poppins' fontSize='18px' fontWeight={500} lineHeight='26px' textAlign='center'>
            Lorem ipsum
          </Text>
        </Stack>
      ),
      key: useId(),
    },
    {
      content: (
        <Stack spacing='36px' width='300px'>
          <Image h='360px' src={ScreenShot} />
          <Text fontFamily='Poppins' fontSize='18px' fontWeight={500} lineHeight='26px' textAlign='center'>
            Lorem ipsum
          </Text>
        </Stack>
      ),
      key: useId(),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <Center overflow='hidden' px={{ base: '40px', md: '80px' }} py={{ base: '40px', md: '60px' }}>
      <Stack alignItems='center' maxW='100vw' spacing={{ base: '20px', md: '44px' }} w='100%'>
        <Divider borderColor='#545454' h='1px' w='80vw' />
        <Heading
          fontFamily='Poppins'
          fontSize={{ base: '30px', md: '48px' }}
          fontWeight={600}
          lineHeight='40px'
          mt={{ base: '40px', md: '56px' }}
        >
          Mobile Application
        </Heading>
        <Show above='md'>
          <HStack spacing={{ base: '30px', md: '48px' }}>
            {Array(3)
              .fill(null)
              .map((element, idx) => (
                <Stack key={`app-demo-${idx}`} maxW='300px' spacing='36px'>
                  <Image minH='560px' minW='280px' src={ScreenShot} />
                  <Text fontFamily='Poppins' fontSize='20px' fontWeight={500} lineHeight='26px' textAlign='center'>
                    Lorem ipsum
                  </Text>
                </Stack>
              ))}
          </HStack>
        </Show>
        <Show below='sm'>
          <Box h='450px' w='150%'>
            <Carousel
              animationConfig={config.gentle}
              goToSlide={goToSlide}
              offsetRadius={5}
              showNavigation={false}
              slides={slides}
            />
          </Box>
        </Show>
        <Link href='/#top'>
          <Button
            fontSize={{ base: '20px', md: '24px' }}
            h={{ base: '56px', md: '60px' }}
            mt={{ base: '32px', md: '88px' }}
            variant='solid'
            w={{ base: '335px', md: '400px' }}
          >
            Download Now
          </Button>
        </Link>
      </Stack>
    </Center>
  );
};

export default MobileApp;
