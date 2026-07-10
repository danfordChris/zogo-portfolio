
import { faDocker, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Nextjs",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Django",
    "Python",
    "java",
    "SQL",
    "PostgreSQL",
    "Postman",
    "Firebase",
    "Flutter"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Digital Ocean",
    "Linux",
      "Pandas",
      "jenkins",
      "synk",
      "vercel",
      "kubernetes"
    // "Snowflake",  
    // "Selenium",
];

const labelsThird = [
    "OpenAI",
    "pandas",
    "TensorFlow",
    "Python Libraries"
    // "Groq",
    // "LangChain",
    // "Qdrant",
    // "Hugging Face",
    // "LlamaIndex",
    // "Streamlit",
];
const activities = [
    "Playing Games",
    "Learning new things in Technology",
    "Travelling",
    "Watching Movies",
    "Teaching people about technology",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>

            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build full-stack web applications with React, Next.js, Django, and TypeScript, covering product architecture, frontend systems, backend APIs, and delivery workflows for growing businesses.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I help teams move from development to production with CI/CD pipelines, cloud deployment, release automation, testing workflows, and operational support for stable launches.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Mobile Engineering, GenAI & ML</h3>
                    <p>I work on cross-platform mobile apps with Flutter and also integrate AI capabilities where they add real business value, from automation to data-informed product experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>

            <div className="activities-container">
                <h3>Apart from coding, some other activities that I love to do!</h3>
                <ul className="activities-list">
                    {activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>          
            </div>
        </div>
    </div>
    );
}

export default Expertise;
