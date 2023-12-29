import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <span className={styles.copyright}>©codeit - 2023</span>
      <div className={styles.footerLinks}>
        <a href="/privacy" className="footer-links-privacy">
          Privacy Policy
        </a>
        <a href="/faq" className={styles.footerLinksPrivacy}>
          FAQ
        </a>
      </div>
      <ul className={styles.footerSnss}>
        <li className="sns">
          <a href="https://www.facebook.com/">
            <img src="imgs/footer_ico_facebook.png" alt="페이스북" />
          </a>
        </li>
        <li className="sns">
          <a href="https://twitter.com/">
            <img src="imgs/footer_ico_twitter.png" alt="트위터" />
          </a>
        </li>
        <li className="sns">
          <a href="https://www.youtube.com/">
            <img src="imgs/footer_ico_youtube.png" alt="유튜브" />
          </a>
        </li>
        <li className="sns">
          <a href="https://www.instagram.com/">
            <img src="imgs/footer_ico_instagram.png" alt="인스타그램" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
