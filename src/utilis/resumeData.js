import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkIcon from "@material-ui/icons/Link";

export default {
  name: "Rayan Alrouh",
  title: "Software Developer",

  email: "rayan.alrouh@outlook.com",
  address: "Abu Dhabi, UAE",
  phone: "+971 56 759 8297",
  adress: "Abu Dhabi, UAE",
  downloadCv:
    "https://www.dropbox.com/s/8v8d4r2n8ey617d/Rayan%20ALROUH%20-%20Resume.pdf?dl=0",

  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/rayan-alrouh/",
      icon: <LinkedInIcon />,
      text: "MyLinkedin",
    },

    Github: {
      link: "https://github.com/heisenberg550",
      icon: <GitHubIcon />,
      text: "MyGithub",
    },
  },

  about:
    "I am on my way to learn AI and Robotics. My background includes studying in the fields of electrical engineering, control engineering, embedded systems, and mechatronics, Robotics, Electrical Designing, and AI. The list is still growing. \n\nOn the non-technical side, I am self-motivated, also a translator (Turkish/Arabic).",

  experiences: [
    {
      title: "Intern - Net Elektronik Tasarım Aş",
      date: "7/2019 – 8/2019",
      description:
        "Performing 9 hours per day in the R&D section on Altium designer.",
    },
    {
      title: "Intern - Turkish Electricity Distribution Corporation (TEDAŞ)",
      date: "7/2018 – 8/2018",
      description: "Maintenance workshop for high power Synchronous Motor.",
    },
  ],

  education: [
    {
      title: "Kırıkkale University",
      date: "2016 – 2021",
      description: "Electrical and Electronics Engineering",
    },
    {
      title: "Kırıkkale University",
      date: "2015 – 2016",
      description: "Qualification Course (TÖMER) - C1",
    },
    {
      title: "Ibn Khaldon High School",
      date: "2011 – 2013",
      description: "High School - 91.66%",
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: [
        "ReactJS",
        "JavaScript",
        "Python",
        "HTML5",
        "CSS3",
        "Material UI",
        "MySQL",
      ],
    },
    {
      title: "Electronic",
      description: ["C++", "Raspberry Pi", "Arduino"],
    },
    {
      title: "Programs",
      description: [
        "Altium Designer",
        "Proteus",
        "Fusion 360",
        "AutoCAD Electrical",
        "Excel, Word",
      ],
    },
    {
      title: "Languages",
      description: ["English", "Turkish", "Arabic"],
    },
  ],

  certifications: [
    {
      side: "left",
      title: "The Bits and Bytes of Computer Networking",
      date: "Apr 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/T32AB2GZLWA3",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Technical Support Fundamentals",
      date: "Mar 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/N7P6D2DSVPTD",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Autodesk Fusion 360 Integrated CAD/CAM/CAE",
      date: "Feb 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/AJ6QYJFUCFFT",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Excel Skills for Business: Intermediate II",
      date: "Sep 2020",
      link: "https://www.coursera.org/account/accomplishments/verify/T8AMABTB9NWH",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Excel Skills for Business: Intermediate I",
      date: "Aug 2020",
      link: "https://coursera.org/share/d4fe67704c7d2b22e19c38abaf24dd2d",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Python for Data Science and AI",
      date: "Apr 2020",
      link: "https://coursera.org/share/ef38139e4b8108421a5d8f3230526b04",
      organization: "coursera.org",
    },
    {
      side: "left",
      title: "Python Data Structures",
      date: "Mar 2020",
      link: "https://coursera.org/share/ef38139e4b8108421a5d8f3230526b04",
      organization: "coursera.org",
    },
    {
      side: "right",
      title: "Neural Networks and Deep Learning",
      date: "Jan 2020",
      link: "https://www.coursera.org/account/accomplishments/verify/NKKXJBHA9WCW",
      organization: "coursera.org",
    },
  ],

  projects: [
    {
      tag: "Next.js",
      images: [
        "https://cdn.cosmicjs.com/25ed5100-3d28-11ee-be3f-55e1752361d4-Opera-Snapshot2023-08-17220036ankacargo.com.png",
      ],
      title: "Landing page",
      caption: "Landing page",
      description: "Landing page",
      links: [
        {
          link: "https://ankacargo.com",
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: "University Projects",
      images: [
        "https://cdn.cosmicjs.com/f1dc8ed0-3d22-11ee-be3f-55e1752361d4-photo2020-12-2915-48-10.jpg",
        "https://cdn.cosmicjs.com/037ffae0-3d24-11ee-be3f-55e1752361d4-20201218143051.jpg",
        "https://cdn.cosmicjs.com/046096e0-3d24-11ee-be3f-55e1752361d4-20201214190119.jpg",
      ],
      title: "Self balancing robot",
      caption: "Arduino based self balancing robot",
      description: "Project of 4th Year University",
      links: [
        { link: "https://youtu.be/0bnQlZczCOw", icon: <YouTubeIcon /> },
        {
          link: "https://github.com/mahowik/BalancingWii",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "University Projects",
      images: [
        "https://cdn.cosmicjs.com/af5fd620-3d22-11ee-be3f-55e1752361d4-1.jpg",
        "https://cdn.cosmicjs.com/af8a6890-3d22-11ee-be3f-55e1752361d4-2.jpg",
        "https://cdn.cosmicjs.com/af4e22e0-3d22-11ee-be3f-55e1752361d4-3.jpg",
        "https://cdn.cosmicjs.com/044a28b0-3d24-11ee-be3f-55e1752361d4-20190516095041.jpg",
      ],
      title: "IoT Garden",
      caption:
        "Remote monitoring of plants using Raspberry Pi and controlled by Telegram",
      description:
        "Remote monitoring of plants using Raspberry Pi and controlled by Telegram",
      links: [],
    },
    {
      tag: "University Projects",
      images: [
        "https://cdn.cosmicjs.com/8a382be0-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-224435.png",
        "https://cdn.cosmicjs.com/8a231d40-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-224631.png",
        "https://cdn.cosmicjs.com/89d7e370-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-224614.png",
      ],
      title: "Abnormal Heart Sounds Detector",
      caption:
        "Deep learning-based Classifiers for Detection Abnormal Heart Sounds.",
      description:
        "A research paper was considered about Deep learning-based Classifiers for Detection of Abnormal Heart Sounds.",
      links: [
        {
          link: "https://physionet.org/files/challenge-2016/1.0.0/papers/potes.pdf",
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://cdn.cosmicjs.com/89d6aaf0-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-231400.png",
      ],
      title: "Resume Web Page",
      caption: "Single Page Application",
      description: "Portfolio Single Page Application",
      links: [
        {
          link: "https://github.com/heisenberg550/react-resume-clone",
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://cdn.cosmicjs.com/89dd3aa0-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-234126.png",
        "https://cdn.cosmicjs.com/89dd3aa0-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-234126.png",
      ],
      title: "Photo Gallery",
      caption: "Photo Gallery by React",
      description: "Photo Gallery to firebox by React",
      links: [
        {
          link: "https://github.com/heisenberg550/PhotoGallery",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "JavaScript",
      images: [
        "https://cdn.cosmicjs.com/8a36cc50-3d27-11ee-be3f-55e1752361d4-Annotation-2021-08-22-232757.png",
      ],
      title: "CountDown Timer",
      caption: "CountDown Timer",
      description: "CountDown Timer",
      links: [
        {
          link: "https://github.com/heisenberg550/trainingProjects/tree/main/Countdown-Timer",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};
