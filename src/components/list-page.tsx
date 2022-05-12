import Link from "next/link";
import { PageHeader } from "./page-header";

export default function ListPage({
  links,
  title,
  ...rest
}: React.HTMLProps<HTMLDivElement> & {
  links: { text: string; href: string }[];
}) {
  return (
    <div {...rest}>
      <PageHeader>{title}</PageHeader>
      <ul className="list-disc list-inside p-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link passHref href={l.href}>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 visited:text-purple-800"
              >
                {l.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
