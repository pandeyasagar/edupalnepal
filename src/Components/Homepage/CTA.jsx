import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles["section-cta"]} id="cta" aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles["cta-container"]}>
          <p className="subheading">Contact Now</p>
          <h2 className="heading-secondary" id="cta-heading">Contact us for Enquiries</h2>
        </div>

        <div className={styles["cta-grid"]}>
          <div className={`container ${styles["call-container"]}`}>
            <div className={styles["call-now-container"]}>
              <ion-icon
                name="call-outline"
                class={styles["call-icon"]}
                aria-hidden="true"
              ></ion-icon>
              <h3 className={styles["call-now"]}>Call Now </h3>
            </div>
            <a 
              className={styles["call-number"]} 
              href="tel:091-523368"
              aria-label="Call Edupalnepal at 091-523368"
            >
              091-523368
            </a>
          </div>

          <div className={`${styles.container} ${styles["or-container"]}`}>
            <h3>Or</h3>
          </div>

          <div className={styles["cta"]}>
            <h2 className={styles["heading-submit"]}>Submit form</h2>
            <form className={styles["cta-form"]} name="sign-up" aria-label="Enrollment enquiry form">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Your Name"
                  name="full-name"
                  autoComplete="name"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your number"
                  name="phone"
                  autoComplete="tel"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  In what course would you like to enroll?
                </label>
                <select id="select-where" name="course" required aria-required="true">
                  <option value="">Please choose one option:</option>
                  <option value="nasu">Nasu</option>
                  <option value="kharidaar">Kharidaar</option>
                  <option value="sakha-adhikrit">Sakha Adhikrit</option>
                  <option value="tsc">TSC</option>
                  <option value="banking">Banking</option>
                  <option value="nepal-army">Nepal Army</option>
                  <option value="nepal-police">Nepal Police</option>
                  <option value="korean-language">Korean Language</option>
                  <option value="japanese-language">Japanese Language</option>
                  <option value="ielts">IELTS</option>
                </select>
              </div>

              <button className={`btn ${styles["btn--form"]}`} type="submit">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
