import Link from "next/link";

const newsletters = [
  "Newsletter1.docx",
  "Newsletter2.docx",
  "Newsletter3.docx",
];
export default function Newsletters(props) {
  return (
    <div {...props}>
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
