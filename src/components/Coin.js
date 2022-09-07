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
    const [usd, setUsd] = useState("");
    const onChangeUsd = (event) => setUsd(event.target.value);
    const [won, setWon] = useState("");
    const onChangeWon = (event) => setWon(event.target.value);
    const [inverted, setInverted] = useState(true);
    const onInvert = () => {
        setInverted((current) => !current);
    };
    const reset = () => {
        setUsd("");
        setWon("");
    };
    return (
        <div>
            <h1 className={styles.head}>
                The Coins! {loading ? "" : `(${coins.length})`}
            </h1>
            <br></br>
            <button className={styles.btn_small} onClick={reset}>
                Reset
            </button>
            <button className={styles.btn_small} onClick={onInvert}>
                {inverted ? "USD" : "KRW"}
            </button>
            <br></br>
            <input
                className={styles.input}
                value={usd}
                onChange={onChangeUsd}
                type="number"
                placeholder="Write down USD you want to invest"
                disabled={!inverted}
            ></input>
            <input
                className={styles.input}
                value={won}
                onChange={onChangeWon}
                type="number"
                placeholder="Write down KRW you want to invest"
                disabled={inverted}
            ></input>
            <br></br>
            {loading ? (
                <strong>Loading...</strong>
            ) : inverted ? (
                <select className={styles.select}>
                    {coins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}) : the number you can buy
                            with your USD :
                            {(usd / coin.quotes.USD.price).toFixed(5)}
                        </option>
                    ))}
                </select>
            ) : (
                <select className={styles.select}>
                    {coins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}) : the number you can buy
                            with your KRW :
                            {(won / 1200 / coin.quotes.USD.price).toFixed(5)}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default App;
