import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles["section-testimonials"]} id="testimonials" aria-labelledby="testimonials-heading">
      <div className={styles["testomonial-gallery-container"]}>
        <div className={styles["testimonials-container"]}>
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary" id="testimonials-heading">What our students say</h2>

          <div className={styles["testimonials"]}>
            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXIf8ewt1DbtFukZpaaQgpQmxVl9mjevr6VhmXvnCpviKGmpuHp=w60-h60-p-rp-mo-br100"
                  alt="Samir Bhatta's profile photo"
                  className={styles["testimonial-img"]}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles["testimonial-name"]}>Samir Bhatta</span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Edupalnepal is best for Loksewa classes.
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXacdTA8Lyj1f-deBB6Lu062L4_uymXFrumhRK8eq2KaU_1-cc9=w60-h60-p-rp-mo-ba4-br100"
                  alt="Sansar Maske's profile photo"
                  className={styles["testimonial-img"]}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles["testimonial-name"]}>Sansar Maske</span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Finest education institution in Dhangadhi.
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVOLPragKeVf8VM6ATOMD7U7Kb96gz7CnzgBwfyQrieJOgMHf_f=w60-h60-p-rp-mo-ba5-br100"
                  alt="Reversed World's profile photo"
                  className={styles["testimonial-img"]}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles["testimonial-name"]}>
                  Reversed World
                </span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Best educational institute for tuition classes.
              </blockquote>
            </figure>

            <figure className={styles["testimonial"]}>
              <div className={styles["testimonial-image-name"]}>
                <img
                  src="Students/surya.jpg"
                  height="60"
                  width="60"
                  alt="Surya Bikram Thapa's profile photo"
                  className={styles["testimonial-img"]}
                  style={{ borderRadius: "50%" }}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles["testimonial-name"]}>
                  Surya Bikram Thapa
                </span>
              </div>
              <blockquote className={styles["testimonial-text"]}>
                Edupalnepal is no 1 institute in Dhangadhi. Great respected IQ
                sir
                <a
                  href="https://www.facebook.com/tekpant"
                  className={styles["name-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Tek Pant{" "}
                </a>
              </blockquote>
            </figure>
          </div>
        </div>

        <div className={styles["gallery"]} role="region" aria-label="Photo gallery of Edupalnepal">
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-1"]}`}
          >
            <img
              src="Gallery-imgs/Gallery-1-100.jpg"
              alt="Group of successful students at Edupalnepal graduation ceremony"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-2"]}`}
          >
            <img
              src="Gallery-imgs/Gallery-2-100.jpg"
              alt="Students attending a lecture at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-3-100.jpg"
              alt="Classroom session at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-4-100.jpg"
              alt="Students studying at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-5-100.jpg"
              alt="Edupalnepal campus activities"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-6-100.jpg"
              alt="Student celebration at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-7-100.jpg"
              alt="Interactive class at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-8-100.jpg"
              alt="Success stories from Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-9-100.jpg"
              alt="Edupalnepal student achievements"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className={styles["gallery-item"]}>
            <img
              src="Gallery-imgs/Gallery-10-100.jpg"
              alt="Learning environment at Edupalnepal"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-11"]}`}
          >
            <img
              src="Gallery-imgs/Gallery-11-100.jpg"
              alt="Edupalnepal community event"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure
            className={`${styles["gallery-item"]} ${styles["gallery-12"]}`}
          >
            <img
              src="Gallery-imgs/Gallery-12-100.jpg"
              alt="Edupalnepal annual function"
              className={styles["gallery-img"]}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
