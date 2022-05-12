import { PageHeader } from "../src/components/page-header";

export default function AboutUs(props) {
  return (
    <div {...props}>
      <PageHeader>About Us</PageHeader>
      <p className="mb-2">
        Clean Air for All Now (CAFA-now) was organized to educate and inform the
        public about Toxic Air Pollutants from the Intel plant in Rio Rancho New
        Mexico. {"Intel's"} dangerous emissions are being released into
        residential neighborhoods where residents have reported terrible odors
        and related illnesses for over 30 years.
      </p>
      <p className="mb-2">
        CAFA-now will share data, studies, articles, testimonies and pertinent
        information through news media, cafanow.com, email, change.org, and a
        variety of social media platforms. We will continually communicate with
        and obtain the best available information from governmental agencies,
        politicians, private non-profit organizations, technical and healthcare
        sources and Intel. And we are undertaking a continuous effort to
        identify and measure the airborne chemicals that Intel is emitting.
      </p>
      <p className="mb-2">
        We acknowledge the importance of Intel to our local, state and national
        economies and to national security. Nevertheless, CAFA-now’s goal
        remains to hold Intel accountable for the chemicals they release into
        the air that all who live near the plant must breath 24 hours a day, 365
        days a year. We are very concerned about the 75,000 people living near
        the Intel plant - particularly infants and young children, the elderly
        and those with chronic medical conditions who are most vulnerable to
        developing serious illnesses from exposure to these pollutants. The
        Environmental Protection Agency and the New Mexico Environment
        Department have done nothing concrete to protect communities near the
        Intel plant from these dangerous chemicals. As Intel retools its plant
        to produce a new generation of computer chips but without a more
        enhanced approach to abatement, their toxic emissions will only
        increase.
      </p>
      <p className="mb-2">
        We invite all who are concerned to join our efforts, inform your
        neighbors, and consider a tax-deductible donation. Help us as we try to
        protect everyone who is being exposed to these dangerous chemicals by
        convincing Intel to improve its emissions abatement.
      </p>
    </div>
  );
}
