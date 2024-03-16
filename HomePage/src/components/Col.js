import styles from "./Col.module.css";

const Col = ({
  secondaryHeadline,
  paragraph,
  secondaryHeadline1,
  secondaryHeadline2,
}) => {
  return (
    <div className={styles.col}>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <b className={styles.caption}>Caption</b>
          <div className={styles.mainHeadline}>
            Building apps just got easier
          </div>
          <div className={styles.secondaryHeadline}>{secondaryHeadline}</div>
        </div>
        <div className={styles.paragraph}>{paragraph}</div>
        <div className={styles.buttonsGroup}>
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
        </div>
      </div>
      <div className={styles.sectionText1}>
        <div className={styles.top1}>
          <b className={styles.caption1}>Caption</b>
          <div className={styles.mainHeadline1}>
            Building apps just got easier
          </div>
          <div className={styles.secondaryHeadline1}>{secondaryHeadline1}</div>
        </div>
        <div className={styles.paragraph1}>
          Aliquam vel platea curabitur sit vestibulum egestas sit id lorem.
          Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor
          amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis
          volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
        </div>
        <div className={styles.buttonsGroup1}>
          <div className={styles.button1}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer3}>
              <b className={styles.buttonText3}>Get Started</b>
            </div>
            <img
              className={styles.iconJamIconsOutlineL7}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </div>
          <div className={styles.button21}>
            <img
              className={styles.iconJamIconsOutlineL8}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer4}>
              <div className={styles.buttonText4}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </div>
          <div className={styles.button31}>
            <img
              className={styles.iconJamIconsOutlineL10}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer5}>
              <div className={styles.buttonText5}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL11}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
            <div className={styles.badge1}>
              <div className={styles.text1}>9</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionText2}>
        <div className={styles.top2}>
          <b className={styles.caption2}>Caption</b>
          <div className={styles.mainHeadline2}>
            Building apps just got easier
          </div>
          <div className={styles.secondaryHeadline2}>{secondaryHeadline2}</div>
        </div>
        <div className={styles.paragraph2}>
          Aliquam vel platea curabitur sit vestibulum egestas sit id lorem.
          Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor
          amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis
          volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
        </div>
        <div className={styles.buttonsGroup2}>
          <div className={styles.button4}>
            <img
              className={styles.iconJamIconsOutlineL12}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer6}>
              <b className={styles.buttonText6}>Get Started</b>
            </div>
            <img
              className={styles.iconJamIconsOutlineL13}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </div>
          <div className={styles.button22}>
            <img
              className={styles.iconJamIconsOutlineL14}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer7}>
              <div className={styles.buttonText7}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL15}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </div>
          <div className={styles.button32}>
            <img
              className={styles.iconJamIconsOutlineL16}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer8}>
              <div className={styles.buttonText8}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL17}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
            <div className={styles.badge2}>
              <div className={styles.text2}>9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col;
