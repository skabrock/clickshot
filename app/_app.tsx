import { AppProps } from "next/app";
import { ModalProvider } from "./components/Modal/ModalProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log("test");

  return (
    <ModalProvider>
      test
      <Component {...pageProps} />
    </ModalProvider>
  );
};

export default MyApp;
