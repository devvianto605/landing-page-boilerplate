import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeColor = '#0EA5E9';

  return (
    <Box as='nav' display='flex' gap='80px' placeContent='center' position='absolute' top='30px' w='100%' zIndex='1000'>
      <NavLink to='/'>
        {({ isActive }) => (
          <Text color={isActive ? activeColor : 'black'} textStyle='link'>
            Home
          </Text>
        )}
      </NavLink>
      <NavLink to='/privacyPolicy'>
        {({ isActive }) => (
          <Text color={isActive ? activeColor : 'black'} textStyle='link'>
            Policy
          </Text>
        )}
      </NavLink>
    </Box>
  );
};

export default Header;
