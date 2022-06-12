import ComHeader from "./com-header";
import { Link } from "./link";
import { PageHeader } from "./page-header";
import { SectionHeader } from "./section-header";

const ComPage: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <PageHeader>Chemical Of The Month</PageHeader>
      <ul className="list-disc list-inside">
        {[
          {
            month: "March",
            link: {
              text: "Hydrogen Fluoride",
              url: "https://github.com/cdaringe/clean-air-for-all-now/files/8710034/Chemical.of.the.Month-HF.docx",
            },
          },
          {
            month: "April",
            link: {
              text: "Arsine",
              url: "https://github.com/cdaringe/clean-air-for-all-now/files/8710020/Arsine-Chemical.of.the.Month.docx",
            },
          },
          {
            month: "May",
            link: {
              text: "Phosphine",
              url: "https://github.com/cdaringe/clean-air-for-all-now/files/8710019/Phosphine.docx",
            },
          },
        ].map(({ month, link }) => (
          <li key={JSON.stringify([month, link])}>
            {month} Intel Chemical of the Month:{" "}
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default ComPage;
