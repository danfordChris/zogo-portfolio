
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>


            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date="2025 - Present"
                iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">
                    Mobile Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    IPF Software {" "}
                </h4>
                <ul>
                    <li>Contributed to the development of cross-platform mobile applications using Flutter.</li>
                    <li>Collaborated with the UI/UX team to implement intuitive user flows.</li>
                    <li>Integrated REST APIs for seamless communication with backend systems.</li>
                </ul>
            </VerticalTimelineElement>





            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date="2023 - Present"
                iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">
                    Mobile Engineer, Quality Assurance
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Freelancing{" "}
                </h4>
                <ul>
                    <li>Developed and maintained cross-platform mobile applications using Flutter for Android and iOS.</li>
                    <li>Participated in code reviews to maintain clean, scalable, and maintainable codebases.</li>
                    <li>Improved application performance and user experience.</li>
                </ul>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Flutter Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ocean Tech Startup{" "}
            </h4>
            <ul>
              <li>Developed an e-commerce application using Flutter.</li>
              <li>Integrated Firebase for authentication, real-time database, and cloud storage.</li>
              <li>Improved application performance and user experience.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend developer & DevOps engeener
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Trilabs Limited
            </h4>
            <ul>
              <li>Developed custom web solutions and integrated AI-assisted capabilities.</li>
              <li>Integrated payment systems into an online transport booking platform.</li>
              <li>Built REST APIs to support a smooth booking experience across applications.</li>
              <li>Managed continuous integration and deployment workflows for faster delivery.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Finhub community
            </h4>
            <ul>
              <li>Developed custom web design solutions.</li>
              <li>Collaborated with organizations to build strong web experiences.</li>
              <li>Designed an e-commerce web app.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer & UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software development club{" "}
            </h4>
            <ul>
              <li>Developed custom web design solutions.</li>
              <li>Designed an e-commerce web app.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
