import { useMemo } from "react";
import styles from "./Container.module.css";

const Container = ({
  picture,
  title,
  picture1,
  paragraph,
  userThumb,
  userThumb1,
  propBorder,
  propBackgroundColor,
  propLeft,
  propBorder1,
}) => {
  const iconStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const circleStyle = useMemo(() => {
    return {
      left: propLeft,
      border: propBorder1,
    };
  }, [propLeft, propBorder1]);

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <img className={styles.pictureIcon} alt="" src={picture} />
        <div className={styles.content}>
          <button className={styles.icon} style={iconStyle}>
            <img
              className={styles.iconIoniconsFilledAlb}
              alt=""
              src="/icon--ionicons--filled--albums.svg"
            />
          </button>
          <div className={styles.titleCategory}>
            <div className={styles.category}>Category</div>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>{title}</h3>
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
          <img className={styles.pictureIcon1} alt="" src={picture1} />
          <div className={styles.paragraph}>{paragraph}</div>
          <div className={styles.userCard}>
            <img className={styles.userThumbIcon} alt="" src={userThumb} />
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
        <img className={styles.userThumbIcon1} alt="" src={userThumb1} />
      </div>
      <div className={styles.circle} style={circleStyle} />
    </div>
  );
};

export default Container;
