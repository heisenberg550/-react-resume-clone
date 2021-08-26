import React from "react";
import "./Footer.css";
import { Typography } from "@material-ui/core";
import resumeData from "../../utilis/resumeData";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            {resumeData.name}
          </a>
          <br />
          Clone Idea from{" "}
          <a href="https://themeforest.net/user/tavonline" target="_blank">
            Travoline
          </a>
        </Typography>
      </div>
    </div>
  );
};
