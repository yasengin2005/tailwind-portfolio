import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="align-element py-20 bg-white grid md:grid-cols-2 items-center">
      <article className=" ">
        <h1 className="text-7xl font-bold tracking-wider">I`m Engin</h1>
        <div className="text-slate-700 capitalize tracking-wide mt-4">
          <h4 className="text-3xl">front-end developer</h4>
          <p className="mt-2 text-xl italic">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/yasengin2005?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 mt-3 text-slate-500 hover:text-black hover:scale-110 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/engin-b%C3%BCk%C3%BCm-534136240"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 mt-3 text-slate-500 hover:text-black hover:scale-110" />
            </a>
            <a
              href="https://twitter.com/enginbukum"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare className="h-8 w-8 mt-3 text-slate-500 hover:text-black hover:scale-110" />
            </a>
          </div>
        </div>
      </article>
      <article className="hidden md:block">
        <img
          src={heroImg}
          alt="hero img"
          className="w-full object-fit max-w-64"
        />
      </article>
    </section>
  );
};

export default Hero;
