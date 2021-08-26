import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../compontent/CustomTimeline/CustomTimeline";
import resumeData from "../../utilis/resumeData";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineSVG from "../../compontent/TimelineSVG/TimelineSVG";

export const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutme_text" variant="body2">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* EDUCATION And EXPERIENCE */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Work History</h6>
        </Grid>
        <Grid container className="resume_timeline">
          <Grid item xs={12} sm={6}>
            {/* Work EXPERIENCE */}
            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
              {resumeData.experiences.map((exp) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {exp.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {exp.date}
                    </Typography>
                    <Typography className="timeline_description">
                      {exp.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          {/* EDUCATION */}
          <Grid item xs={12} sm={6}>
            <CustomTimeline title="Education" icon={<SchoolIcon />}>
              {resumeData.education.map((edu) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {edu.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {edu.date}
                    </Typography>
                    <Typography className="timeline_description">
                      {edu.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section ">
        <Grid item className="section_title section">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="space-between"
          className="section pb_45 pt_25"
        >
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Paper elevation={0} className="skill">
                <Typography variant="h6" className="skill_titles">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="skill_description">
                    <TimelineDot
                      variant={"outlined"}
                      className="timeline_dot"
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section pb_10 ">
        <Grid item className="section_title section ">
          <span></span>
          <h6 className="section_title_text ">Certifications</h6>
        </Grid>
        <Grid container className="pt_25 ">
          <Grid item xs={12}>
            {resumeData.certifications.map((cert) => (
              <TimelineSVG
                side={cert.side}
                title={cert.title}
                date={cert.date}
                organization={cert.organization}
                link={cert.link}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
