import { Link } from "../src/components/link";
import { PageHeader } from "../src/components/page-header";

export default function ContactUs(props) {
  return (
    <div {...props}>
      <PageHeader>Email</PageHeader>
      Write us now at{" "}
      <Link href={`mailto:cafanow@gmail.com`}>cafanow@gmail.com</Link>
    </div>
  );
}
