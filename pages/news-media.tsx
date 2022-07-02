import ListPage from "../src/components/list-page";

const links = [
  {
    href: "https://time.com/6140476/intel-building-factory-ohio/",
    text: "Exclusive: Intel Reveals Plans for Massive Factory in Ohio | Time",
  },
  {
    text: "Marcy Brandenburg’s Letter to the Editor/Albuquerque Journal printed 10/12/2021",
    href: "/articles/CRCAWlettertocomment.pdf",
  },
  {
    text: "Op/Ed Letter Albuquerque Journal - Barbara Rockwell, author of Boiling Frogs Intel vs The Village",
    href: "/articles/BarbaraRockwellLtrToEditorCC.pdf",
  },
  {
    text: "Carolyn Carlson's Article in 'The Paper' Intel Moves Forward With Making Tiny Chips and Using Lots of Water - The Paper. (abq.news)",
    href: "https://web.archive.org/web/20220214200114/https://abq.news/2021/10/intel-moves-forward-with-making-tiny-chips-and-using-lots-of-water/",
  },
  {
    text: "2021 October 23 Issue INTEL Watchdog Group Changes Name – Corrales Comment",
    href: "https://web.archive.org/web/20220214200114/https://corralescomment.com/2021/10/26/2021-october-23-issue-intel-watchdog-group-changes-name/",
  },
];

const NewsMedia = (props) => (
  <ListPage title="News Media" links={links} {...props} />
);

export default NewsMedia;
