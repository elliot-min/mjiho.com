import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://anki.mjiho.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://anki.mjiho.com/" target="_blank" rel="noreferrer"><h2>SentenceAnki</h2></a>
                <p>Developed a web application that helps users memorize English sentences using spaced repetition.</p>
            </div>
            <div className="project">
                <a href="https://udok.mjiho.com/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://udok.mjiho.com/" target="_blank" rel="noreferrer"><h2>Udok </h2></a>
                <p>Developed a web application that shows remaining seats for Umyeonsan Studying Zone(Not in service yet).</p>
            </div>
            <div className="project">
                <a href="https://social.mjiho.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://social.mjiho.com/" target="_blank" rel="noreferrer"><h2>Studying Tools</h2></a>
                <p>Developed various kinds of studying tools to help students learn more effectively.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;