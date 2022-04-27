import { Link } from "../src/components/link";

const links = [
  {
    url: "https://time.com/6140476/intel-building-factory-ohio/",
    text: "Exclusive: Intel Reveals Plans for Massive Factory in Ohio | Time",
  },
];

export default function NewsMedia(props) {
  return (
    <div {...props}>
      <ul className="list-disc list-inside">
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
