import { Link } from "../src/components/link";

export default function ContactUs(props) {
  return (
    <div {...props}>
      <h2 className="text-lg">Email</h2>
      Write us now at{" "}
      <Link href={`mailto:cafanow@gmail.com`}>cafanow@gmail.com</Link>
    </div>
  );
}
