import { useEffect, useState } from "react";
// import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";
import CreateUserForm from "../components/CreateUserForm";
import Table from "../components/Table";

const Home = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInput] = useState("");

  const getAllData = async () => {
    const data = await axios.get("/api/users");
    setData(data.data.users);
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
      <div className="w-full flex-col flex ">
        <div className="flex w-full flex-wrap h-fit ">
          Home
        </div>
      </div>
    </>
  );
};

export default Home;
