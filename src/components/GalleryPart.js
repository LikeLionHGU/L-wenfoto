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
  const [cards, setCard] = useState([]);

  // ===========
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [pathImage, setPathImage] = useState();

  const handleCardClick = (card) => {
    setIsOpen(true);
    setSelected(card);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };
  // ==========

  function getCard() {
    fetch("https://ll-api.jungsub.com/gallery/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCard(data);
        console.log(data.img_path);
        // setPathImage(`https://ll-api.jungsub.com${data?.img_path}`);
      });
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
              {cards?.map((card) => (
                <div>
                  <div className={styles.gallery__card}>
                    <img
                      src={`https://ll-api.jungsub.com${card?.img_path}`}
                      alt={card.title}
                      onError={onErrorImg}
                      onClick={() => handleCardClick(card)}
                    />
                    <div className={styles.gallery__text}>
                      <div className={styles.gallery__icon}>
                        {<FaCircleUser />}
                      </div>
                      <div className={styles.gallery__text_1}>
                        {card.owner_name}
                      </div>
                      <div className={styles.gallery__text_2}>
                        {card.title.length > 12
                          ? `${card.title.slice(0, 12)}...`
                          : card.title}
                      </div>

                      <button>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div>
          <h1>it's Opened</h1>
          <ReadDialog
            open={isOpen}
            onClose={handleModalClose}
            item={selected}
            img={pathImage}
          />
        </div>
      )}
    </>
  );
}

export default GalleryPart;
