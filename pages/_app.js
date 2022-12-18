import "../styles/globals.css";
import SearchContext from "../context/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchContext>
        <Component {...pageProps} />
      </SearchContext>
    </>
  );
}

export default MyApp;
