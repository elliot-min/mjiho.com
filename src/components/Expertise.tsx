import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faEarthAmericas, faMask, faRobot, faMoneyBills } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "JavaScript",
    "Flutter",
    "Flet",
    "Lovable",
    "Node.js",
    "Codex",
    "React",
    "Next.js",
    "TypeScript",
];

const labelsSecond = [
    "Postman",
    "Burp Suite",
    "Devtools",
    "Linux",
];

const labelsThird = [
    "OpenAI",
    "ChatGPT",
    "Ollama",
    "Gemini",
    "Perplexity",
    "Hugging Face",
    "Codex",
];

const labelsFourth = [
    "Sheets",
    "Google Finance",
    "Finviz",
    "TradingView",
    "Investing.com",
    "DART",
    "ProRealTime",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>What I Do</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faEarthAmericas} size="3x"/>
                    <h3>Web & App Development</h3>
                    <p>Building user-friendly and responsive web & mobile/PC applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMask} size="3x"/>
                    <h3>Basic Hacking</h3>
                    <p>Understanding the fundamentals of cybersecurity and ethical hacking.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Keeping up with the latest developments in generative AI and large language models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMoneyBills} size="3x"/>
                    <h3>Economics & Finance</h3>
                    <p>Learning about economic principles and financial decisions and managing my own assets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
