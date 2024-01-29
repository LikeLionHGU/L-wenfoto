// 성환
import styles from "./Footer.module.css";
import { VscHeartFilled, VscGithubInverted } from "react-icons/vsc";

import { FaCheckCircle, FaAward } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>이것은 로고</div>

      <div className={styles.footer__info}>
        <div className={styles.footer__blc}>
          <div className={styles.footer__blc_menu}>
            <div>
              <FaAward /> Members
            </div>
            <div>
              <FaCheckCircle /> Tasks
            </div>
            <div>
              <VscGithubInverted /> Github
            </div>
            <div>
              <VscHeartFilled /> Instagram
            </div>
          </div>
        </div>
        <div className={styles.footer__blc}>
          <div>심성환</div>
          <div>Header, AddDialog</div>
          <div>hwan129</div>
          <div>@tlatjdghks</div>
        </div>
        <div className={styles.footer__blc}>
          <div>이한나</div>
          <div>Banner, DeleteDialog</div>
          <div>Leehannaa</div>
          <div>@ihan_na589</div>
        </div>
        <div className={styles.footer__blc}>
          <div>최예라</div>
          <div>GalleryPart, Footer</div>
          <div>YearaChoi</div>
          <div>@yeara_choi</div>
        </div>
        <div className={styles.footer__blc}>
          <div>박은주</div>
          <div>ReadDialog, Footer</div>
          <div>ejPark43</div>
          <div>@_silver_marble_</div>
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
