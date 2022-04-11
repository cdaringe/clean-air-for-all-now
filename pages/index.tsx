import Head from "next/head";
import Image from "next/image";
import { Mission } from "../src/components/mission";

export default function Home({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Head>
        <title>Clean Air For All</title>
        <meta name="description" content="Clean Air For All - New Mexico" />
      </Head>
      <main>
        <div className="w-full p-4">
          <img src="intel-rancho.jpg" className="shadow-lg rounded" />
          <p className="text-gray">
            The Intel plant in Rio Rancho spews toxic fumes above a residential
            neighborhood in Corrales, NM. A house is for sale just down from the
            plant; sellers must disclose the risks of living here to potential
            buyers.
          </p>
        </div>
        <Mission />
      </main>
    </div>
  );
}
