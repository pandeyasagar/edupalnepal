import logo from "../../edupal-logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles["footer"]} role="contentinfo">
      <div className={`container grid ${styles["grid--footer"]}`}>
        <div className={styles["logo-col"]}>
          <a href="#" className={styles["logo-link"]} onClick={(e) => scrollToSection(e, "hero")} aria-label="Edupalnepal Home">
            <img className={styles["footer-logo"]} alt="Edupalnepal Logo" src={logo} />
          </a>

          <ul className={styles["social-links"]}>
            <li>
              <a
                className={styles["footer-link"]}
                href="https://www.facebook.com/edupalnepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edupalnepal Facebook"
              >
                <ion-icon
                  class={styles["social-icon"]}
                  name="logo-facebook"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a
                className={styles["footer-link"]}
                href="https://www.youtube.com/@edupalnepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edupalnepal YouTube"
              >
                <ion-icon
                  class={styles["social-icon-yt"]}
                  name="logo-youtube"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className={styles["copyright"]}>
            Copyright &copy; <span className="year">2027</span> by Edupalnepal,
            Inc. All rights reserved.
          </p>
        </div>

        <div className={styles["address-col"]} itemScope itemType="https://schema.org/LocalBusiness">
          <p className={styles["footer-heading"]}>Contact us</p>
          <meta itemProp="name" content="Edupalnepal" />
          <meta itemProp="image" content="https://edupalnepal.com.np/web-banner.jpg" />
          <address className={styles.contacts}>
            <p className={styles.address} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Ratopool, Near Buspark</span>,{" "}
              <span itemProp="addressLocality">Dhangadhi</span>,{" "}
              <span itemProp="addressRegion">Sudurpaschim Pradesh</span>,{" "}
              <span itemProp="addressCountry">Nepal</span>
            </p>
            <p>
              <a 
                className={styles["footer-link"]} 
                href="tel:+977-091-523368"
                itemProp="telephone"
              >
                +977-091-523368
              </a>
              <br />
              <a
                className={styles["footer-link"]}
                href="mailto:edupalnepal@gmail.com"
                itemProp="email"
              >
                edupalnepal@gmail.com
              </a>
            </p>
          </address>
        </div>

        <nav className={styles["nav-col"]} aria-label="Footer Account Navigation">
          <p className={styles["footer-heading"]}>Account</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a 
                className={styles["footer-link"]} 
                href="#" 
                onClick={(e) => scrollToSection(e, "hero")} 
              >
                Create account
              </a>
            </li>
            <li>
              <a 
                className={styles["footer-link"]} 
                href="#"
                onClick={(e) => scrollToSection(e, "hero")}
              >
                Sign in
              </a>
            </li>
            <li>
              {/* <a className={styles["footer-link"]} href="#">
                iOS app
              </a> */}
            </li>
            <li>
              {/* <a className={styles["footer-link"]} href="#">
                Android app
              </a> */}
            </li>
          </ul>
        </nav>

        <nav className={styles["nav-col"]} aria-label="Footer Company Navigation">
          <p className={styles["footer-heading"]}>Company</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
                About Edupalnepal
              </a>
            </li>
            <li>
              <a
                className={styles["footer-link"]}
                href="mailto:edupalnepal@gmail.com"
              >
                For Business
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#our-courses" onClick={(e) => scrollToSection(e, "our-courses")}>
                Loksewa Classes
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#cta" onClick={(e) => scrollToSection(e, "cta")}>
                Careers
              </a>
            </li>
          </ul>
        </nav>
        
        <nav className={styles["nav-col"]} aria-label="Footer Courses Navigation">
          <p className={styles["footer-heading"]}>Our Courses</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#our-courses" onClick={(e) => scrollToSection(e, "our-courses")}>
                Loksewa Preparation
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#our-courses" onClick={(e) => scrollToSection(e, "our-courses")}>
                Korean Language
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#our-courses" onClick={(e) => scrollToSection(e, "our-courses")}>
                Banking Classes
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#our-courses" onClick={(e) => scrollToSection(e, "our-courses")}>
                TSC Preparation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
