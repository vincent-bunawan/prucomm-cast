import "../styles/globals.css";
import Layout from "./components/Layout";
import { DataProvider } from "../store/GlobalState";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></Script>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}

export default MyApp;
