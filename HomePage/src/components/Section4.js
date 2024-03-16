import styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.col}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>
              Building apps just got easier
            </div>
            <h1 className={styles.secondaryHeadline}>
              To ensure the best services for you
            </h1>
          </div>
          <div className={styles.paragraph}>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <button className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer}>
                <b className={styles.buttonText}>Get Started</b>
              </div>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button2}>
              <img
                className={styles.iconJamIconsOutlineL2}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button3}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className={styles.badge}>
                <div className={styles.text}>9</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.col1}>
        <img className={styles.colChild} alt="" src="/group-48-2.svg" />
      </div>
    </section>
  );
};

export default Section4;
