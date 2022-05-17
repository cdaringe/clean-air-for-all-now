import ListPage from "../src/components/list-page";

const links = [
  {
    text:
      "Article - Female workers at semiconductor plants face greater risk of leukemia and death",
    href:
      "https://web.archive.org/web/20220214200114/https://english.hani.co.kr/arti/english_edition/e_national/895075.html",
  },
];

const Studies = (props) => (
  <ListPage title="Scientific Studies" links={links} {...props} />
);
export default Studies;
