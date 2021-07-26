import GlobalStyle from '../styles/global';
import '../styles/slick.scss';
import { ContextAPIProvider } from '../context/ContextAPI';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ContextAPIProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ContextAPIProvider>
    </>
  );
}

export default MyApp;
