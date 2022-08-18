import Link from "next/link";
import { PageHeader } from "../src/components/page-header";
import fs from "fs";
import path from "path";

export function getStaticProps() {
  return {
    props: {
      basenames: fs.readdirSync(
        path.join(process.cwd(), "public", "newsletters")
      ),
    },
  };
}

export default function Newsletters({ basenames, ...props }) {
  return (
    <div {...props}>
      <PageHeader>Newsletters</PageHeader>
      <ol className="list-disc list-inside">
        {basenames.reverse().map((nl) => (
          <li key={nl}>
            <Link passHref href={`/newsletters/${nl}`}>
              <a className="text-blue-600 visited:text-purple-800">
                {nl.replace(/^\d+\s+/, "").replace(".pdf", "")}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
