import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import { Router } from "next/router";
import NProgress from "nprogress";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

import { Footer } from "../components/FooterSection";
import { Menu } from "../components/Menu";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

import GlobalStyle from "../styles/globalstyles";
import "aos/dist/aos.css";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("common");

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
      <Head>
        <title>{t("page-title")}</title>
        <meta name="description" content={t("page-description")} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
