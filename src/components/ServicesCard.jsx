const ServicesCard = ({ title, desc ,image}) => {
  return (
    <>
      <div className="card">
        <img
          className="cardImage"
          src={image}
          alt=""
        />
        <span> {title}</span>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default ServicesCard;
