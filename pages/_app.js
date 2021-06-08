import "semantic-ui-css/semantic.min.css";
import { MediaContextProvider } from "../media";
function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
}

export default MyApp;
