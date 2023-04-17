import { FC } from 'react';
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Box, Text } from "@chakra-ui/react";

export async function loader({ params, request }: LoaderArgs) {
  const who = params['who'];

  return json({who});
}

const testPage: FC = () => {
  const data = useLoaderData<any>({who:'xx'});

  return (
    <div>
      <Box bg="tomato" w="100%" p={4} color="white">
        Hello World!
        <div>{JSON.stringify(data)}</div>
      </Box>
      <Text fontSize="5xl">Hello</Text>
    </div>
  );
}

export default testPage;
