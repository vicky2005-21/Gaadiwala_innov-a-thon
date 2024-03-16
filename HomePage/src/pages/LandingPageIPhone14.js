import Section3 from "../components/Section3";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./LandingPageIPhone14.module.css";

const LandingPageIPhone14 = () => {
  return (
    <div className={styles.landingPageIphone146}>
      <header className={styles.header}>
        <img
          className={styles.gaadiWalaLogoPhotoroom2Icon}
          loading="lazy"
          alt=""
          src="/gaadi-wala-logophotoroom-2@2x.png"
        />
        <div className={styles.gaadiwalaWrapper}>
          <h2 className={styles.gaadiwala}>{` GaadiWala `}</h2>
        </div>
        <div className={styles.gaadiWalaName}>
          <img
            className={styles.iconIoniconsOutlineMe}
            loading="lazy"
            alt=""
            src="/icon--ionicons--outline--menuoutline.svg"
          />
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <h1 className={styles.mainHeadline}>
              Building apps just got easier
            </h1>
            <div className={styles.secondaryHeadline}>Headline Two</div>
          </div>
          <div className={styles.paragraph}>
            Aliquam vel platea curabitur sit vestibulum egestas sit id lorem.
            Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor
            amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis
            volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
          </div>
          <button className={styles.buttonsGroup}>
            <div className={styles.button1}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>Explore</div>
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
                className={styles.iconIoniconsFilledPla}
                alt=""
                src="/icon--ionicons--filled--play.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>Watch Video</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className={styles.badge}>
                <div className={styles.text}>9</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.wrapperGroup61}>
          <img
            className={styles.wrapperGroup61Child}
            loading="lazy"
            alt=""
            src="/group-61.svg"
          />
        </div>
      </section>
      <Section3 />
      <Section2 />
      <Section1 />
      <Section />
      <section className={styles.section1}>
        <div className={styles.sectionText1}>
          <div className={styles.top1}>
            <b className={styles.caption1}>Caption</b>
            <div className={styles.mainHeadline1}>
              Building apps just got easier
            </div>
            <b className={styles.secondaryHeadline1}>
              Start now and get the best services
            </b>
          </div>
          <div className={styles.paragraph1}>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <button className={styles.buttonsGroup1}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer3}>
                <b className={styles.buttonText3}>Get Started</b>
              </div>
              <img
                className={styles.iconJamIconsOutlineL6}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button21}>
              <img
                className={styles.iconJamIconsOutlineL7}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer4}>
                <div className={styles.buttonText4}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL8}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button31}>
              <img
                className={styles.iconJamIconsOutlineL9}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer5}>
                <div className={styles.buttonText5}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL10}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className={styles.badge1}>
                <div className={styles.text1}>9</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.col}>
          <img className={styles.colChild} alt="" src="/group-48-1.svg" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPageIPhone14;
