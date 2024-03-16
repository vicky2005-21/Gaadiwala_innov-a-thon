import SectionText from "./SectionText";
import Col from "./Col";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <SectionText
        secondaryHeadline="All the essential verification"
        paragraph="Both drivers and clients' data is verified and the company will assure to provide professional drivers."
      />
      <div className={styles.col}>
        <img
          className={styles.colChild}
          loading="lazy"
          alt=""
          src="/group-48.svg"
        />
      </div>
      <Col
        secondaryHeadline="Driving License "
        paragraph="The drivers license is verified and according to the info the vehicle type is assigned to driver"
        secondaryHeadline1="Vehicle Registration"
        secondaryHeadline2="Driver Experience"
      />
    </section>
  );
};

export default Section2;
