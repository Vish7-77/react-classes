import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="myHeader">
        {/* left div for logo */}
        <div className="myLogo">LOGO</div>

        {/* right div for logo */}
        <div className="rightAction">
          <Link to={"/"}>Home</Link>
          <Link to={"/services"}> Services</Link>
          <span>Contact Us</span>
        </div>
      </div>
    </>
  );
};

export default Header;
