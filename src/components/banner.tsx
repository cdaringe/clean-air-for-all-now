/* eslint-disable @next/next/no-img-element */
export function Banner({ className = "" }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-center text-2xl">
        <div>
          <img
            className="block w-full"
            src="cafa-swish.png"
            alt="clean air for everyone"
          />
        </div>
        <div className="w-64 text-center align-middle justify-middle">
          {"PUT PEOPLE FIRST".split(" ").map((t) => <p key={t}>{t}</p>)}
        </div>
      </div>
      <div className="flex justify-end">
        <img src="airwaves.png" alt="decorative air waves" />
      </div>
    </div>
  );
}
