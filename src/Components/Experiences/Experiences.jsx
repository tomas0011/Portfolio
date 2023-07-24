import './Experiences.css';

import Item from '../Item/Item'

export const Experiences = () => {
  const experiences = [
    { title: 'Chiper co' },
    { title: 'UNAHUR' },
    { title: 'Henry' },
    { title: 'Prevyco' }
  ];
  
  return (
    <div className="Experiences">
      {experiences.map((experience) => (
        <Item data={experience}/>
      ))}
    </div>
  );
}

export default Experiences;
