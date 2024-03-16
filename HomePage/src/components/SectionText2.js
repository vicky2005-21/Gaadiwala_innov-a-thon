import styles from "./SectionText2.module.css";
import React, { useRef } from 'react';


const scrollToBottom = () => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
};


const SectionText2 = () => {
  return (
    <div className={styles.sectionText}>
      <div className={styles.top}>
        <b className={styles.caption}>Caption</b>
        <h1 className={styles.mainHeadline}>Find the Best !</h1>
        <div className={styles.secondaryHeadline}>Headline Two</div>
      </div>
      <div className={styles.paragraph}>
        <p className={styles.drivingDownThe}>
          Driving down the open road, the world unfolds anew,
        </p>
        <p className={styles.eachMileA}>
          Each mile a story, every turn a mystery to pursue.
        </p>
        <p className={styles.theHumOf}>
          The hum of the engine, a rhythmic, soothing song,
        </p>
        <p className={styles.inThisJourney}>
          In this journey, with the road, is where I belong.
        </p>
      </div>
      <button className={styles.buttonsGroup}>
      <div className={styles.button} onClick={scrollToBottom}>
                <img
                    className={styles.iconJamIconsOutlineL}
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer}>
                    <b className={styles.buttonText}>Explore</b>
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
        <div className={styles.button1}>
          <img
            className={styles.iconIoniconsFilledPla}
            alt=""
            src="/icon--ionicons--filled--play.svg"
          />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>atch Video</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL4}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default SectionText2;
