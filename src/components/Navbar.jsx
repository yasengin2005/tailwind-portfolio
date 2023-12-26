import { links } from "../data";

const Navbar = () => {
  return (
    <section className="bg-emerald-100 align-element sticky">
      <div className="flex gap-x-16 items-center py-4">
        <h1 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>{" "}
        </h1>
        <div className="flex gap-5 ">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className=" text-xl font-medium capitalize hover:text-emerald-600 hover:scale-105"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
