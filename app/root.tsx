import { extendTheme, ChakraProvider, Box, Heading, type ThemeConfig } from "@chakra-ui/react";
import type { V2_MetaFunction, LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

import { inputTheme } from './theme/inputTheme';
import { formTheme } from './theme/formTheme';

export const meta: V2_MetaFunction = () => {
  return [
    {
      property: "charset",
      content: "utf-8"
    },
    {
      property: "viewport",
      content: "width=device-width,initial-scale=1"
    }
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

function Document({
  children,
  title = "App title",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const theme = extendTheme({
  components: {
    Input: inputTheme,
    Form: formTheme,
    FormLabel: {
      baseStyle: {
        mb: "2px",
      },
    },
    // FormHelperText: {
    //   baseStyle: {
    //     mt: "0px",
    //   },
    // },
    // FormErrorMessage: {
    //   baseStyle: {
    //     mt: "0px",
    //   },
    // },
    Button: {
      sizes: {
        md: {
          p: "1px",
          h: "8",
          minW: "96px",
        },
      },
    },
  },
  colors: {
    brand: {
      100: "#ff11fc",
      900: "#1aff2c",
    },
    primary: {
      100: "#ff11fc",
      900: "#1aff2c",
    },
  },
});

export default function App() {
  // throw new Error("💣💥 Booooom");

  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}


// How ChakraProvider should be used on CatchBoundary
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error ? error.message : JSON.stringify(error)}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}