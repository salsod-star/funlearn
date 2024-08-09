import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center max-w-5xl m-auto py-24 ">
      <h1 className="text-6xl font-bold text-center">
        The best investment you can do for yourself is self development.
      </h1>
      <p className="text-lg max-w-2xl my-5 text-slate-300 text-center">
        Be there and fully ready when an opportunity present itself. Learn Something today
        and be proud of how far you&rsquo;ve come tomorrow. Remember, good things only
        happens with curiosity, sacrifice and persistence.
      </p>
      <div className="mt-5 flex justify-center gap-8">
        <Link
          to="/learn"
          className="hover:bg-sky-800 bg-sky-900 px-16 py-[10px] transition-all rounded-lg font-semibold"
        >
          Starting learning
        </Link>
        <Link
          to="/blog"
          className="hover:bg-red-700 bg-red-900 px-16 py-[10px] transition-all rounded-lg font-semibold"
        >
          What&rsquo;s new?
        </Link>
      </div>
    </section>
  );
}

export default Hero;
