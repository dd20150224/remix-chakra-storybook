import {
  Box,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';

const SimpleCard1 = ({ img }) => {
  return (
    <Box  p={5} bg="cyan.400"  borderRadius={20} as="article">
    <Image h="350px" objectFit='fill' w="100%" src={img} alt="stock image"/>
   <Heading size="xl" fontWeight="bold"> Blog Title </Heading> 
   <Text noOfLines={2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum urna quam. Aenean risus turpis, aliquet id diam et, lobortis pellentesque ex. Nulla facilisi. Maecenas. </Text>
    </Box>  
)

export default SimpleCard1;