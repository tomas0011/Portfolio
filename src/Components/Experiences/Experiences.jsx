import './Experiences.css';

import Item from '../Item/Item'

export const Experiences = () => {
  const experiences = [
    { title: 'Chiper co', img: require('../../Assets/Img/Chiper.jpg') },
    { title: 'UNAHUR', img: require('../../Assets/Img/Unahur.png') },
    { title: 'Henry', img: require('../../Assets/Img/Henry.jpg') },
    { title: 'Prevyco', img: require('../../Assets/Img/Prevyco.jpeg') }
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
