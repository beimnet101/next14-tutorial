import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Beimnet</div>
      <div className={styles.text}>
        Beimnets creative thoughts© All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
