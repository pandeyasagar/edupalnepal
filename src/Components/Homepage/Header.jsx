import icon from "../../edupal-logo.png";
import { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navMenu, setNavMenu] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavMenu(false); // Close mobile menu after clicking
  };

  return (
    <header className={`${styles.header} ${navMenu ? styles.navOpen : ""} `}>
      <a href="#" onClick={(e) => scrollToSection(e, "hero")}>
        <img className={styles.logo} alt="Edupalnepal logo" src={icon} />
      </a>

      <nav>
        <ul className={styles["main-nav-list"]}>
          <li>
            <a 
              className={styles["main-nav-link"]} 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "hero")}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className={styles["main-nav-link"]} 
              href="#our-courses" 
              onClick={(e) => scrollToSection(e, "our-courses")}
            >
              Our Courses
            </a>
          </li>
          <li>
            <a 
              className={styles["main-nav-link"]} 
              href="#testimonials" 
              onClick={(e) => scrollToSection(e, "testimonials")}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
              href="#cta"
              onClick={(e) => scrollToSection(e, "cta")}
            >
              Contact Now
            </a>
          </li>

          <li>
            <NavLink
              to="/quiz"
              className={`${styles["main-nav-link"]} ${styles["quiz-cta"]}`}
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className={styles["btn-mobile-nav"]}
        onClick={() => setNavMenu(!navMenu)}
        aria-label="Toggle navigation menu"
      >
        <ion-icon
          class={styles["icon-mobile-nav"]}
          name="menu-outline"
        ></ion-icon>

        <ion-icon
          class={styles["icon-mobile-nav"]}
          name="close-outline"
        ></ion-icon>
      </button>
    </header>
  );
}
