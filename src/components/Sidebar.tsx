import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const link = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

export default function Sidebar() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-2 pt-12 pb-24 text-white md:fixed md:w-[48%] md:p-0">
        <div className="flex h-full w-full flex-col text-[#cfd9ee] md:h-[76%] md:w-[55%]">
          <div className="text-5xl font-bold">JS Wikarta</div>
          <div className="my-3 text-xl font-normal">Fullstack Developer</div>
          <div className="text-md w-[80%] text-[#94a3b8]">
            I build accessible, pixel-perfect digital experiences for the web.
          </div>
          <div className="my-auto hidden md:flex">
            <ul className="space-y-4">
              {link.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="group flex items-center">
                    <hr className="mr-4 w-12 border-t-2 border-[#94a3b8] transition-all duration-300 group-hover:w-24 group-hover:border-white" />
                    <span className="text-sm font-bold text-[#94a3b8] uppercase group-hover:text-white">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:mt-auto">
            <a href="" target="_blank">
              <GitHubIcon className="h-8 w-8 text-[#94a3b8]" />
            </a>
            <LinkedInIcon className="ml-2 h-8 w-8 text-[#94a3b8]" />
            <InstagramIcon className="ml-2 h-8 w-8 text-[#94a3b8]" />
          </div>
        </div>
      </div>
    </>
  );
}
