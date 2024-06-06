import Header from "../components/Header";
import ServicesCard from "../components/ServicesCard";

const ServicesScreen = () => {
  return (
    <>
      <Header />
      <div className="flexDispay">
        <ServicesCard
          image={
            "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5pY2lhbnxlbnwwfDB8MHx8fDA%3D"
          }
          title={"service200"}
          desc={"this is best service"}
        />
        <ServicesCard
          image={
            "https://images.unsplash.com/photo-1540476547779-348beb642680?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5pY2lhbnxlbnwwfDB8MHx8fDA%3D"
          }
          title={"service 100"}
          desc={"this is service 100 best service"}
        />
        <ServicesCard
          image={
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5pY2lhbnxlbnwwfDB8MHx8fDA%3D"
          }
          title={"service 200"}
          desc={"this is service 200 best service"}
        />
      </div>
    </>
  );
};

export default ServicesScreen;
