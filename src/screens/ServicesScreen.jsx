import { useState } from "react";
import Header from "../components/Header";

const ServicesScreen = () => {
  // this useState hook / function will return u two array elements this array containes two values, one is to use the value and another to update the value
  const [price, setPrice] = useState(0);

  const inc = () => {
    setPrice(price + 1);
  };

  const dec = () => {
    if (price <= 0) {
      setPrice(0);
    } else {
      setPrice(price - 1);
    }
  };

  return (
    <>
      <div className="mainRightCont">
        <Header />
        <div className="servicesdiv">
          <div className="incDiv">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDB8MHx8fDA%3D"
              alt=""
            />
            <span className="title">Watch 500 series</span>

            <span className="numberSpan">{price}</span>
            <div className="buttonDiv">
              <button onClick={dec}>-</button>
              <button onClick={inc}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesScreen;
