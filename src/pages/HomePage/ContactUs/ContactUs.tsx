import { Center, Stack, Heading, Text, Grid, Image, Box, Flex, useToast } from '@chakra-ui/react';
import { CustomInput, CustomTextarea, SmartForm, SubmitButton } from '@components';
import React from 'react';
import { z } from 'zod';
// import axios from 'Axios';

const contactFormSchema = z.object({
  detail: z.string().nonempty('All field must be filled'),
  email: z.string().nonempty('All field must be filled').email(),
  name: z.string().nonempty('All field must be filled'),
});
type ContactForm = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const toast = useToast();
  const handleSendEmail = async (/* formData: ContactForm*/) => {
    // const response = await axios.post('<API_ENDPOINT>', {
    //   detail: formData.detail,
    //   email: formData.email,
    //   name: formData.name,
    // });

    // if (response.status === 200) {
    //   window.location.reload();
    //   toast({
    //     description: 'We will get back to you as soon as possible.',
    //     duration: 4000,
    //     isClosable: true,
    //     status: 'success',
    //     title: 'Email Sent.',
    //   });

    //   return;
    // }

    toast({
      description: 'Something went wrong. Please try again later.',
      duration: 4000,
      isClosable: true,
      status: 'error',
      title: 'Email Failed.',
    });
  };

  return (
    <React.Fragment>
      <Box>
        {/* <Image
          height={{ base: '150px', md: '320px' }}
          opacity={0.6}
          position='absolute'
          src={Circle1}
          width={{ base: '150px', md: '320px' }}
        />
        <Image
          bottom={{ base: '1250px', md: '1000px' }}
          height={{ base: '300px', md: '320px' }}
          opacity={0.9}
          position='absolute'
          right={0}
          src={Circle2}
          width={{ base: '300px', md: '320px' }}
        /> */}
        <Center
          bgSize='cover'
          pb={{ base: '16px', md: '0px' }}
          pt={{ base: '80px', md: '80px' }}
          px={{ base: '40px', md: '80px' }}
        >
          <Stack gap={0} w={{ base: '95vw', md: '70vw' }}>
            <Flex justifyContent={{ base: 'center', md: 'unset' }}>
              <Heading
                fontFamily='Poppins'
                fontSize='36px'
                fontWeight={600}
                lineHeight='60px'
                mb={{ base: '24px', md: '35px' }}
                zIndex='1'
              >
                Contact us
              </Heading>
            </Flex>

            <Text
              fontFamily='Poppins'
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={400}
              lineHeight='30px'
              zIndex='1'
            >
              Got questions?
            </Text>
            <Text
              fontFamily='Poppins'
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={400}
              lineHeight='30px'
              mb='30px'
              zIndex='1'
            >
              We&apos;ll do our best to answer them for you
            </Text>
            <SmartForm<ContactForm, typeof contactFormSchema> schema={contactFormSchema} onSubmit={handleSendEmail}>
              <Stack gap='40px'>
                <Grid columnGap='40px' gap='24px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
                  <Stack gap='24px' h='100%' justifyContent='space-between'>
                    <CustomInput<ContactForm> bg='white' formLabel='name' name='name' size='lg' />
                    <CustomInput<ContactForm> bg='white' formLabel='email' name='email' size='lg' />
                  </Stack>
                  <CustomTextarea<ContactForm>
                    bg='white'
                    formLabel='detail'
                    h='148px'
                    name='detail'
                    resize={'none'}
                    size='lg'
                  />
                </Grid>
                <SubmitButton
                  alignSelf={{ base: 'center', md: 'flex-end' }}
                  fontSize={'20px'}
                  h='56px'
                  label='Send Message'
                  mb='56px'
                  variant='solid'
                  w={{ base: '335px', md: '240px' }}
                />
              </Stack>
            </SmartForm>
          </Stack>
        </Center>
      </Box>
      <iframe
        height='600px'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5511043053434!2d100.53154377529057!3d13.745605786645598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed205e668a7%3A0x68e0f6560c97f72!2z4Liq4Lii4Liy4Lih!5e0!3m2!1sth!2sth!4v1710672797043!5m2!1sth!2sth'
        width='100%'
      />
    </React.Fragment>
  );
};

export default ContactUs;
