/* eslint-disable react/no-children-prop */
import { Link } from "../src/components/link";
import { PageHeader } from "../src/components/page-header";
import fs from "fs";
import path from "path";
import P from "../src/components/atoms/p";

export function getStaticProps() {
  return {
    props: {
      basenames: fs.readdirSync(
        path.join(process.cwd(), "public", "chemicals")
      ),
    },
  };
}

export default function ChemicalOfTheMonth({ basenames, ...props }) {
  return (
    <div {...props}>
      <PageHeader>Chemical of the Month</PageHeader>
      <Link
        className="inline-block mt-4 mb-4"
        href="#com"
        children={`Jump to Chemical List ↩`}
      />
      <h2 className="font-bold first-letter">
        Introduction Chemical of the Month Feature
      </h2>
      <P>
        Intel New Mexico uses and emits a wide variety of chemicals, many of
        which are toxic and present a danger to human health and to the
        environment. CAFA-now leadership has added this Chemical-of-the Month
        feature to our website because we believe that those living near the
        Intel plant need to know as much as possible about individual chemicals
        that Intel emits. Once readers have reviewed the information on this
        site, we suggest that they do additional research to learn more about
        these chemicals.
      </P>
      <P>
        Material for each Chemical of the Month is gleaned from reliable sources
        such as the Environmental Protection Agency (EPA), the National
        Institutes of Health (NIH), the Centers for Disease Control and
        Prevention (CDC) and the Agency for Toxic Substances and Disease
        Registry (ATSDR), and the sources are noted. In some instances, this
        material will mention that among the uses of the chemical being
        described is the process of manufacturing computer chips or
        microprocessors. In others, this is not mentioned but nevertheless, the
        chemical in question is (or has been) used by Intel and most likely is
        employed as a solvent. See the video on our Home Page titled “How Are
        Microchips Made” at https://www.youtube.com/watch%3Fv%3Dg8Qav3vIv9s. It
        describes the general process for producing computer
        chips/microprocessors and points out the need for a variety of solvents.
      </P>
      <P>
        Much of the data about the impact of toxic chemicals on human health
        come from studies of occupational exposure where concentrations are
        substantially higher than would normally be encountered outside
        industrial facilities, e.g., in residential neighborhoods. So too, many
        of the determinations of safe concentrations of these chemicals are
        either based on or influenced by studies in occupational settings, and
        very little data are available about the impact of exposure to
        concentrations below the EPA-published safe levels such as would be
        encountered in non-occupational (e.g., residential) settings. Recently
        though, more work is being done to examine the potential risk of
        constant exposure to levels of toxic chemicals well below the EPA
        standards, and several articles about that work are posted on this
        website under the “ARTICLES” heading.
      </P>
      <P>
        Concentrations of emissions in the air around the Intel plant vary
        depending upon several factors including but not limited to the amounts
        actually being emitted, the direction and intensity of the wind, and the
        distance from the source(s) at the plant. CAFA-now is undertaking
        efforts to identify chemicals in the area and determine their
        concentrations.
      </P>
      <h2 className="mt-4 mb-2 text-lg font-bold">Chemicals</h2>
      <ol id="com" className="mb-10 list-disc list-inside">
        {basenames.reverse().map((nl) => (
          <li key={nl}>
            <Link passHref href={`/chemicals/${nl}`}>
              {nl.replace(/^\d+\s+/, "").replace(".pdf", "")}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
