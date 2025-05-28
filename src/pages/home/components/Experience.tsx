import type { ExperienceType } from "../../../types/ExperienceType";
type Props = {
  experienceData: ExperienceType;
};

export default function Experience({ experienceData }: Props) {
  return (
    <>
      <div className="group rounded-md px-2 py-6 md:mx-[9%] md:p-6 md:hover:bg-white/5 md:hover:shadow-xs">
        <div className="items-center font-semibold md:flex">
          <div className="w-36 text-xs text-[#94a3b8]">
            {experienceData.year}
          </div>
          <div className="text-[#cfd9ee] group-hover:text-green-400">
            {experienceData.title} . {experienceData.company}
          </div>
        </div>
        <div className="mt-2 flex flex-col md:ml-36">
          <p className="mb-2 text-sm text-[#94a3b8]">{experienceData.desc}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {experienceData.skills.map((i) => (
              <div className="rounded-xl bg-green-300/20 px-4 py-1 text-xs font-normal text-green-400">
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
