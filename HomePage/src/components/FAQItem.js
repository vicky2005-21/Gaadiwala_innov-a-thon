import styles from "./FAQItem.module.css";

const FAQItem = () => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.toggle}>
        <div className={styles.question}>ADD SOME QUESTIONS?</div>
        <img
          className={styles.iconIoniconsFilledChe}
          alt=""
          src="/icon--ionicons--filled--chevrondown.svg"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.answer}>
          Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat
          donec id fermentum. Metus, tortor tellus ornare mauris, convallis
          quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam
          volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu
          tellus neque est feugiat.
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
