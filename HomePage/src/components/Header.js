import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.gaadiWalaLogoPhotoroom1Icon}
        loading="lazy"
        alt=""
        src="/gaadi-wala-logophotoroom-1@2x.png"
      />
      <h2 className={styles.gaadiwala}>{`GaadiWala `}</h2>
      <div className={styles.left}>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <img
              className={styles.iconJamIconsOutlineL}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem1}>Products</div>
            <div className={styles.badge}>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem2}>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem3}>Business Solutions</div>
            <div className={styles.badge1}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel1}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL5}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem4}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem5}>Help Center</div>
            <div className={styles.badge2}>
              <img
                className={styles.iconJamIconsOutlineL7}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel2}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL8}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem6}>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem7}>Pricing</div>
            <div className={styles.badge3}>
              <img
                className={styles.iconJamIconsOutlineL10}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer3}>
                <div className={styles.buttonText3}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel3}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL11}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
