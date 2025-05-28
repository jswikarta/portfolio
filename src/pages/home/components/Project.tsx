import type { ProjectType } from "../../../types/ProjectType";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type Promps = {
  projectData: ProjectType;
};

export default function Project({ projectData }: Promps) {
  return (
    <>
      <a
        href={projectData.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-md px-2 py-6 md:mx-[9%] md:flex md:p-6 md:hover:bg-white/5 md:hover:shadow-xs"
      >
        <img
          src={projectData.image}
          alt=""
          className="mt-1 ml-2 h-36 w-auto rounded-sm border transition-all duration-200 group-hover:border-gray-100 md:h-16 md:w-32"
        />

        <div className="mt-2 ml-2 flex flex-col md:mt-0 md:ml-4">
          <div className="text-[#cfd9ee] group-hover:text-green-400">
            {projectData.title}
            <ArrowOutwardIcon className="ml-2 !text-[15px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="mt-2 mb-2 text-sm text-[#94a3b8]">{projectData.desc}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {projectData.skills.map((i, index) => (
              <div key={index}>
                <div className="rounded-xl bg-green-300/20 px-4 py-1 text-xs font-normal text-green-400">
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}
