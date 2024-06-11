import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  const data = [
    {
      title: "Noteworthy technology acquisitions 2021",
      image:"",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Major Cloud Computing Mergers 2021",
      description:
        "An overview of the significant mergers in the cloud computing industry in 2021.",
    },
    {
      title: "Top AI Startups Acquired in 2021",
      description:
        "A list of the most impactful AI startups acquired this year.",
    },
    {
      title: "Biggest Fintech Acquisitions 2027",
      description:
        "Exploring the most notable acquisitions in the fintech sector in 2021.",
    },
    {
      title: "Healthcare Technology Acquisitions 2021",
      description:
        "Highlighting key acquisitions in the healthcare technology industry this year.",
    },
    {
      title: "E-commerce Acquisitions That Shaped 2021",
      description:
        "A rundown of the e-commerce acquisitions that had a major impact in 2021.",
    },
    {
      title: "Cybersecurity Mergers and Acquisitions 2021",
      description:
        "Detailing the major mergers and acquisitions in the cybersecurity field in 2021.",
    },
    {
      title: "Top Automotive Tech Acquisitions 2021",
      description:
        "The biggest technology acquisitions in the automotive industry in 2021.",
    },
    {
      title: "Significant EdTech Acquisitions 2021",
      description:
        "A summary of the most significant acquisitions in the educational technology space this year.",
    },
    {
      title: "Leading Green Tech Acquisitions 2021",
      description:
        "An overview of major acquisitions in the green technology sector in 2021.",
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex-col flex ">
        <Header />
        <div className="p-10"></div>
        <div className="flex w-full flex-wrap h-fit ">
          {data.map((ele) => (
            // eslint-disable-next-line react/jsx-key
            <Card title={ele.title} description={ele.description}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
