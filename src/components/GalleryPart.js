import React, { useEffect, useState } from "react";
import styles from "./GalleryPart.module.css";
import default_Img from "../img/default_Img.jpg";

import { FaCircleUser } from "react-icons/fa6";
import ReadDialog from "./ReadDialog";

const onErrorImg = (e) => {
  e.target.src = default_Img;
};

function GalleryPart() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  // ===========
  const [isOpenedStates, setIsOpenedStates] = useState({});
  // 모달 여는 함수
  const handleCardClick = (cardId) => {
    setIsOpenedStates((prevStates) => ({
      ...prevStates,
      [cardId]: true,
    }));
  };
  // 모달 닫는 함수
  const handleModalClose = (cardId) => {
    setIsOpenedStates((prevStates) => ({
      ...prevStates,
      [cardId]: false,
    }));
  };
  // ==========

  function getCard() {
    fetch("https://ll-api.jungsub.com/gallery/list")
      .then((response) => response.json())
      .then((data) => setCard(data));
    setLoading(false);
  }

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <div className={styles.gallery}>
        {loading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.gallery__contianer}>
            <div className={styles.gallery__top}>
              <h1>Seize the moment</h1>
              <button>Add Images</button>
            </div>

            <div className={styles.gallery__info}>
              {card.map((element) => {
                const cardId = element._id;
                const titleOk =
                  element.title.length > 10
                    ? `${element.title.slice(0, 10)}...`
                    : element.title;

                const realImg = `https://ll-api.jungsub.com${element.img_path}`;

                return (
                  <div key={cardId}>
                    <div className={styles.gallery__card}>
                      <img
                        src={realImg}
                        alt={element.title}
                        onError={onErrorImg}
                        onClick={() => handleCardClick(cardId)}
                      />
                      {isOpenedStates[cardId] ? (
                        <div>
                          <h1>it's Opened</h1>
                          <ReadDialog
                            title={element.title}
                            owner_name={element.owner_name}
                            text={element.text}
                            img={realImg}
                            createdAt={element.createdAt}
                            stateChanger={() => handleModalClose(cardId)}
                            modalState={isOpenedStates[cardId]}
                          />
                        </div>
                      ) : null}
                      <div className={styles.gallery__text}>
                        <div className={styles.gallery__icon}>
                          {<FaCircleUser />}
                        </div>
                        <div className={styles.gallery__text_1}>
                          {element.owner_name}
                        </div>
                        <div className={styles.gallery__text_2}>{titleOk}</div>

                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GalleryPart;
