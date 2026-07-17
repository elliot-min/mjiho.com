import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBook, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faFutbol } from "@fortawesome/free-regular-svg-icons";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Journey & Projects</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">Investing</h4>
            <p>
              Started investing in stocks, ETFs, and bonds at the young age of 14.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">SentenceAnki</h3>
            <h4 className="vertical-timeline-element-subtitle">Open Source Project
            </h4>
            <p>
              A web application that helps users memorize English sentences using spaced repetition.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFutbol} />}
          >
            <h3 className="vertical-timeline-element-title">Seocho FC Management</h3>
            <h4 className="vertical-timeline-element-subtitle">Player & System Administrator</h4>
            <p>
              Managing the club's website, social media, and internal systems while playing as a center back for the team.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Hacking Defense Olympiad</h3>
            <h4 className="vertical-timeline-element-subtitle">DIMI Olympiad</h4>
            <p>
              Took part in the DIMI Hacking Defense Olympiad and won 6th place.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;