import { FaCode } from "react-icons/fa";

function Learn() {
  return (
    <section className="py-28">
      <div className="max-w-3xl">
        <span className="flex justify-center items-center gap-3 w-12 h-12 bg-[#0c0f19] rounded-full">
          <FaCode className="text-red-500 text-3xl" />
        </span>
        <h3 className="text-sky-600 text-lg mt-3 mb-5">Learn</h3>
        <h2 className="text-3xl font-bold mb-3">
          Difficult to assimilate your tech stack? Don't be.
        </h2>
        <p>
          You don't have to waste more time on learning things you can spend just few
          minutes to fully grasp. Your time is precious and your mood to learn more is
          important. Let's get you started.
        </p>
        <div>
          <div>
            <h3>Comprehensive explanation</h3>
            <p>Int</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
