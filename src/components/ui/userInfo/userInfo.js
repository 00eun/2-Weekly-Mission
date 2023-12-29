import styles from "./userInfo.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserInfo() {
  const [userFolderName, setUserFolderName] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userData = async () => {
      try {
        const result = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = result.data.folder;
        setUserFolderName(data.name);
        setUserProfileImg(data.owner.profileImageSource);
        setUserName(data.owner.name);
      } catch {
        console.log("데이터를 불러오는데 실패하였습니다");
      }
    };
    userData();
  }, []);
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userProfile}>
          <img
            className={styles.userProfileImg}
            src={userProfileImg}
            alt="프로필 이미지"
          />
          <div className={styles.userName}>{userName}</div>
        </div>
        <div className={styles.userFolderName}>{userFolderName}</div>
      </div>
    </>
  );
}
