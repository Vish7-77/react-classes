import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInput] = useState("");

  const getAllData = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    setData(data.data.products);
  };

  const handleSubmit = () => {
    const newArr = data.filter((ele) => {
      if (ele?.title.includes(inputValue)) {
        return ele;
      }
    });
    setData(newArr);
  };

  // useEffect will activate when the component/screen is present in the web
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex-col flex ">
        <Header
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInput={setInput}
        />
        <div className="p-10"></div>
        <div className="flex w-full flex-wrap h-fit ">
          {/* mapping is nothing but looping through an array */}
          {data.map((ele) => (
            // eslint-disable-next-line react/jsx-key
            <Card title={ele.title} description={ele.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
