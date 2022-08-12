import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Footer } from "../components/FooterSection";
import { Menu } from "../components/Menu";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import GlobalStyle from "../styles/globalstyles";
import "aos/dist/aos.css";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </>
  );
}
