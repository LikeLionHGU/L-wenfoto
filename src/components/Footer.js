// 성환
import styles from "./Footer.module.css";
import { VscHeartFilled, VscGithubInverted } from "react-icons/vsc";

import { FaInstagram, FaAward } from "react-icons/fa";

import styled from "styled-components"; //
//
const NameBGColor = styled.span`
  margin: 0px;
  text-decoration: underline 2px #ff9800;
  text-underline-offset: 3px;
  /* background-color: #ff980099; */
`; //
function Footer() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__logo}>Löwenfoto</div>
        <div className={styles.footer__blc}>
          <div className={styles.footer__blc_menu}>
            <div>
              <FaAward /> Members
            </div>
            {/* <div>
              <FaCheckCircle /> Tasks
            </div> */}
            <div>
              <VscGithubInverted /> Github
            </div>
            <div>
              <VscHeartFilled /> Instagram
            </div>
          </div>
        </div>
        <div className={styles.footer__blc}>
          <div>
            <NameBGColor>심성환</NameBGColor>
          </div>
          {/* <div>Header, AddDialog</div> */}
          <div className={styles.footer__csur}>
            <div onClick={() => handleClick("https://github.com/hwan129")}>
              hwan129
            </div>
            <div
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/tlatjdghks?igsh=MTlkM2dvY3c1YnhseQ=="
                )
              }
            >
              @tlatjdghks
            </div>
          </div>
        </div>
        <div className={styles.footer__blc}>
          {/* <div>이한나</div> */}
          <div>
            <NameBGColor>이한나</NameBGColor>
          </div>
          {/* <div>Banner, DeleteDialog</div> */}
          <div className={styles.footer__csur}>
            <div onClick={() => handleClick("https://github.com/LeeHannaa")}>
              Leehannaa
            </div>
            <div
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/ihan_na589?igsh=NHp3Z2ZlZ3A2b2c="
                )
              }
            >
              @ihan_na589
            </div>
          </div>
        </div>
        <div className={styles.footer__blc}>
          {/* <div>최예라</div> */}
          <div>
            <NameBGColor>최예라</NameBGColor>
          </div>
          {/* <div>GalleryPart, Footer</div> */}
          <div className={styles.footer__csur}>
            <div onClick={() => handleClick("https://github.com/YearaChoi")}>
              YearaChoi
            </div>
            <div
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/yeara_choi?igsh=MTQzMjVyajl6NXUwNA%3D%3D&utm_source=qr"
                )
              }
            >
              @yeara_choi
            </div>
          </div>
        </div>
        <div className={styles.footer__blc}>
          {/* <div>박은주</div> */}
          <div>
            <NameBGColor>박은주</NameBGColor>
          </div>
          {/* <div>ReadDialog, Footer</div> */}
          <div className={styles.footer__csur}>
            <div onClick={() => handleClick("https://github.com/ejPark43")}>
              ejPark43
            </div>
            <div
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/_silver_marble_?igsh=MXV1eHVqaTVtZThzYw=="
                )
              }
            >
              @_silver_marble_
            </div>
          </div>
        </div>
        <div className={styles.footer__likelion}>
          <div className={styles.footer__likelion_links}>
            <div
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/likelion.frontend/?igsh=MXhuZ3h2bDduaHk1eA%3D%3D"
                )
              }
            >
              <FaInstagram />
            </div>
            <div
              onClick={() =>
                handleClick("https://github.com/LikeLionHGU/L-wenfoto")
              }
            >
              <VscGithubInverted />
            </div>
          </div>
          <div>LikeLion Frontend</div>
          <div>Learn more about us</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
