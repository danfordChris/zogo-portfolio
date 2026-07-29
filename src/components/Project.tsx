
import { makePlaceholderImage } from "../lib/placeholders";
import "../assets/styles/Project.scss";



const projects = [


    {
        title: "Solomon StockBrocker App",
        description: "A stock exchange mobile app that enables the user to buy and sell stocks, view stock prices, and manage their portfolio. The app provides real-time stock market data, news, and analysis to help users make informed investment decisions.",
        image: makePlaceholderImage("Solomon StockBroker"),
        link: "",
    },


    {
        title: "Bantu Soko App",
        description: "A mobile app that collects all important service like transport, event planning, and market place in one place, making it easier for users to access and use these services without the need to download multiple apps.",
        image: makePlaceholderImage("Bantu Soko"),
        link: "https://play.google.com/store/apps/details?id=tz.bantu.soko.android&pcampaignid=web_share",
    },



    {
        title: "Imbeju CRDB App",
        description: "An offline a CRDB application tha aims to handle the meetings (VIKOBA) for local people, allowing them to manage their finances, track contributions, and facilitate communication within their groups without the need for an internet connection.",
        image: makePlaceholderImage("Imbeju CRDB"),
        link: "",
    },

    {
        title: "Code challenge App",
        description: "A trello like application that allows users to create boards, lists, and cards to organize their tasks and projects. The app provides a user-friendly interface for managing and collaborating on tasks, making it easier for teams to stay organized and productive.",
        image: makePlaceholderImage("Code Challenge"),
        link: "",
    },

      {
      title: "MealGro App",
      description: "A mobile application that helps users plan their meals, create shopping lists, and reduce food waste by suggesting recipes based on available ingredients.",
      image: makePlaceholderImage("MealGro"),
      link: "https://drive.google.com/file/d/1uIJ9cKkGrLQGfLyRvkH__FP1HSAd1WMJ/view?usp=drive_link",
    },
    {
      title: "Tumafast App",
      description: "A mobile application that connects users with local delivery services for quick and efficient package delivery within their city and outside their city at affordable rates.",
      image: makePlaceholderImage("Tumafast"),
      link: "https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link",
    },{
      title: "Tetris Game",
      description: "A clasic Tetris Game built with Flutter framework for mobile devices. The game features smooth controls, colorful graphics, and increasing difficulty levels to keep players engaged.",
      image: makePlaceholderImage("Tetris Game"),
      link: "https://drive.google.com/file/d/1nMWR8w6lo4q1DkGNT3nwoGUBaWEirjPc/view?usp=drive_link",
    },

    {
      title: "Stock Management",
      description: "A mobile application designed to manage inventory, notify the owner about stock levels, and suggest products to increase annual gains.",
        image: makePlaceholderImage("Stock Management"),
      link: "",
    },
    {
        title: "Ocean E-commerce",
        description: "This is an e-commerce app that links the manufacturer of the products down to the end-user, simplifying the marketing process.",
        image: makePlaceholderImage("Ocean E-commerce"),
        link: "https://play.google.com/store/apps/details?id=com.oceangroup.ocean&pcampaignid=web_share",
    },
    {
        title: "Changisha App",
        description: "Changisha App is a crowdfunding platform designed to help individuals and groups raise money for various causes, such as medical expenses, education, community projects, and personal emergencies. It simplifies the fundraising process by allowing users to create campaigns, share them with potential donors, and receive contributions seamlessly through mobile money and digital payment methods. The app aims to make financial support more accessible and transparent for those in need.",
        image: makePlaceholderImage("Changisha"),
        link: "https://drive.google.com/file/d/1zeVK1_V666EJtbpkTck7kTSISwKu3Ocd/view?usp=drive_link",
    },
    // {
    //   title: "Youtube Downloader",
    //   description: "A web application using a simple Python library to allow users to download any YouTube video or complete playlist ad-free and fast.",
    //   image: mock06,
    //   link: "",
    // },
    {
        title: "Nasafiri",
        description: "A web application aimed at reducing the hassle of transport booking, saving time for passengers, and offering insurance options.",
        image: makePlaceholderImage("Nasafiri"),
        link: "",
    },
    {
        title: "Cypherz",
        description: "This is an agriculture platform that eliminates the middleman in agricultural products, linking sellers and buyers directly.",
        image: makePlaceholderImage("Cypherz"),
        link: "",
    },
    {
      title: "Vikoba+",
      description: "A mobile app that simplifies money management for small-scale groups (Vikoba), making it easy to track expenses and income.",
      image: makePlaceholderImage("Vikoba+"),
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
