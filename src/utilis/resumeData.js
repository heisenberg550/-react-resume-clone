import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkIcon from "@material-ui/icons/Link";

export default {
  name: "Rayan Alrouh",
  title: "FrontEnd Developer",

  email: "rayan.alrouh@outlook.com",
  address: "Bağcılar, İstanbul",
  phone: "+905396713723",
  adress: "Bağcılar, İstanbul",
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
      tag: "University Projects",
      images: [
        "https://previews.dropbox.com/p/thumb/ABSmqm0d6fXOR2gdiLSnshB1CSge4AU4ioPVwCyFMVaTTi0ZnnUT5wZsHHoPtsay63nOWm_VTUUGaaZROhIJf8XNB2c0ee3YzcnOBGUzsxA9Kk0lxG3K-ThvS1GX0lVhlkt8P_yf5h8pT31QXuj14lv2ktjOdC8xm2WDtn6Ud1XEKtZZapyJnmkjrsA_Rl5pxd-GrVwHqZ8hCyysNOSjb7TW9eaZ1g4jMvBQE8SvMC6Qqq89dZ3_n7kMcgC2je0jrvRww-Eiq2Z5GjiVWaVbjlnj--tFBri9uxbseTgg4fRlx7BvdNkRppJ202qc1spwjBRNbWdDKpdKGrmbzsYVBXBdpjaf83vpdTdv_zdV417LSQ/p.jpeg?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABQT90VJaHOTCt5EtOEVvAWjrJDqr1nARMl7cI0MLoJQ9mUXt9_TMjB-CySw3H9Qhy7fFSRTDe2W_QMmNNs_ysNrstDlDbJ3-mI9VyWIdAj5gjTbYGeKPeUoKoFvmL1-ZhkDQhQjlH6NzmvllblglTKslQ1TBgRxqYooOiZ7gS8UoMTsmHsPTFcDcq5avy_oUbSiJB2VRTqTCMOcmD5-mZ540Tt4zBGC41JE7hPyxsRHEJuVIuEhb8m29FC4-5gSKCdZGJswsjUHbEGaSa96KSlQI-JToMXAh7lRj53ONMPO1N-wgA42u4KWHfvFC8fTa_ibntxOWJZq_eIETOVpOfPoZNC3HXhs1WeYanK071qBlA/p.jpeg?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABTZSYD1Vory7Lpd8zXb24gGzyoK5e2K1p70LKGGtrKzGjCds5wtx7Uv1Mj-ijRwlZC7QLuebhnCd3A5Vx8xJAfCNJ2sr1sbJyew9NiMNU48eIQCd43NNM_ObMdSBReHuCZDySUv3E_lor1KDnS-3s96PTfnWTXFxCAx6-nHoAe3S7fduvfrZpEsAlzvMMz0exKr1ajgNIpoQQfSCF9RgRMcwmDaRudi2T5p63Xmr23wY-7u7MSDVy98OQibA31mtqlA1Dh8s0rgL_Wr4ddqcMmbo0ZqhPT42Q5yM36a8BfKTFjMzmJCeO5J8aSUWC67LRgIWrrJPl7QI9ckcGulCfnSKN2w4G2ReqIbeMAEMOcdtA/p.jpeg?fv_content=true&size_mode=5",
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
        "https://previews.dropbox.com/p/thumb/ABQymDj4i_vtYFaMhgbk1s4FgAQe4kvnbfqQLR8c1Igo6nrI_g1UhJMAWzvpdT0MpKAKMebK_Sr1z57_HBBbT_NfM6fVIshwMwmg6UjxWdY3F0vl8MXCTspNlu--ujAlOPYlXe40lLR5vLTu4V4Vm7w40OFzK_M-bEaFtFms1RDHV4vfLh2W7kkBZeDLapnDyhbAGnmzXrQ8MBSQMY4ic1Tm6hOCmEyjJxCLtfpZ8oNR2egU_9Ku6Wa4MbZnxc75yb5sRAdug8DuJ0yDAWm8RA4sfdec8YGgK_y7wuI2Kom9YSc_rCZJZ84_ZtwHsbb9S_8lz609R8YWnxUSk3jkSACq_u-UJiyChRUdThcVx4yd_Q/p.jpeg?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABT-uu0dHgU3KBrugEA4mhxociELuxslBYwc6Kv7OtSQsijIGGgC6wJyl2O3Rz4BeFe8DbaIz544_Air6tKbsmamgrg1g4wBoYJokSiM4gHWcOxD5SxenmbrXU923L3S5MDP-j_UfELcbKdOkOzjFKYSmQhDJobmyXkZK3jW0MWNinkRXW2Q7FEWw5IxzZFJgMcUSthCcVXicaGmJPGahhp84VIbsAtSYHjjeA4vyB1bhOlmXYKSiArhGPCbnFAJX5DxMEf3Dfw9QJaRQcHTi415u3RfUMW6JBxmgAPZOHZ6dDq1ZpALXIHu4fNQndDByu1RR3QI70IsBizdnLeSzycbRhJXdU-e0AKR_6FqHRjarw/p.jpeg?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABSsl3JGqj_fkZQUypR0UJlgV4s9ekd_jfyDZZFeIXGRLyimXrIKQk95l-Rocb03z6CZMMVbNEE2-lSbZmbPUajx6fjPi--hQ3imakfZe5lE3b6x203vb-ueHUtOGFgYGONsm4uog_wmfpqG9bZNFSNp47dYi-7DZ7M1-gX-bp-exDJmE8Yc_350EFwxuH5qvPmUsBVmPbRR8wG64DnjDbV1yyhblnqBixaNWjfVRdloo9XHXwNJ4iVPnq5Ib3ZSVJyK_EVz41W8ab-DN7QlxNnfU16aojJBh290boro29QRs4YeSmaErT-LcXuaR6Zq-Le7udXxbOPPH_xyJ7eR65FS0YWFC4f-IJr12M_kOIQRdQ/p.jpeg?fv_content=true&size_mode=5",
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
        "https://previews.dropbox.com/p/thumb/ABSESlEnpxC5aH5g9PDaZS3aOUeTf0VwZ3Y2FfZDTEhIC92CzHjTpAOpA5OlHh-ue-GtKxzk8z6Fq4UuVjGco0emaxTxBpXodeebLTLU9IjVt8wRUx9YsQO2d-DTw4FqWKwMcWLUGBTejQ02kz9YQtd9LlKDB5BsrFNpCxFTimXUBhpGlAzz55TEWrBI35TGN9CCVUjk3kqY0fd46ytKBhG_eQ7k5_m9vKWjQvbuKRLcLiceGQnKVTu2fTfdREgLOeKduOQgQiRiSFmxziOGf22mQv-9gAbL3J7YyNtp98qxJGY-3MLf4mqEEtcmh7KoSi8R6WaDjbUc2ab7gJNC_dYNt3fo7F3BJvZsz51ITvOqbg/p.png?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABSUL0r12bBFXp1nZhlQxyAhNqgLzi0oKtq-PxsXL1kEFyuZ7_Aww3VNMFZDESCaFHCHkFMd74AwkQDtVcvDvyFQ8Bg2kJlFn5Mh1rzPE2t-TKZv15MRjjbMtQZD1c8_Is5KfmJpZkwHyDuPJoeLT_JHPo4XdxwNoS17y6_I52MJVp0aVUv1EBpBc69XTHv5ICOFuSbHLmx-W5fr3kRq__KCJQq2MC9MmQmCKXcU-ku8JKssK7b_kLeSIuhnCogAn2s0HsHWUJgmpFIDqHUFzIfDc13QBeVuxppolX7T0mKoTW9yXmgmEj_nxp6s2zrdXCQY8KzKmFFdbFKtkzA0KfY_VUY5aAtknTyi-WnqNVHsmQ/p.png?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABRZVSYUcWtNK02HzEUt_UXkS9g3_p7pBqB3deo2j5tBIoC1fOmnafJdCbykGbXMSOUQXwZI-2YSfnz2USFyTvdj8p8DN_uP1jDIOxxwcRSwFtlIQJv1ZAO9GkbySkmkHI7Kj5LJGOjGA2mLY0v4346tV4eyg4Sj_8kobXKzAptfnxb2HthTUuEDzs71JXksilRoX7ac3wtr31RK3-0lc96TShca2OTgNBIEku0oT02n0GFRoTMqKj-f_AJaqwYgT54mYfTRN1I_dQbPKEYUGCW27SYq98UB6vsonp1FatZFWmEJ1JOEA6Xs1wFUZsAmiLOLTji3Kj6Btb4lrD8JP8SAckKihsABs53lAczVqG4s7Q/p.png?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABT18RqJ_9JTeJVf-DeMjBiXlZxa14PUvcW5mcMOfaW6wMcHM-dVVyuvYo9qW7H2K3AkkVKMAcu-8ACwDs5lIxF7AXekYuC1-xfwkg5l-X8lO9AHQlJPnvH1SW1zwmfLO1cK3H6xNuiwnYDp5M1sopso59WgxloDR5APl-sykcYF1WfRPEYxV7ZHfHkRD9R8UU9RmT1wg7S3b0W_Qegt_tpUtmAiifCn_1-ziFy0mVjZZaTTXCQ23IrJENIvkcZB_d2v2i1jR7wVoN_rodR8pD-jnJSqjF7Ydts-Vq-g6P0waUKeupuSKFSquS0qe0BtjHtuSGl3aI4UgsFQsYxTMTrSXoT84wfFEs0is4IHOeMGPQ/p.png?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABTxSNFbZezBc6gyZrxS2M2SDsQmL1v5sHipFPVPIc-3TMvE9KgZTkMUmlSN9K4Lzzm2c4z49xGOuQT_Vp1YtcBxN375VMTmI0jU7pn91eZfnlHNjWEdO3XFXgudX0qWs7LtKxpkfg16OYpba8oWNXD4CFIpTCtcax39acc4Voo3m_3q7-shMWyf_QnaPwsYWfjyoIB8rf4Cp0FpIzOh3Qgr8VgR77jSybLJbvqxpuqpRxS_KfPilDWo9ebAnfvB40yRtO8GJnXvOfg9LSs9Plituj7DlMWknBRb8W_mKls3hyNqsKxGc9xzn_jh0KrUjKa3etcKVm6p9wbvw4sWupaaNaMmzRCzZ533wt7jsCi1aA/p.png?fv_content=true&size_mode=5",
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
        "https://previews.dropbox.com/p/thumb/ABQo6jWSoTRGknfyvWEnUrpNFCNl2DXJnPtU35Zh5VtNLDUioZglat7-w5qJcZLmkc3_HzK8pgiLVvGCWf3xm-_URI-FNkuhTkP_I6uQG-MmQwZiDOMa-bOVJ-SXAP4Zsn_Qv-tIGz61zudMJnJqp3KLIK_2QDp0bheARz8IU_ilMYFmfVEoxyzalbaH9lqNX7K70ek_FfrgY80O2bUMMvafFA5CLLiVxz30ydA6C1pjcrTpCDtJ45qtZVUuuOfWls_mckQjS8Ea6fBo43rHitGxXnCiE8kPsxtxciBfLMClkDVlKXW1XWYLCLNKwuuDXXaRT4WgygOiuADnjVmRKE7ZidlGvnFe9BvJHpjjAZnjaA/p.png?fv_content=true&size_mode=5",
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
        "https://previews.dropbox.com/p/thumb/ABRxXYX653X5Vos7_kKEz27Hu5S9gj77Eby2_DpGI-d8d5lomChVmsMFCjnBuOtzOqKdqmw22KeB644Ym8jt6B8m0Mp3xxirqZe6dkUWyshbQoM7hJS6hZnpCZywWKqpigSlvPLGzLmPdrZgnXHh6gw_DFX6OyNsXOQTBvKyUBMVLgCk1nF3lizW9Fge56UJMYE8c-SYbXEUHot2U3THpFwaDE8CNs-1qbMtdymystcjlQeDKeYAe7oQoXav8-iLYWi2AqUVhDnfZ4TeR1R7i3yscB9OO1nH6dy1NOh88k0h9WTgHyxzgu2bJSwZjBAPxsNJUIPH_C4YGwFMamiB0z5MWHIu8suqOOJeZZUULLkCng/p.png?fv_content=true&size_mode=5",
        "https://previews.dropbox.com/p/thumb/ABSZ3GR8FxDId-KNO8jhpWiNkWxiu_JGecWhJq4RjJXzIPwTpzPaEv7TA8AS5qdurX_sU83Gi_zs9c-OIsPotxFLUhcnnkYXleEvCcFirDqGXyoK5LeINZ3RT62ZfWEzSpjjI27Qw75EO7KOkK9uGC2cQGnKvgWW788TNXoE-foq5qLU-oKxNS9fe_4U7xt1rWO7lORB4ROa8ubw-2DoYcIOyLwvwNa6kjyjQasQd5bxtve0Gkp1WuSsLw92yWlufnCaRNKRf4AFL-t5sOISmSweGjtGkw0XGAisVSpCD9FRc5QT1Cc91xL9GAg9UvKM-NXMzNHGd5omc61uVJaU5pWpMIm9K9CtAgmV9PpI8Gy06Q/p.png?fv_content=true&size_mode=5",
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
        "https://previews.dropbox.com/p/thumb/ABTrmp0gF6rfKwylSQDCXBCMvc8Lejfcq5ZBDeoiLpTjTvt0nOH5y0u6baz3Gh-n9e1_Z-DwIZdtrb6ev1_pOFzOk4xZ1ssw0KDwGLUbHKPYwbBFKJlanBLWSLOwE43VB5FPcpTxV9ejgnJ6SlXZbC9hsM9eAn2x69F1_YqXupHmPVB9yAesKUca31AGVyAuptHLdZgQaewRGiZkZ8pR7WgmigupvehQVnufCXlhJ3ACMDvsnm7-aaFAprhanZq_ITpxuZKGHFsnBL4a8ggI6IcdwuqWKsQQUs3RjtihlM-o_bb_Yzc49hTQG22WDdz6GGuJ14HHdj3jiUoK22fFZntwsgGDwNV3jzx7q8FAOi2Jqg/p.png?fv_content=true&size_mode=5",
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
