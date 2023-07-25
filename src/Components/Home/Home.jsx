import './Home.css';

export const Home = () => {
  return (
    <section className="Home">
      <div className='ImgContainer'>
        <img src={'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'} alt=""/>
      </div>
      <div className="HomeAboutMe">
        <h1>HOLA!</h1>
        <p>¡Hola! Soy un apasionado desarrollador de back-end con una sólida formación en informática y un enfoque técnico incansable. Mi viaje en el mundo de la programación comenzó con la curiosidad de comprender cómo funciona la tecnología que nos rodea. A lo largo de los años, he perfeccionado mis habilidades en la creación de robustas aplicaciones y sistemas, centrándome en la eficiencia, seguridad y escalabilidad.</p>
        <p>Mi experiencia incluye el dominio de diversos lenguajes de programación, como Python, Java y C++, junto con el uso de tecnologías avanzadas como bases de datos relacionales y NoSQL. Adoro enfrentar desafíos complejos y transformar ideas en soluciones concretas. Además, me siento cómodo trabajando en equipo, compartiendo conocimientos y aprendiendo de los demás. Como desarrollador de back-end, mi objetivo es seguir evolucionando y contribuir al mundo de la tecnología con pasión y creatividad en cada línea de código que escribo.</p>
        <ul>
          <li>TECNICO EN INFORMATICA</li>
          <li>TECNICO UNIVERSITARIO EN PROGRAMACION</li>
          <li>DESARROLLADOR BACKEND SR</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
