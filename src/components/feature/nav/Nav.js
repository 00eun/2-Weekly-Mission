import styles from "./Nav.module.css";
import { ReactComponent as Myprofile } from "../../../icon/Myprofile.svg";

export default function Nav() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.gnb}>
          <div className={styles.logo}>
            <img src="/imgs/linkbrarylogo.png" alt="linkbrary" />
          </div>
          <div>
            <span className={styles.user}>
              <Myprofile />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
