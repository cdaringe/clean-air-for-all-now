import ComHeader from "./com-header";
import { Link } from "./link";
import { PageHeader } from "./page-header";
import { SectionHeader } from "./section-header";

const ComPage: React.FC<
  {
    children: React.ReactNode;
    chemicalLabel: string;
  } & React.HTMLProps<HTMLDivElement>
> = ({ children, chemicalLabel, ...props }) => {
  return (
    <div {...props}>
      <PageHeader>Chemical Of The Month</PageHeader>
      <ComHeader chemicalLabel={chemicalLabel} />
      {children}
      <br />
      <SectionHeader>Previous Chemicals of the Month</SectionHeader>
      <ul className="list-disc list-inside">
        {[{ m: "05", y: 2022 }].map(({ m, y }) => (
          <li key={[m, y].join("_")}>
            <Link href={`/chemical-of-the-month/${y}-${m}`}>{`${y}-${m}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComPage;
