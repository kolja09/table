import type { AppProps } from "next/app";
import { SSRProvider, Provider, defaultTheme } from "@adobe/react-spectrum";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
