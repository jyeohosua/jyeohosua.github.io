/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Joshua Huqueriza",
  description:
    "I'm dedicated to observing how people meet their needs, analyzing and understanding client sentiments, and utilizing technology to create ventures that drive positive change for individuals, organizations, and society.",
  og: {
    title: "Joshua Huqueriza Portfolio",
    type: "website",
    url: "http://joshuahuqueriza.com/",
  },
};

//Home Page
const greeting = {
  title: "Joshua Huqueriza",
  logo_name: "JoshuaHuqueriza",
  nickname: "Josh | Haku",
  subTitle:
    "I'm dedicated to observing how people meet their needs, analyzing and understanding client sentiments, and utilizing technology to create ventures that drive positive change for individuals, organizations, and society.",
  resumeLink:
    "https://drive.google.com/file/d/15GuuVTyMypAWUZmJduLcabb4Z2gYv4Bb/view?usp=sharing",
  portfolio_repository: "https://www.linkedin.com/in/joshua-huqueriza/",
  githubProfile: "https://github.com/jyeohosua",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/jyeohosua",
  // linkedin: "https://www.linkedin.com/in/joshua-huqueriza/",
  // gmail: "jhuqueriza8@gmail.com",
  // facebook: "https://www.facebook.com/jyeohosua/",
  // twitter: "https://twitter.com/jyeohosua",
  // instagram: "https://www.instagram.com/jyeohosua/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joshua-huqueriza/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:JHuqueriza8@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jyeohosua/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jyeohosua/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & CRM",
      fileName: "DataScienceImg",
      skills: [
        "🔸 Effectively communicate data-driven insights, recommendations, and solutions to clients and team members",
        "🔸 Proficient in data visualization tools like Lucid or Power BI to enhance insights and streamline client support",
        "🔸 Utilized data analysis techniques to identify trends and patterns in feedback, leading to improvements in service offerings and operational processes",
        "🔸 Using data to develop strategies to measure their impact on key performance metrics",
        // 🔸 for bulletpoints - haku
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Word",
          fontAwesomeClassname: "vscode-icons:file-type-word2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Powerpoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Access",
          fontAwesomeClassname: "vscode-icons:file-type-access2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Lucid",
          fontAwesomeClassname: "simple-icons:lucid",
          style: {
            backgroundColor: "transparent",
            color: "#282C33",
          },
        },
        {
          skillName: "VMWare",
          fontAwesomeClassname: "file-icons:vmware",
          style: {
            backgroundColor: "transparent",
            color: "#FB8C00",
          },
        },
        {
          skillName: "SalesForce",
          fontAwesomeClassname: "logos:salesforce",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Avaya",
          fontAwesomeClassname: "carbon:communication-unified",
          style: {
            backgroundColor: "transparent",
            color: "#df2a2a",
          },
        },
      ],
    },
    {
      title: "Website Development",
      fileName: "FullStackImg",
      skills: [
        "🔸 Ability to create responsive and user-friendly interfaces for optimal client experience",
        "🔸 Familiarity in React for front end development and skilled in server-side programming with languages like Python, Java, or JavaScript (Node.js)",
        "🔸 Ability to work on both front end and back end aspects of website development to ensure seamless integration and optimal user experience",
        // 🔸 for bulletpoints - haku
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "devicon:visualstudio",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud-Based Client Solutions",
      fileName: "CloudInfraImg",
      skills: [
        "🔸 Commitment to staying updated on the latest technologies and industry trends in both full-stack development and client service",
        "🔸 Collaboration skills to work effectively with cross-functional teams, including workforce, operations, and managers",
        "🔸 Willingness to adapt and learn new tools and technologies to enhance skills and improve customer satisfaction",
        "🔸 Experience in managing projects, setting priorities, and meeting deadlines to ensure timely delivery of solutions",
      ],
      softwareSkills: [
        {
          skillName: "Outlook",
          fontAwesomeClassname: "vscode-icons:file-type-outlook",
          style: {
            background: "transparent",
          },
        },
        {
          skillName: "One Note",
          fontAwesomeClassname: "vscode-icons:file-type-onenote",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Publisher",
          fontAwesomeClassname: "vscode-icons:file-type-publisher",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MS Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
          style: {
            background: "transparent",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "logos:slack-icon",
          style: {
            background: "transparent",
          },
        },
        {
          skillName: "Gnatta",
          fontAwesomeClassname: "ph:chat-dots",
          style: {
            color: "#a64abf",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "🔸 Prioritizing the needs and preferences of clients when designing user interfaces to ensure a positive user experience",
        "🔸 Proficient in using tools like Adobe XD, Sketch, or similar software to create visually appealing and user-friendly interfaces",
        "🔸 Conducting usability tests with customers to gather feedback and insights, guiding iterative improvements to the UI design for enhanced usability and satisfaction",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Sketch",
          fontAwesomeClassname: "logos:sketch",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HTML",
      iconifyClassname: "logos:html-5",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: "Java",
      iconifyClassname: "skill-icons:java-dark",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: "Javascript",
      iconifyClassname: "logos:javascript",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: "Python",
      iconifyClassname: "devicon:python-wordmark",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: ".Net",
      iconifyClassname: "logos:dotnet",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: "C++",
      iconifyClassname: "logos:c-plusplus",
      style: {
        background: "transparent",
      },
    },
    {
      siteName: "Visual Studio",
      iconifyClassname: "devicon:visualstudio",
      style: {
        background: "transparent",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "AMA Computer College",
      subtitle: "Information and Communication Technology",
      logo_path: "ama_logo.png",
      alt_name: "AMA Computer College",
      duration: "June 2018 - March 2020",
      descriptions: [
        "🔸 I have studied software-related subjects such as Data Structures, Java, Python, C++, Visual Studio, and others",
        "🔸 Apart from this, I have done courses on Web Development, Data Science, Cloud Computing and Full Stack Development",
        "🔸 I was selected to receive one of the Excellence Awards, which are given to the top 10% of students in college. Additionally, I received an award from the respected school director for outstanding academic performance",
      ],
      website_link: "https://www.ama.edu.ph/",
    },
    {
      title: "Sta. Lucia High School",
      subtitle: "Computer Programming and Computer Systems Servicing",
      logo_path: "stalucia_logo.png",
      alt_name: "SLHS",
      duration: "June 2014 - March 2018",
      descriptions: [
        "🔸 I have completed a variety of courses related to computer system servicing, related in software development, machine learning, computer vision, and more",
        "🔸 During my high school years, I played an active role in both the multimedia department and student government",
        "🔸 I contributed to organizing school pageants, managing our school's anniversary celebrations, participating in journalism contests, and participating in various other activities",
      ],
      website_link: "https://www.facebook.com/STA.LUCIAHIGHSCHOOL/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Background",
  description:
    "I have worked with some well-established companies as an analyst, providing services for clients in the market related to operations and CRM. I love organizing events, and I am passionate about social good, technology, and programming.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "🔻 Work Timeline",
      work: true,
      experiences: [
        {
          title: "Operations Analyst",
          company: "Citibank",
          company_url: "https://www.citigroup.com/global/about-us",
          logo_path: "citi_logo.png",
          duration: "September 2023 - Present",
          location: "Taguig City, Metro Manila, Philippines",
          description:
            "Managing in consumer banking, private banking, and providing services to clients internationally. Analyze feedback and data to identify opportunities to improve products, services, and processes. Understanding customer needs and pinpointing issues, provide recommendations to operations that enhance banking satisfaction.",
          color: "#000000",
        },
        {
          title: "Tier 2 Advisor & Agent",
          company: "Teleperformance FHCS",
          company_url: "https://www.teleperformance.com/en-us/why-tp/about-tp/",
          logo_path: "teleperformance_logo.png",
          duration: "June 2021 - September 2023",
          location: "Pasig City, Metro Manila, Philippines",
          description:
            "Responsible for handling technical escalations and more advanced inquiries that includes payment transactions, logistics handling, warehouse processes, and escalated concerns. Promoted as subject matter expert helping advisors understand the nuances of the business ensuring the details are correct and will meet the needs of operations, processes, and best practices.",
          color: "#0879bf",
        },
        {
          title: "Taining and Marketing Officer",
          company: "JF Microcomputer Learning Services",
          company_url:
            "https://depedmandaluyong.org/2019/11/13/ad19-326-basic-and-advanced-computer-learning-from-jf-microcomputer-leraning-services/",
          logo_path: "deped_logo.png",
          duration: "May 2020 - May 2021",
          location: "Mandaluyong City, Metro Manila, Philippines",
          description:
            "Develop technical related programs/projects enhancements for management approval for training and lessons about software, equipment and computer usage. Conceptualize training materials based on data and research, responsible for continuous improvement based on learner feedback and best practices. Contributing in the implementation of marketing strategies to drive sales and enhance brand visibility in retail settings",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "haku_logo_small.png",
    description:
      "I am available on almost every social media. I will reply within 24 hours. Looking forward to connecting further!",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "I've had the opportunity to work with some fantastic companies, honing my skills as an analyst in operations and CRM. Outside of work, I thrive on organizing events and am truly passionate about making a positive impact through social good, technology, and programming. You can also check my LinkedIn.",
    link: "https://www.linkedin.com/in/joshua-huqueriza",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pasig City, Metro Manila, 1611, Philippines",
    locality: "Filipino",
    country: "Philippines",
    region: "Manila",
    postalCode: "1611",
    streetAddress: "Pasig",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Pasig,+Metro+Manila/data=!4m2!3m1!1s0x3397c7dc88f7b24f:0x4a592b2b4b34fd89?sa=X&ved=1t:242&ictx=111",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
