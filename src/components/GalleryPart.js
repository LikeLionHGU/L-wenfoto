import React, { useEffect, useState } from "react";
import styles from "./GalleryPart.module.css";

function GalleryPart() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

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
              const titleOk =
                element.title.length > 12
                  ? `${element.title.slice(0, 12)}...`
                  : element.title;

              return (
                <div key={element._id}>
                  <div className={styles.gallery__card}>
                    <img src={element.img_path} alt={element.title} />
                    <div className={styles.gallery__text}>
                      <div className={styles.gallery__text_1}>
                        {element.owner_name}
                      </div>
                      <div className={styles.gallery__text_2}>{titleOk}</div>
                      <button>DELETE</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPart;
