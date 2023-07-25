import { useEffect, useState } from 'react';
import './Skills.css';
import { skills } from './skills';

import { Tab, Tabs, Button } from 'react-bootstrap';

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(Object.keys(skills)[0]);

  const handleOnClick = (e) => {
    setActiveSkill(e.target.id.split('-').reverse()[0])
  }

  return (
    <div className='Skills'>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="SkillsTabs"
        onClick={handleOnClick}
      >
        {Object.keys(skills).map((category) => (
          <Tab
            className='SkillsTab'
            eventKey={category}
            title={category}
            active={category === activeSkill}
          >
            {skills[category].map((skill) => (
              <Button className='SkillsButton' variant="outline-primary">{skill.title}</Button>
            ))}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default Skills;
