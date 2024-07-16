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
        <select>
          {coins.map((coin) =>
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          )}
        </select>
      )}
    </div>
  );
}

export default App;
