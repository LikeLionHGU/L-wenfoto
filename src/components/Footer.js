// 성환
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>이것은 로고</div>
      <div className={styles.footer__info}>
        <div className={styles.footer__member}>
          <div>Members</div>
          <div>심성환</div>
          <div>이한나</div>
          <div>최예라</div>
          <div>박은주</div>
        </div>
        <div>
          <div>Tasks</div>
          <div>Header, AddDialog</div>
          <div>Banner</div>
          <div>GalleryPart, Footer</div>
          <div>ReadDialog</div>
        </div>
        <div className={styles.footer__github}>
          <div>Github</div>
          <div>깃헙링크</div>
          <div>깃헙링크</div>
          <div>깃헙링크</div>
          <div>깃헙링크</div>
        </div>
        <div className={styles.footer__insta}>
          <div>Instagram</div>
          <div>인스타링크</div>
          <div>인스타링크</div>
          <div>인스타링크</div>
          <div>인스타링크</div>
        </div>
      </div>
      <div className={styles.footer__likelion}>
        <div>LikeLion Frontend</div>
        <div>Learn more about us</div>
        <div className={styles.footer__likelion_links}>
          <div>멋사 링크</div>
          <div>멋사 깃헙</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
