import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <section
      id="about"
      className="align-element grid grid-cols-2 mt-20 items-center gap-8"
    >
      <img src={aboutImg} alt="" />
      <div>
        <SectionTitle text="code and coffee" />
        <p className="py-6 text-slate-600 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illum
          accusamus, praesentium deleniti aliquam dolorum totam molestiae
          facilis nam, voluptatum eius exercitationem cumque quos fugit unde
          placeat nihil laborum cum ut eum distinctio corrupti. Libero, veniam
          eveniet qui labore officia quibusdam error mollitia culpa quam at
          nesciunt harum optio quia!
        </p>
      </div>
    </section>
  );
};

export default About;
