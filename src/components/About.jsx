import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about svg" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            ratione aperiam, adipisci, nam ipsa minus repellendus sed iusto
            voluptate magni fugit ab? Eos laudantium blanditiis incidunt
            veritatis. Laboriosam temporibus eius sint nam nobis reprehenderit
            ut totam officia consectetur architecto, assumenda magni quidem
            reiciendis? Illo culpa ea esse porro, explicabo eius.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
