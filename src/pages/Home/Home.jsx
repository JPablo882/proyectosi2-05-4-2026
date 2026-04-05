import { useNavigate } from "react-router-dom";
import "./Home.css";

import hero from "../../assets/hero.jpg";
import logo from "../../assets/login1.jpg";

// 🔥 ICONOS
import icon1 from "../../assets/login1.jpg";
import icon2 from "../../assets/login2.jpg";
import icon3 from "../../assets/login3.jpg";
import icon4 from "../../assets/login4.jpg";
import icon5 from "../../assets/login5.jpg";
import icon6 from "../../assets/login6.jpg";
import icon7 from "../../assets/login7.jpg";
import obra2 from "../../assets/obra2.jpg";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>ConstructPro</span>
        </div>

        <ul className="menu">
          <li>Inicio</li>
          <li>Obras</li>
          <li>Servicios</li>
          <li>Presupuesto</li>
          <li>Contacto</li>

          <li
            className="acceso-cliente"
            onClick={() => navigate("/login-cliente")}
          >
            Acceso Cliente
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay">
          <h1>Construimos tus sueños con excelencia</h1>
          <p>
            Más de 20 años de experiencia en construcción residencial y comercial
          </p>

          <button
            className="btn-primary"
            onClick={() => navigate("/presupuesto")}
          >
            Solicita tu presupuesto personalizado
          </button>
        </div>
      </section>

      {/* 🔥 ESTADÍSTICAS CON ICONOS */}
      <section className="stats">
        <div className="stat">
          <img src={icon1} alt="icon1" />
          <h2>150+</h2>
          <p>Proyectos Completados</p>
        </div>

        <div className="stat">
          <img src={icon2} alt="icon2" />
          <h2>500+</h2>
          <p>Clientes Satisfechos</p>
        </div>

        <div className="stat">
          <img src={icon3} alt="icon3" />
          <h2>20+</h2>
          <p>Años de Experiencia</p>
        </div>

        <div className="stat">
          <img src={icon4} alt="icon4" />
          <h2>98%</h2>
          <p>Entrega a Tiempo</p>
        </div>
      </section>

      {/* OBRAS */}
      <section className="obras">
        <h2>Obras Destacadas</h2>
        <p>Algunos de nuestros proyectos más recientes</p>

        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="obra1" />
            <h3>Residencial Los Álamos</h3>
            <p>Complejo residencial premium</p>
          </div>

          <div className="card">
           <img src={obra2} alt="obra2" />
            <h3>Tahuichi Aguilera</h3>
            <p>Estadio en desarrollo</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471" alt="obra3" />
            <h3>Torres del Centro</h3>
            <p>Uso mixto residencial</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <p>Soluciones integrales para tu proyecto</p>

        <div className="cards">
          <div className="card">
            <h3>Construcción Llave en Mano</h3>
            <p>Gestión completa del proyecto</p>
          </div>

          <div className="card">
            <h3>Remodelaciones</h3>
            <p>Modernizamos espacios</p>
          </div>

          <div className="card">
            <h3>Diseño y Arquitectura</h3>
            <p>Proyectos personalizados</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact">
  <h2>Contáctanos</h2>
  <p>Estamos listos para hacer realidad tu proyecto</p>

  <div className="contact-grid">

    <div className="contact-item">
      <img src={icon5} alt="telefono" />
      <h3>Teléfono</h3>
      <p>+595 21 123-4567</p>
    </div>

    <div className="contact-item">
      <img src={icon6} alt="email" />
      <h3>Email</h3>
      <p>info@constructpro.com</p>
    </div>

    <div className="contact-item">
      <img src={icon7} alt="ubicacion" />
      <h3>Ubicación</h3>
      <p>Av. Principal 1234, Asunción</p>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 ConstructPro. Todos los derechos reservados.</p>

        <p
          className="admin-link"
          onClick={() => navigate("/login")}
        >
          Acceso Administrativo
        </p>
      </footer>

    </div>
  );
}