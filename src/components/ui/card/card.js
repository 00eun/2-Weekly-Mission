import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";
import PropTypes from "prop-types";

function LinkListItem({ item }) {
  LinkListItem.propTypes = {
    item: PropTypes.array.isRequired,
  };
  return (
    <a href={item.url} className={styles.cardLinkList}>
      <div className={styles.cardLinkImg}>
        <div>
          <img className={styles.cardImg} src={item.imageSource} alt="" />
        </div>
      </div>
      <div className={styles.text}>
        <span className={styles.cardTime}>{item.createdAt}</span>
        <p className={styles.cardDes}>{item.description}</p>
        <span className={styles.cardDay}>{item.createdAt}</span>
      </div>
    </a>
  );
}

export default function Cards() {
  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        const result = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const links = result.data.folder.links;
        setLinkList(links);
        return result.data;
      } catch {
        console.error("데이터를 불러오는데 실패하였습니다");
      }
    };
    userData();
  }, []);

  return (
    <ul className={styles.cardList}>
      {linkList.map((item) => {
        return (
          <li className={styles.cardWrap} key={item.id}>
            <LinkListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
