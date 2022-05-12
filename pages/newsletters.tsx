import Link from "next/link";
import { PageHeader } from "../src/components/page-header";

const newsletters = [
  "Newsletter1.docx",
  "Newsletter2.docx",
  "Newsletter3.docx",
];
export default function Newsletters(props) {
  return (
    <div {...props}>
      <PageHeader>Newsletters</PageHeader>
      <ul className="list-disc list-inside">
        {newsletters.map((nl) => (
          <li key={nl}>
            <Link passHref href={`/newsletters/${nl}`}>
              <a className="text-blue-600 visited:text-purple-800">{nl}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
