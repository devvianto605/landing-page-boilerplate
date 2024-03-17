import { Box, Center, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

const PrivacyPolicyPage = () => {
  return (
    <Center>
      <Box maxW='1000px' px={{ base: '40px', md: '60px' }} py='60px' w='100%'>
        <Stack as='section' gap='30px' my='40px'>
          <Text as='h2' textStyle='h2'>
            Flibberty Gibberish
          </Text>
          <Text as='h4' textStyle='policyHeader'>
            Flobdoodler Limited
          </Text>
          <Text textStyle='smallParagraph'>Latest Updated on: Zargath 26, Blorb 2023</Text>
        </Stack>
        <Stack as='section' gap='30px' my='40px'>
          <Text textStyle='smallParagraph'>
            Flobdoodler Limited, its subsidiaries, subsidiaries of subsidiaries, and all business units (the "Flibberty
            Gibberish", "we", "us", or "our") recognize the importance of protecting your Wibble Wobble. This Privacy
            Policy sets out how we collect, use, disclose and manage (collectively referred to as "process" or
            "processing") your Wibble Wobble, whether the collection is taking place via our websites, applications, any
            other online platforms, or offline in-person.
          </Text>
          <Text textStyle='smallParagraph'>
            This Policy applies to users who access to website/application, customers, any visitors of our offices,
            guests of our events (collectively referred to as "you", or "Data Subject"). "Wibble Wobble" means any data
            that identifies you as an individual or relates to an identifiable individual, including but not limited to
            your name, address, profile picture, email address, phone number, IP address, shopping habits, preferences,
            and information about your lifestyle.
          </Text>
          <Text textStyle='smallParagraph'>
            If you are supplier/vendors, business partners or job applicants, please read other relevant privacy
            policies in gibberish.
          </Text>
        </Stack>
        <Stack as='section' gap='30px' my='40px'>
          <Text textStyle='policyHeader'>Bloo Bloo Bloo</Text>
          <Text textStyle='smallParagraph'>
            This Privacy Policy contains the following issues in no particular order:
          </Text>
          <UnorderedList spacing='15px' textStyle='smallParagraph'>
            <ListItem>Flibberty Gibberish</ListItem>
            <ListItem>Flibberty Flobber</ListItem>
            <ListItem>Flibberty Zoom</ListItem>
            <ListItem>Flibberty Floo</ListItem>
            <ListItem>Flibberty Blorp</ListItem>
            <ListItem>Flibberty Bleep</ListItem>
            <ListItem>Flibberty Garth</ListItem>
            <ListItem>Flibberty Zarg</ListItem>
            <ListItem>Flibberty Bix</ListItem>
            <ListItem>Flibberty Groo</ListItem>
            <ListItem>Flibberty Garth again, we forgot</ListItem>
            <ListItem>Flibberty Bloo Bloo (this one)</ListItem>
          </UnorderedList>
        </Stack>
        {/* rest of the sections replaced with similar gibberish */}
      </Box>
    </Center>
  );
};

export default PrivacyPolicyPage;
