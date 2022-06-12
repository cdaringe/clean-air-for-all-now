/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Mission } from "../src/components/mission";
import Featured from "../src/components/featured";
import { Link } from "../src/components/link";

export default function Home(props) {
  return (
    <div {...props}>
      <Head>
        <title>Clean Air For All</title>
        <meta name="description" content="Clean Air For All - New Mexico" />
      </Head>
      <main>
        <div className="w-full">
          <Mission />
          <a
            target="blank"
            href="https://gofund.me/81a09bb5"
            className="block font-bold text-center cursor-pointer mb-4 p-4 w-full bg-blue-500 hover:bg-blue-800 transition-all rounded drop-shadow-lg text-white"
          >
            Donate Now!
          </a>
          <Featured />
          <img
            alt="intel rancho"
            src="intel-rancho.jpg"
            className="shadow-lg rounded"
          />
          <p className="text-gray">
            The Intel plant in Rio Rancho spews toxic fumes above a residential
            neighborhood in Corrales, NM. A house is for sale just down from the
            plant; sellers must disclose the risks of living here to potential
            buyers.
          </p>
          <Link href="intel-rancho-map.jpeg">
            <img
              alt="intel rancho map"
              src="intel-rancho-map.jpeg"
              className="shadow-lg rounded mt-2 mb-2 block"
            />
          </Link>
          <caption className="text-gray-800 text-sm w-full italic">
            This aerial photo shows the dense residential development
            surrounding the Intel NM plant.
          </caption>
        </div>
      </main>
    </div>
  );
}
