import {
  Button,
  Center
} from '@chakra-ui/react';
import CommonForm from '../components/form/CommonForm';

export default function index() {
  return (
    <div>
      <Center color="brand.900">
        Hello World
      </Center>
      <CommonForm></CommonForm>
      <Button colorScheme="red">Blue Button</Button>
    </div>
  )
}