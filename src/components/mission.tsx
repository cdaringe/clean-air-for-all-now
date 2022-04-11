export function Mission({ className = "" }) {
  return (
    <div className="flex font-sans">
      {/* <div className="flex-none w-48 relative">
        <img
          src="/classic-utility-jacket.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div> */}
      <form className="flex-auto m-4 p-4 bg-white shadow-lg rounded-md">
        <h1 className="flex-auto text-xl font-semibold text-slate-900">
          CAFA-Now Mission Statement
        </h1>
        <p className="text-sm text-slate-700">
          Clean Air for All Now (CAFA-now), while acknowledging the importance
          of the products Intel manufactures, is dedicated to curbing the toxic
          air emissions emitted from Intel {"New Mexico's"} plant by informing
          the public of their harmful effects and exhorting Intel to employ the
          best available emissions abatement equipment. Put people first.
        </p>
      </form>
    </div>
  );
}
