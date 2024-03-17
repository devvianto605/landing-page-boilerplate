import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@components';

const MainLayout = () => {
  return (
    <Center bg='#F2F2F2;' w='100vw'>
      <Container maxW='2160px' p={0} position='relative'>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Center>
  );
};

export default MainLayout;
