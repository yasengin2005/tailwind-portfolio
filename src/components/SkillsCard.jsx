const SkillsCard = ({ title, icon, text }) => {
  return (
    <section>
      <span>{icon}</span>
      <h4 className="mt-4 text-xl font-bold tracking-wide">{title}</h4>
      <p className="mt-2 text-slate-700 text-justify">{text}</p>
    </section>
  );
};

export default SkillsCard;
