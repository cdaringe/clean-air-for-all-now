import ListPage from "../src/components/list-page";

const links = [
  {
    text: "Letter from long-time New Environment Department Employee upon Retirement. He was afraid to release his letter prior to retiring for fear of retribution from his employers",
    href: "https://web.archive.org/web/20220214200114/https://mailchi.mp/39caaccc8e66/jimshively",
  },
  {
    text: "Boiling Frogs by Barbara Rockwell Intel vs. The Village (of Corrales)",
    href: "/articles/BarbaraRockwellLtrToEditorCC.pdf",
  },
];

const Testimonies = (props) => (
  <ListPage title="Testimonies" links={links} {...props} />
);

export default Testimonies;
