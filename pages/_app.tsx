import "../styles/globals.css";
import { Banner } from "../src/components/banner";
import { Nav } from "../src/components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app m-auto w-full md:max-w-4xl bg-gradient-to-r from-transparent to-cyan-300">
      <Banner className="header pt-8 pb-4" />
      <Nav className="grow-0 mb-2" />
      <Component className="body pl-4 pr-4" {...pageProps} />
      <footer className="mt-8">
        {
          /* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */
        }
      </footer>
    </div>
  );
}

export default MyApp;
