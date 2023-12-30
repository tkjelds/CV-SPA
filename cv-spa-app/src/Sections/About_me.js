import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import profile_picture from "./img/Profile_picture_pixelart.png"
import i18n from '../i18n';




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


export function AboutMe() {
  return (
    <div className="about_me_section right_section" >
      <div className="about_me_description">
        <h1 className="floating">{i18n.t("section.about_me.hello")}</h1>
        <p>
          {i18n.t("section.about_me.description")}
        </p>
      </div>
      <img className="profile_picture" src={profile_picture} alt="profile_picture" />
    </div>
  );
}