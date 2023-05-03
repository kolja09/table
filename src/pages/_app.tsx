import type { AppProps } from "next/app";
import { SSRProvider, Provider, darkTheme } from "@adobe/react-spectrum";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={darkTheme}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
