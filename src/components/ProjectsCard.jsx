import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ img, url, title, text, github, twitter, linkedin }) => {
  return (
    <article className="mt-10 rounded-lg py-0 shadow-md hover:shadow-xl">
      <img
        src={img}
        alt={title}
        className="w-full object-cover h-65 rounded-t-lg hover:scale-105 duration-300"
      />
      <h4 className="mx-2 mb-4 mt-4 text-xl font-medium capitalize tracking-wide">
        {title}
      </h4>
      <p className="mx-2 text-justify text-slate-700 leading-loose">{text}</p>
      <div className="flex mt-4 mb-8 mx-2 gap-x-3">
        <a href={url}>
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300 hover:scale-110" />
        </a>
        <a href={github}>
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 hover:scale-110" />
        </a>
        <a href={linkedin}>
          <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 hover:scale-110" />
        </a>
        <a href={twitter}>
          <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 hover:scale-110" />
        </a>
      </div>
    </article>
  );
};

export default ProjectsCard;
