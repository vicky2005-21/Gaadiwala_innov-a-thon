import SectionText from "./SectionText";
import Col from "./Col";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <SectionText
        secondaryHeadline="Focus on what matters"
        paragraph="Our drivers are not just behind the wheel, they are the heartbeat of every journey."
      />
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src="/group.svg"
      />
      <Col
        secondaryHeadline="Find the Best !"
        paragraph="Find the perfect match so it match your requirements"
        secondaryHeadline1="Find the Best !"
        secondaryHeadline2="Find the Best !"
      />
    </section>
  );
};

export default Section1;
