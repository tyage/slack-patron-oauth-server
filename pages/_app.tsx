import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Slack Patron OAuth Server</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
