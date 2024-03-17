import { Image, Card, CardBody, Box } from '@chakra-ui/react';
import DownArrow from '@assets/svg/downArrow.svg';
import type { FC } from 'react';

type StoreCardProp = {
  image: string;
  description?: React.ReactNode;
  url?: string;
};

const StoreCard: FC<StoreCardProp> = ({ image, description, url }) => {
  return (
    <Card
      _hover={{ cursor: 'pointer' }}
      borderRadius={{ base: '12px', md: '40px' }}
      minH={{ base: '68px', md: '' }}
      shadow='lg'
      onClick={() => url && window.open(url, '_blank')}
    >
      <CardBody
        alignItems='center'
        display='flex'
        flexDir={{ base: 'row', md: 'column' }}
        gap={{ base: '0px', md: '40px' }}
        justifyContent='center'
        px={{ base: 10, md: 10 }}
        py={{ base: 4, md: 10 }}
        w={{ base: '163px', md: '400px' }}
      >
        <Image src={DownArrow} w={{ base: '24px', md: '100px' }} />
        <Box>{description}</Box>
        <Image height={{ base: '', md: '74px' }} minW={{ base: '108px', md: '' }} src={image} />
      </CardBody>
    </Card>
  );
};

export default StoreCard;
