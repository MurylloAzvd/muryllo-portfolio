import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import { Router } from "next/router";
import NProgress from "nprogress";

import { Footer } from "../components/FooterSection";
import { Menu } from "../components/Menu";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

import GlobalStyle from "../styles/globalstyles";
import "aos/dist/aos.css";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
