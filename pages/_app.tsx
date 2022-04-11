import "../styles/globals.css";
import { Banner } from "../src/components/banner";
import { Nav } from "../src/components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="m-auto w-full md:max-w-4xl  bg-gradient-to-r from-transparent to-cyan-300">
      <Banner className="pt-8" />
      <div className="flex">
        <Nav className="grow-0" />
        <Component className="flex" {...pageProps} />
      </div>
      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}

export default MyApp;
