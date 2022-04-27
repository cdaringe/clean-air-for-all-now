/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Mission } from "../src/components/mission";
import Featured from "../src/components/featured";

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
        </div>
      </main>
    </div>
  );
}
