import './Studies.css';

import Item from '../Item/Item'

export const Studies = () => {
  const studies = [
    { title: 'Lic. Informatica', img: require('../../Assets/Img/Unahur.png') },
    { title: 'Tec. Programacion', img: require('../../Assets/Img/Unahur.png') },
    { title: 'Tec. Informatica', img: require('../../Assets/Img/EESTN1OEA.png') },
    { title: 'Admin. Redes informaticas', img: require('../../Assets/Img/EESTN1OEA.png') }
  ];
  return (
    <div className="Studies">
      {studies.map((experience) => (
        <Item data={experience}/>
      ))}
    </div>
  );
}

export default Studies;
