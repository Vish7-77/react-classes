import { useState } from "react";

const Card = ({ title, description }) => {
  const [number, setNumber] = useState(0);

  const inc = () => {
    setNumber(number + 1);
  };

  const dec = () => {
    if (number <= 0) { 
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <button
            onClick={inc}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            plus
          </button>
          <h2 class="text-4xl font-extrabold dark:text-white">{number}</h2>
          <button
            onClick={dec}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Minus
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
