import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.finebtn}>
            <Link to="todo">
                <button className={styles.btn}>To Do List</button>
            </Link>
            <Link to="coin">
                <button className={styles.btn}>Coin Tracker</button>
            </Link>
        </div>
    );
}
export default Home;
