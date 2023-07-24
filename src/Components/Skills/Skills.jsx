import './Skills.css';

export const Skills = () => {
  const skills = [
    { title: 'js' },
    { title: 'redis' },
    { title: 'nestJs' },
    { title: 'python' }
  ];
  return (
    <div className="Skills">
      {skills.map((skill) => (
        <h1>{skill.title}</h1>
      ))}
    </div>
  );
}

export default Skills;
