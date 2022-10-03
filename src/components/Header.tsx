import logo from "../assets/logo.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.todoHeader}>
      <img src={logo} alt="RockeToDo Logo" />
    </header>
  );
};

export default Header;
