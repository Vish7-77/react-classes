const Header = () => {
  return (
    <>
      <div className="myHeader">
        {/* left div for logo */}
        <div className="myLogo">LOGO</div>

        {/* right div for logo */}
        <div className="rightAction">
          <span>Home</span>
          <span>Services</span>
          <span>Contact Us</span>
        </div>
      </div>
    </>
  );
};

export default Header;
