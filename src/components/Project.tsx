
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.jpg";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mealgro from "../assets/images/mealgro.png";
import tetris from "../assets/images/tetris.jpeg";
import tumafast from "../assets/images/tumafast.jpeg";
import mock10 from "../assets/images/ocean.png";
import "../assets/styles/Project.scss";



const projects = [

    {
      title: "Nasafiri",
      description: "A web application aimed at reducing the hassle of transport booking, saving time for passengers, and offering insurance options.",
      image: mock07,
      link: "",
    },
    {
      title: "Cypherz",
      description: "This is an agriculture platform that eliminates the middleman in agricultural products, linking sellers and buyers directly.",
      image: mock04,
      link: "",
    },
    {
      title: "Ocean E-commerce",
      description: "This is an e-commerce app that links the manufacturer of the products down to the end-user, simplifying the marketing process.",
      image: mock10,
      link: "https://play.google.com/store/apps/details?id=com.oceangroup.ocean&pcampaignid=web_share",
    },
    {
      title: "Changisha App",
      description: "Changisha App is a crowdfunding platform designed to help individuals and groups raise money for various causes, such as medical expenses, education, community projects, and personal emergencies. It simplifies the fundraising process by allowing users to create campaigns, share them with potential donors, and receive contributions seamlessly through mobile money and digital payment methods. The app aims to make financial support more accessible and transparent for those in need.",
      image: mock03,
      link: "https://drive.google.com/file/d/1zeVK1_V666EJtbpkTck7kTSISwKu3Ocd/view?usp=drive_link",
    }, 
      {
      title: "MealGro App",
      description: "A mobile application that helps users plan their meals, create shopping lists, and reduce food waste by suggesting recipes based on available ingredients.",
      image: mealgro,
      link: "https://drive.google.com/file/d/1uIJ9cKkGrLQGfLyRvkH__FP1HSAd1WMJ/view?usp=drive_link",
    }, {
      title: "Tumafast App",
      description: "A mobile application that connects users with local delivery services for quick and efficient package delivery within their city and outside their city at affordable rates.",
      image: tumafast,
      link: "https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link",
    },{
      title: "Tetris Game",
      description: "A clasic Tetris Game built with Flutter framework for mobile devices. The game features smooth controls, colorful graphics, and increasing difficulty levels to keep players engaged.",
      image: tetris,
      link: "https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link",
    },

    {
      title: "Stock Management",
      description: "A mobile application designed to manage inventory, notify the owner about stock levels, and suggest products to increase annual gains.",
      image: mock05,
      link: "",
    },
    // {
    //   title: "Youtube Downloader",
    //   description: "A web application using a simple Python library to allow users to download any YouTube video or complete playlist ad-free and fast.",
    //   image: mock06,
    //   link: "",
    // },
    {
      title: "Vikoba+",
      description: "A mobile app that simplifies money management for small-scale groups (Vikoba), making it easy to track expenses and income.",
      image: mock08,
      link: "",
    },
  ];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="zoom project-img" alt="thumbnail" />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
