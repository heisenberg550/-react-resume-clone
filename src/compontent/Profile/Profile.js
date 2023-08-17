import React from "react";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../CustomTimeline/CustomTimeline";
import resumeData from "../../utilis/resumeData";
import { Grid, Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TelegramIcon from "@material-ui/icons/Telegram";

import "./Profile.css";
import { CustomButton } from "../Button/Button";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile containeer_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        {/* <img src={profileImage} alt="profile image" /> */}
        <img src={require("../../assets/images/profile.jpg").default} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem
            title="Email"
            text={<a href={"mailto:" + resumeData.email}>{resumeData.email}</a>}
          />
          <CustomTimelineItem title="Adress" text={resumeData.adress} />
        </CustomTimeline>
        <br />
        <div className="button_container">
          <a href={"tel:" + resumeData.phone}>
            <CustomButton text={"Contact Me"} icon={<TelegramIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
