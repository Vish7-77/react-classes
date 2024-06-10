import "./sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="Sidebar">
        <span className="SideBarLogo">Logo</span>
        <span className="menu">Dashboard</span>
        <span className="menu">Services</span>
        <span className="menu">Account</span>
        <span className="menu">Personlised</span>
      </div>
    </>
  );
};

export default SideBar;
