import Card from "./card";

export function Mission(props) {
  return (
    <Card title="Mission Statement" {...props}>
      <p className="text-sm text-slate-700">
        Clean Air for All Now (CAFA-now), while acknowledging the importance of
        the products Intel manufactures, is dedicated to curbing the toxic air
        emissions emitted from Intel {"New Mexico's"} plant by informing the
        public of their harmful effects and exhorting Intel to employ the best
        available emissions abatement equipment. Put people first.
      </p>
    </Card>
  );
}
