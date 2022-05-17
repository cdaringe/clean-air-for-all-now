const ComHeader: React.FC<{ chemicalLabel: string }> = ({ chemicalLabel }) => {
  const now = new Date();
  return (
    <h3 className="text-lg mb-2">
      Intel NM Chemical of the Month{" "}
      {now.toLocaleString("default", { month: "long" })}{" "}
      {now.toLocaleString("default", { year: "numeric" })} {chemicalLabel}
    </h3>
  );
};

export default ComHeader;
