import "../styles/globals.css";
import { Banner } from "../src/components/banner";
import { Nav } from "../src/components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app m-auto w-full md:max-w-4xl bg-gradient-to-r from-transparent to-cyan-300">
      <Banner className="header pt-8 pb-4" />
      <Nav className="grow-0 mb-2" />
      <Component className="body pl-4 pr-4" {...pageProps} />
      <footer className="mt-8"></footer>
    </div>
  );
}

export default MyApp;
