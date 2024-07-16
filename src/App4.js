import styles from "./App4.module.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const APIURL = "https://api.coinpaprika.com/v1/tickers";
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const ref = useRef(false);
  useEffect(() => {
    console.log("mounted");
    if (!ref.current) {
      ref.current = true;
      console.log("fetch");
      fetch(APIURL)
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setCoins(json);
          setLoading(false);
        });
    }
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div>
      <h2>The Coins {loading ? null : `(${coins.length} coins)`}</h2>
      {loading ? (
        <strong>Now Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) =>
            <li key={coin.id}>
              <span className={styles.s1}>{coin.name}</span>
              <span className={styles.s2}>{coin.symbol}</span>
              <span className={styles.s3}>USD ${coin.quotes.USD.price}</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
