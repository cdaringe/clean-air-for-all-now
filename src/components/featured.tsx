import Link from "next/link";
import Card from "./card";

export default function Featured() {
  return (
    <Card title="Featured Article">
      <>
        <Link href={"/Long-Term-Exposure.docx"}>
          <a className="font-bold text-blue-600 visited:text-purple-800">
            Long-term exposure to permissible concentrations of air pollution
            linked with increased mortality risk
          </a>
        </Link>
        <br />
        <Link href={"https://www.hsph.harvard.edu/"}>
          <a className="font-light text-blue-600 visited:text-purple-800">
            Harvard T.H. Chan School of Public Health
          </a>
        </Link>
      </>
    </Card>
  );
}
