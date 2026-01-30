import styles from "./OurCourses.module.css";

export default function OurCourses() {
  return (
    <section className={styles["section-courses"]} id="our-courses" aria-labelledby="courses-heading">
      <div className="container center-text">
        <p className="subheading">Popular Courses in Dhangadhi</p>
        <h2 className="heading-secondary" id="courses-heading">
          Best Loksewa, Language &amp; Banking Classes in Sudurpaschim
        </h2>
      </div>

      <div className="container courses-grid grid grid--3-cols margin-bottom-md">
        {/* Loksewa Course */}
        <article className={styles["courses"]}>
          <img
            src="./Courses-imgs/Courses-loksewa-100.jpg"
            alt="Best Loksewa preparation class in Dhangadhi - Nasu, Kharidaar, Sakha Adhikrit coaching"
            className={styles["course-img"]}
            loading="lazy"
          />

          <div className={styles["courses-content"]}>
            <h3 className={styles["course-title"]}>Loksewa Preparation</h3>
            <ul className={styles["course-list"]}>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                Nasu (नासु) Preparation
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                Kharidaar (खरिदार) Coaching
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                Sakha Adhikrit Class
              </li>
            </ul>
          </div>
        </article>

        {/* Korean Language Course */}
        <article className={styles["courses"]}>
          <img
            src="./Courses-imgs/Courses-bhasa-100.jpg"
            alt="Korean language class in Nepal - EPS TOPIK preparation at Edupalnepal Dhangadhi"
            className={styles["course-img"]}
            loading="lazy"
          />

          <div className={styles["courses-content"]}>
            <h3 className={styles["course-title"]}>Korean Language Class</h3>
            <ul className={styles["course-list"]}>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                EPS-TOPIK Preparation
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                Korean Speaking Course
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                Work Permit Assistance
              </li>
            </ul>
          </div>
        </article>

        {/* Banking Course */}
        <article className={styles["courses"]}>
          <img
            src="./Courses-imgs/Courses-banking-100.jpg"
            alt="Banking exam preparation in Dhangadhi - NRB, NBL, ADBL coaching at Edupalnepal"
            className={styles["course-img"]}
            loading="lazy"
          />

          <div className={styles["courses-content"]}>
            <h3 className={styles["course-title"]}>Banking Exam Coaching</h3>
            <ul className={styles["course-list"]}>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                NRB (Nepal Rastra Bank)
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                NBL (Nepal Bank Limited)
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                  aria-hidden="true"
                ></ion-icon>{" "}
                ADBL &amp; Other Banks
              </li>
            </ul>
          </div>
        </article>
      </div>


      <div className={`${styles["container"]} ${styles["more-courses"]}`}>
        <a href="#cta" className="link">
          Enroll in a course &rarr;
        </a>
      </div>
    </section>
  );
}

