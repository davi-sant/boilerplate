import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="title" content="Alr Tecnologia" />
        <meta name="twitter:title" content="Alr Tecnologia" />
        <meta
          property="og:description"
          content="andre@alrtec.com.br Rua Salustiano Balbino dos Santos,
                  11. Centro – Cansanção – Bahia – 48840-000 Seg à Sex:
                  08:00 às 12:00, 14:00 às 18:00 – Sáb: 08:00 às 12:00 Facebook
                  Youtube Instagram Solicitar Contato Bem vindo à ALR Tecnologia!
                  Uma empresa focada em automação comercial E especializada em
                  pequenas e médias empresas. Utilizamos tecnologias de última …"
        />
        <meta
          name="twitter:description"
          content="andre@alrtec.com.br Rua Salustiano Balbino dos Santos,
                  11. Centro – Cansanção – Bahia – 48840-000 Seg à Sex:
                  08:00 às 12:00, 14:00 às 18:00 – Sáb: 08:00 às 12:00
                  Facebook Youtube Instagram Solicitar Contato Bem vindo à
                  ALR Tecnologia! Uma empresa focada em automação comercial
                  E especializada em pequenas e médias empresas.
                  Utilizamos tecnologias de última […]"
        />
        {/*<link rel="shortcut icon" href="" />*/}
        {/*<link rel="apple-touch-icon" href="" />*/}
        <title>Alr Tecnologia</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
