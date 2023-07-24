import './Skills.css';
import { skills } from './skills';

export const Skills = () => {
  return (
    <div className="Skills">
      {Object.keys(skills).map((category) => (
        <div>
          <h1>{category}:</h1>
          {skills[category].map((skill) => <h3>{skill.title}</h3>)}
        </div>
      ))}
    </div>
  );
}

export default Skills;
