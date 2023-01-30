import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import { Abel } from "@next/font/google";

const abel = Abel({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={abel.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
