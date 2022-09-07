import { useEffect, useState } from "react";
import styles from "./Coin.module.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    const [usd, setToDo] = useState("");
    const onChange = (event) => setToDo(event.target.value);
    return (
        <div>
            <h1 className={styles.head}>
                The Coins! {loading ? "" : `(${coins.length})`}
            </h1>
            <input
                value={usd}
                onChange={onChange}
                type="number"
                placeholder="Write down USD you want to invest"
            ></input>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}) : the number you can buy
                            :{(usd / coin.quotes.USD.price).toFixed(5)}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default App;
