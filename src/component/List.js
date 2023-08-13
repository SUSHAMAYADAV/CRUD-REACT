import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const List = () => {
  const [searchtext, searchText] = useState("");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const API = "https://fakestoreapi.com/products";
  const fakeData = async () => {
    const res = await axios.get(API);
    setData(res.data);
    console.log("print data", data);
  };
  useEffect(() => {
    fakeData();
  }, []);

  console.log(searchtext);
  return (
    <>
      <div>
        <input
          style={{
            padding: "10px 90px 10px 140px",
            margin: "20px 0px 0px 5px",
            borderRadius: "10px",
          }}
          type="text"
          onChange={(e) => searchText(e.target.value)}
          placeholder="Search"
        />
      </div>
      <h3>
        Total add carts items :
        <span style={{ color: "red" }}>{count === 0 ? null : count}</span>
      </h3>
      {data
        ?.filter((item) => {
          return Object.keys(item).some((key) => {
            return String(item[key])
              .toLocaleLowerCase()
              .includes(String(searchtext.toLocaleLowerCase()));
          });
        })
        .map((item, index) => {
          return (
            <div className="card" key={index}>
              <Link to={`/userdetails/${item.id}`}>
                <h3>{item.title}</h3>
                <img src={item.image} alt="Denim Jeans" height="160px" />
                <p className="price"> Rs.{item.price}</p>
                <p>{item.description}</p>
              </Link>
              <p>
                <button
                  onClick={() => setCount(count + 1)}
                  style={{ borderRadius: "10px" }}
                >
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
    </>
  );
};
export default List;
