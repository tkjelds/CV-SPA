import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import * as React from "react";

function About_me_timeline() {
  return (
    <Timeline position="alternate" className="timeline_test">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h2> ITU</h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

function About_me() {
  return (
    <div className="about_me_section right_section">
      {About_me_timeline()}{" "}
      <div className="about_me_description">
        <p>
          {" "}
          Nulla aliquip irure cillum velit in consectetur exercitation pariatur
          do minim. Aliquip nostrud anim excepteur minim consequat cillum aute
          voluptate nulla velit irure id tempor quis.{" "}
        </p>
      </div>
    </div>
  );
}

export default About_me;
