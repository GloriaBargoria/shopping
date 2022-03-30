import CategoryCard from "../components/CatergoryCard";
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://i.ibb.co/hRkHhXT/game-controller-g297cc6479-640.jpg" name="Xbox" />
        <CategoryCard image="https://i.ibb.co/hRkHhXT/game-controller-g297cc6479-640.jpg" name="PS5" />
        <CategoryCard image="https://i.ibb.co/hRkHhXT/game-controller-g297cc6479-640.jpg" name="Switch" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://i.ibb.co/hRkHhXT/game-controller-g297cc6479-640.jpg" name="PC" />
        <CategoryCard
          image="https://i.ibb.co/hRkHhXT/game-controller-g297cc6479-640.jpg"
          name="Accessories"
        />
      </div>
    </main>
  );
};
export default HomePage;