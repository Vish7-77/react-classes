import ServicesCard from "./ServicesCard";

const Hero = () => {
  const arrayData = [
    {
      title: "this is new Title",
      desc: "this is new Description",
      image:
        "https://plus.unsplash.com/premium_photo-1674815329430-99edb323164e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
    {
      title: "Title 2",
      desc: "this is new Description 2",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
    {
      title: "this is new Title",
      desc: "this is new Description-3",
      image:
        "https://plus.unsplash.com/premium_photo-1674815329430-99edb323164e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
    {
      title: "this is new Title",
      desc: "this is new Description-4",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
    {
      title: "this is new Title",
      desc: "this is new Description-5",
      image:
        "https://plus.unsplash.com/premium_photo-1674815329430-99edb323164e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
    {
      title: "this is new Title",
      desc: "this is new Description-6",
      image:
        "https://plus.unsplash.com/premium_photo-1674815329430-99edb323164e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    },
  ];



  return (
    <>
      <div className="cardDiv">
        {arrayData.map((ele, index) => (
          <ServicesCard
            key={index}
            title={ele.title}
            desc={ele.desc}
            image={ele.image}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
