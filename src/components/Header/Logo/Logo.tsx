import logo from "./die.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Board Games Planet</h1>
    </div>
  );
};

export default Logo;
