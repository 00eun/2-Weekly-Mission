import CardList from "../../components/ui/cardList/cardList";
import Search from "../../components/ui/search/Search";
import styles from "./Shared.module.css";

export default function Shared() {
  return (
    <div className={styles.container}>
      <Search />
      <CardList />
    </div>
  );
}
