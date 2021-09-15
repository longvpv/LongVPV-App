import "../public/css/index.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "../layout/mainLayout";
import withRedux from "../redux/withRedux";
import "../libs/extensions";

function MyApp(props: any) {
  const { Component, pageProps, store } = props;
  const AppLayout = Component.Layout || MainLayout;
  // const persistor = persistStore(store);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FAAFC",
      },
      secondary: {
        main: "#d32f2f",
      },
    },
  });
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate
           loading={<Component {...pageProps} />}
           persistor={persistor}
         > */}

      <AppLayout {...pageProps}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppLayout>

      {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
}
export default MyApp;

// export default withRedux(MyApp);
