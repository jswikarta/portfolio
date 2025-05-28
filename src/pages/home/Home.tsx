import About from "./components/About";
import Experience from "./components/Experience";
import type { ExperienceType } from "../../types/ExperienceType";
import type { ProjectType } from "../../types/ProjectType";
import Project from "./components/Project";

const experiences: ExperienceType[] = [
  {
    year: "2022 - PRESENT",
    title: "Staff SAP PAS",
    company: "Darmex Agro",
    skills: [
      "S4/HANA",
      "Data Analyst",
      "Abap Debugging",
      "Palm Oil Plantation",
    ],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quos. Id dignissimos pariatur beatae eius quis quibusdam harum repellat ut voluptatem ipsum! Iure quas deleniti nesciunt id ut vel perferendis?",
  },

  {
    year: "2019 - 2020",
    title: "Web Programmer",
    company: "Widi Center",
    skills: ["PHP", "MySQL", "HTML & CSS", "Javascript"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quos. Id dignissimos pariatur beatae eius quis quibusdam harum repellat ut voluptatem ipsum! Iure quas deleniti nesciunt id ut vel perferendis?",
  },
];

const projects: ProjectType[] = [
  {
    title: "Whatsapp Bot",
    image: "/images/example.png",
    link: "https://github.com/jswikarta/whatsappbot",
    skills: ["Node.js", "Javascript"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam aspernatur, a ipsum tempore ab adipisci perspiciatis eligendi odio quas corrupti? Maxime, eveniet veniam earum doloremque vero asperiores tempora numquam.",
  },
  {
    title: "Portfolio",
    image: "/images/example.png",
    link: "https://github.com/jswikarta/whatsappbot",
    skills: ["Node.js", "Typescript", "React", "Tailwind"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam aspernatur, a ipsum tempore ab adipisci perspiciatis eligendi odio quas corrupti? Maxime, eveniet veniam earum doloremque vero asperiores tempora numquam.",
  },
];

export default function Home() {
  return (
    <>
      <div className="md:pr-[5%] md:pl-[40%]">
        <About />

        <section id="experience">
          <div className="ml-2 font-semibold text-[#cfd9ee] md:hidden">
            EXPERIENCE
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-12">
            {experiences.map((i, index) => (
              <div key={index}>
                <Experience experienceData={i} />
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="ml-2 font-semibold text-[#cfd9ee] md:hidden">
            EXPERIENCE
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-12">
            {projects.map((i, index) => (
              <div key={index}>
                <Project projectData={i} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
