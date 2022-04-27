import Link from "next/link";

export default function COM(props) {
  return (
    <div {...props}>
      <h2 className="text-xl">Chemical Of The Month</h2>
      <h3 className="text-lg mb-2">
        Intel NM Chemical of the Month March 2022 Hydrogen Fluoride (HF)
      </h3>
      <p className="mb-2">
        [The following is a compilation of material from the websites of the
        Centers for Disease Control and Prevention and the National Institutes
        of Health.]
      </p>
      <p className="mb-2">
        Hydrogen fluoride is a chemical compound that contains fluorine. It can
        exist as a colorless gas or as a fuming liquid, or it can be dissolved
        in water. When hydrogen fluoride is dissolved in water, it may be called
        hydrofluoric acid. Hydrogen fluoride can be released when other
        fluoride-containing compounds such as ammonium fluoride are combined
        with water. It is used for a variety of industrial processes including
        etching glass and cleaning in the manufacture of glass, semiconductors,
        computer chips and ceramics. Hydrogen fluoride is highly corrosive to
        all tissues. It goes easily and quickly through the skin and into the
        tissues in the body. There it damages the cells and causes them to not
        work properly. The seriousness of poisoning caused by hydrogen fluoride
        depends on the amount, route, and length of time of exposure, as well as
        the age and preexisting medical condition of the person exposed.
        Breathing hydrogen fluoride can damage lung tissue and cause swelling
        and fluid accumulation in the lungs (pulmonary edema). Skin contact with
        hydrogen fluoride may cause severe burns that develop after several
        hours and form skin ulcers. Systemic absorption occurs following skin
        exposure or ingestion and can lead to serious organ damage and death.
        Chronic inhalation exposure of humans to low levels of hydrogen fluoride
        has resulted in irritation and congestion of the nose, throat, and
        lungs. Skeletal fluorosis, a bone disease, was reported among workers
        chronically exposed to fluorides (including hydrogen fluoride) via
        inhalation. Damage to the liver, kidneys, and lungs has been observed in
        animals chronically exposed to hydrogen fluoride by inhalation. (1) EPA
        has not established a Reference Concentration (RfC) or a Reference Dose
        (RfD) for hydrogen fluoride.
      </p>
      <br />
      <hr />
      <br />
      <p>
        Intel New Mexico uses and emits a wide variety of chemicals, many of
        which are toxic and present a danger to human health and to the
        environment. CAFA-now leadership has added this Chemical-of-the Month
        feature to our website because we believe that those living near the
        Intel plant need to know as much as possible about individual chemicals
        that Intel emits. Once readers have reviewed the information on this
        site, we suggest that they do additional research to learn more about
        each Chemical of the Month.
      </p>
      <br />
      <p>
        Most data about the impact of toxic chemicals on human health come from
        studies of occupational exposure where concentrations are substantially
        higher than would normally be encountered outside industrial facilities,
        e.g., in residential neighborhoods. So too, determinations of safe
        concentrations of these chemicals are either based on or influenced by
        studies in occupational settings, and very little data are available
        about the impact of exposure to concentrations below the EPA-published
        safe levels such as would be encountered in non-occupational (e.g.,
        residential) settings. Recently though, more work is being done to
        examine the potential risk of constant exposure to low levels of toxic
        chemicals, and several articles about that work are posted on this
        website on the{" "}
        <Link href={"/articles"}>
          <a className="text-blue-600 visited:text-purple-800">articles</a>
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
