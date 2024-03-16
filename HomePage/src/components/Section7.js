import Container from "./Container";
import styles from "./Section7.module.css";

const Section7 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <Container
          picture="/picture@2x.png"
          title="Private"
          picture1="/picture@2x.png"
          paragraph="Clint's can hire private driver for their stable vehicle ."
          userThumb="/user-thumb@2x.png"
          userThumb1="/user-thumb@2x.png"
        />
        <Container
          picture="/picture@2x.png"
          title="Commercial"
          picture1="/picture@2x.png"
          paragraph="Clint's can hire commerical driver for their stable vehicle ."
          userThumb="/user-thumb-1@2x.png"
          userThumb1="/user-thumb@2x.png"
          propBorder="1px solid var(--yellow-500)"
          propBackgroundColor="#eab308"
          propLeft="calc(50% - 48px)"
          propBorder1="2px dashed var(--yellow-500)"
        />
        <div className={styles.container}>
          <div className={styles.contentBox}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
            <div className={styles.content}>
              <button className={styles.icon}>
                <img
                  className={styles.iconIoniconsFilledAlb}
                  alt=""
                  src="/icon--ionicons--filled--albums.svg"
                />
              </button>
              <div className={styles.titleCategory}>
                <div className={styles.category}>Category</div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Connecting Drivers</h3>
                  <div className={styles.badge}>
                    <img
                      className={styles.iconJamIconsOutlineL}
                      alt=""
                      src="/icon--jamicons--outline--logos--circle.svg"
                    />
                    <div className={styles.textContainer}>
                      <div className={styles.buttonText}>+2,5%</div>
                    </div>
                    <img
                      className={styles.iconIconoirStatUp}
                      alt=""
                      src="/icon--iconoir--statup.svg"
                    />
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL1}
                    alt=""
                    src="/icon--jamicons--outline--logos--pencil.svg"
                  />
                </div>
              </div>
              <img
                className={styles.pictureIcon1}
                alt=""
                src="/picture@2x.png"
              />
              <div className={styles.paragraph}>
                Clint's can hire connecting driver for their long-distance
                travel .
              </div>
              <div className={styles.userCard}>
                <img
                  className={styles.userThumbIcon}
                  alt=""
                  src="/user-thumb-2@2x.png"
                />
                <div className={styles.details}>
                  <div className={styles.category1}>Ralph Edwards</div>
                  <div className={styles.category2}>{`Harvesting 32KWh `}</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button}>
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
                  src="/icon--jamicons--outline--logos--arrowright-11.svg"
                />
              </div>
              <div className={styles.button1}>
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
                  src="/icon--jamicons--outline--logos--arrowright-21.svg"
                />
              </div>
            </div>
            <div className={styles.badge1}>
              <img
                className={styles.iconJamIconsOutlineL6}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer3}>
                <div className={styles.buttonText3}>Featured</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.userThumbIcon1}
              alt=""
              src="/user-thumb@2x.png"
            />
          </div>
          <div className={styles.circle} />
        </div>
      </div>
    </section>
  );
};

export default Section7;
