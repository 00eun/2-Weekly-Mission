import styles from "./Search.module.css";

export default function Search() {
  return (
    <>
      <div>
        <input
          type="text"
          className={styles.search}
          placeholder={"링크를 검색해보세요."}
        />
      </div>
    </>
  );
}
