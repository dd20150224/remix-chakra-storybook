// import type { LoaderArgs } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";
import {
  Box,
  Text
} from '@chakra-ui/react';

// export async function loader({ request }: LoaderArgs) {
//   return json({hello: 'world'});
// }

export default function testPage() {
  // const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Box bg="tomato" w="100%" p={4} color="white">
        Hello World!
      </Box>
      <Text fontSize="5xl">
        Hello
      </Text>
    </div>
  );
}
