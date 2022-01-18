import { useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { LocalizationProvider } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { setupStore } from "store/store";
import { ModalProvider } from "components/common/ModalManager";
import theme from "theme";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const store = setupStore();
  return (
    <>
      <Head>
        <title>Tviy Box b2b</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={DateFnsUtils}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default App;
