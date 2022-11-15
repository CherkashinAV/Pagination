import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Spinner from "./Spinner/Spinner";
import "./styles.css";

function fetchData(url) {
  return fetch(url).then((el) => el.json());
}

function Loading() {
  return (
    <div>
      <Spinner />
      Loading...
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  const itemsAmount = items.length;

  function Data() {
    return (
      <>
        <div className="items">
          {slice.map((el, index) => {
            return <Card key={index} img={el.image} name={el.name} />;
          })}
        </div>
        <Pagination
          itemsAmount={itemsAmount}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }

  useEffect(() => {
    setIsLoading(true);
    const resp = fetchData(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    );
    resp
      .then((data) => {
        setItems(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  let endInd = itemsPerPage * currentPage;
  let startInd = endInd - itemsPerPage;
  const slice = items.slice(startInd, endInd);

  return <div className="App">{isLoading ? <Loading /> : <Data />}</div>;
}
