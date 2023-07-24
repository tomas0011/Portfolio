import './Studies.css';

import Item from '../Item/Item'

export const Studies = () => {
  const studies = [
    { title: 'Lic. Informatica' },
    { title: 'Tec. Programacion' },
    { title: 'Tec. Informatica' },
    { title: 'Admin. Redes informaticas' }
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
