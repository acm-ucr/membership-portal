import Filters from "./Filters";

const filters = {}; // linked directly from filters
Filters.forEach((filter) => (filters[filter.topic] = filter));

const Events = [
  {
    title: "Intern Panel",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2022, 8, 27, 16, 0, 0),
    end: new Date(2022, 8, 27, 18, 0, 0),
    zoom: "",
    description:
      "Learn about the tips and tricks undergraduates use to secure internships opportunities.",
  },
  {
    title: "CRS: Resume + LaTex",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 9, 6, 16, 0, 0),
    end: new Date(2022, 9, 6, 18, 0, 0),
    zoom: "",
    description:
      "Come learn about how to create your resume with Latex for the upcoming application season!",
  },
  {
    title: "Campus Tours",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2022, 9, 7, 16, 0, 0),
    end: new Date(2022, 9, 7, 18, 0, 0),
    zoom: "",
    description:
      "Walk around UCR's beautiful campus and learn about what UCR has to offer for you as a student!",
  },
  {
    title: "Project Showcase",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2022, 9, 11, 16, 0, 0),
    end: new Date(2022, 9, 11, 18, 0, 0),
    zoom: "",
    description:
      "Check out projects made by ACM members for inspiration on your own personal project, and learn more about upcoming hackathons.",
  },
  {
    title: "CRS: Internships",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 9, 13, 16, 0, 0),
    end: new Date(2022, 9, 13, 18, 0, 0),
    zoom: "",
    description:
      "Learn about the internship application lifecycle and how to get prepared!",
  },
  {
    title: "Picture Day",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2022, 9, 14, 16, 0, 0),
    end: new Date(2022, 9, 14, 18, 0, 0),
    zoom: "",
    description:
      "Join us to take your next profile picture for all your professional social media platforms.",
  },
  {
    title: "Speed Dating",
    location: "WCH 205/6",
    type: "Socials",
    start: new Date(2022, 9, 17, 16, 0, 0),
    end: new Date(2022, 9, 17, 17, 0, 0),
    zoom: "",
    description:
      "Come out and meet all the possible mentors you could be paired with for the rest of the school year!",
  },
  {
    title: "What Bytes Will Offer",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2022, 9, 18, 16, 0, 0),
    end: new Date(2022, 9, 18, 17, 0, 0),
    zoom: "",
    description:
      "Create a plan and see some cool projects created by your mentors!",
  },
  {
    title: "CRS: Interview Process",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 9, 20, 16, 0, 0),
    end: new Date(2022, 9, 20, 18, 0, 0),
    zoom: "",
    description:
      "Explore the tips and tricks behind technical and behavioral interviews.",
  },
  {
    title: "Ready Player ACM",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2022, 9, 25, 16, 0, 0),
    end: new Date(2022, 9, 25, 17, 0, 0),
    zoom: "",
    description:
      "Come to our VR/AR research panel with Prof. Jiasi Chen, Meta SWE James Luo, and graphics researchers to learn about the recent developments in VR/AR technology.",
  },
  {
    title: "CRS: Linkedin/Github",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 9, 27, 16, 0, 0),
    end: new Date(2022, 9, 27, 18, 0, 0),
    zoom: "",
    description:
      "Polish your LinkedIn and Github profiles for visiting recruiters!",
  },
  {
    title: "Movie Night",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2022, 9, 28, 16, 0, 0),
    end: new Date(2022, 9, 28, 18, 0, 0),
    zoom: "",
    description: "Relax after midterms with a movie night in the clubroom.",
  },
  {
    title: "CRS: Course Planning",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 10, 3, 16, 0, 0),
    end: new Date(2022, 10, 3, 18, 0, 0),
    zoom: "",
    description:
      "With registration around the corner, learn about the tricks to get all the credits and classes you need!",
  },
  {
    title: "Mentor/Mentee Day #1: UV Social",
    location: "Meeting at UCR Sign/Scotty Bench, walking to UV",
    type: "Socials",
    start: new Date(2022, 10, 4, 16, 0, 0),
    end: new Date(2022, 10, 4, 18, 0, 0),
    zoom: "",
    description:
      "Meet with your matches and get some food or boba with them on our first Mentor/Mentee day!",
  },
  {
    title: "Thinking Like A Programmer",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2022, 10, 8, 16, 0, 0),
    end: new Date(2022, 10, 8, 18, 0, 0),
    zoom: "",
    description:
      "Discover the tips and tricks to THINK like a programmer and help you excel in your classes, projects, and various opportunities.",
  },
  {
    title: "CRS: Mock Interviews",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 10, 10, 16, 0, 0),
    end: new Date(2022, 10, 10, 18, 0, 0),
    zoom: "",
    description:
      "Do a mock behavoral or technical or both interview with our officers!",
  },
  {
    title: "CRS: Graduate Studies",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 10, 17, 16, 0, 0),
    end: new Date(2022, 10, 17, 18, 0, 0),
    zoom: "",
    description:
      "Explore graduate studies and the necessary requirements to stand out!",
  },
  {
    title: "Interview with Namanh Kapur",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2022, 10, 22, 16, 0, 0),
    end: new Date(2022, 10, 22, 18, 0, 0),
    zoom: "",
    description:
      "Join Namanh Kapur, a content creator, discuss his journey and various challenges he faced along the way.",
  },
  {
    title: "CRS: Research",
    location: "WCH 127",
    type: "Career",
    start: new Date(2022, 10, 24, 16, 0, 0),
    end: new Date(2022, 10, 24, 18, 0, 0),
    zoom: "",
    description:
      "Learn about various research positions and why research is so important",
  },
  {
    title: "DSS: Intro to Python",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 0, 17, 16, 0, 0),
    end: new Date(2023, 0, 17, 17, 0, 0),
    zoom: "",
    description:
      "Join us alongside other CS/DS/STAT students to learn how to use Python, the main data science and ML programming language.",
  },
  {
    title: "Pathways in CS Panel",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2023, 0, 18, 17, 0, 0),
    end: new Date(2023, 0, 18, 18, 0, 0),
    zoom: "https://ucr.zoom.us/my/d6485433235?pwd=T01GeDduVEtEZG1vTWdaNkp0ek5XQT09",
    description:
      "Learn about the various pathways in CS from industry panelists serving as SWEs, DevOps Engineers, or Data Scientists; and discover which CS career path is right for you!",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 0, 20, 16, 0, 0),
    end: new Date(2023, 0, 20, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Data Cleaning",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 0, 23, 17, 0, 0),
    end: new Date(2023, 0, 23, 18, 0, 0),
    zoom: "",
    description:
      "Learn how to do basic data cleaning and data manipulation in Python, using tools such as NumPy and Pandas.",
  },
  {
    title: "DBS: Golang",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 0, 24, 17, 0, 0),
    end: new Date(2023, 0, 24, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us for this first student-led Discord Bot workshop, where we will go over the rising language of Go and its significance through development of Discord Bots.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 0, 27, 16, 0, 0),
    end: new Date(2023, 0, 27, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Data Manipulation",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 0, 30, 17, 0, 0),
    end: new Date(2023, 0, 30, 18, 0, 0),
    zoom: "",
    description:
      "Go in-depth with more advanced data cleaning and data manipulation and use these practices on a different dataset.",
  },
  {
    title: "DBS: Creating DB",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 0, 31, 17, 0, 0),
    end: new Date(2023, 0, 31, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us in learning how to start up a Discord Bot application and connect it through a simple Golang script with handlers and simple input/output commands.",
  },
  {
    title: "Social Impact Tech",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2023, 1, 1, 17, 0, 0),
    end: new Date(2023, 1, 1, 18, 0, 0),
    zoom: "",
    description:
      "Discover how to create social good and sustainability using the latest modern technology, as we sit down and talk to an industry professional about careers in social impact tech.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 1, 3, 16, 0, 0),
    end: new Date(2023, 1, 3, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Data Visualization",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 6, 17, 0, 0),
    end: new Date(2023, 1, 6, 18, 0, 0),
    zoom: "",
    description:
      "Join us for our 4th DS workshop, as we learn how to create data visualizations and dashboards from cleaned datasets, including how to present data plots to your audience.",
  },
  {
    title: "DBS: Embed Cmds",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 7, 17, 0, 0),
    end: new Date(2023, 1, 7, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us in learning how to add embed commands to our Golang Discord Bot and organize all of our commands.",
  },
  {
    title: "Privacy by DataBanc",
    location: "Virtual",
    type: "Workshops",
    start: new Date(2023, 1, 9, 16, 0, 0),
    end: new Date(2023, 1, 9, 17, 0, 0),
    zoom: "https://us06web.zoom.us/j/87964610935?pwd=YXJtdS83Z2NpVDE3aGtPU1JDQWg2Zz09",
    description:
      "DataBanc will lead a conversation about the basics of data privacy, the growing dialogue around privacy by design/technical privacy, and privacy regulations.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 1, 10, 16, 0, 0),
    end: new Date(2023, 1, 10, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Tableau Dashboards",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 13, 17, 0, 0),
    end: new Date(2023, 1, 13, 18, 0, 0),
    zoom: "",
    description:
      "Join us for our 5th data science workshop, as we learn how to effectively design, build, and publish interactive dashboards in Tableau.",
  },
  {
    title: "DBS: Mini Game Cmd",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 14, 17, 0, 0),
    end: new Date(2023, 1, 14, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us in developing a mini game command in our Golang Discord Bot by utilizing more of Golang’s standard libraries.",
  },
  {
    title: "ACM Officer Elections",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2023, 1, 15, 17, 0, 0),
    end: new Date(2023, 1, 15, 18, 0, 0),
    zoom: "",
    description:
      "Join us for the upcoming ACM Officer Elections! Come out to hear and vote for your next ACM board!",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 1, 17, 16, 0, 0),
    end: new Date(2023, 1, 17, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DBS: Voice Channel Cmd",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 21, 17, 0, 0),
    end: new Date(2023, 1, 21, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us in learning how to add a voice channel command that could open up the potential for more complex projects like music bots.",
  },
  {
    title: "DSS: Machine Learning",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 22, 17, 0, 0),
    end: new Date(2023, 1, 22, 18, 0, 0),
    zoom: "",
    description:
      "Join us for our 6th data science workshop, as we learn how to use basic machine learning algorithms to create insights from the dataset, using Python ML library Scikit-Learn.",
  },
  {
    title: "Roblox in Metaverse",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 22, 16, 0, 0),
    end: new Date(2023, 1, 22, 17, 0, 0),
    zoom: "",
    description:
      "Join us as Raymond showcases videogame development in Metaverse through Roblox, what the platform has to offer to programmers, artists, and everyone in between who may be interested in game development; as an alternative to Unity, Unreal Engine, and Godot.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 1, 24, 16, 0, 0),
    end: new Date(2023, 1, 24, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Interview Insight w/ Nick Singh",
    location: "WCH 205/6",
    type: "Workshops",
    start: new Date(2023, 1, 27, 17, 0, 0),
    end: new Date(2023, 1, 27, 18, 0, 0),
    zoom: "",
    description:
      "Come to our 7th workshop and join Nick Singh, author of the best-selling book Ace the Data Science Interview, and founder of SQL interview platform DataLemur, and learn tips on how to solve SQL, Statistics, ML, and Data Case interview questions asked by FAANG + Wall Street.",
  },
  {
    title: "DBS: Database w/Bots",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 1, 28, 17, 0, 0),
    end: new Date(2023, 1, 28, 19, 0, 0),
    zoom: "",
    description:
      "Discord Bot Series: Join us in understanding databases, the CRUD abilities, and how they can be integrated with discord bots in Golang.",
  },
  {
    title: "Hardware Importance",
    location: "WCH 205/6",
    type: "Meetings",
    start: new Date(2023, 2, 1, 17, 0, 0),
    end: new Date(2023, 2, 1, 18, 0, 0),
    zoom: "",
    description:
      "Learn about why it's important to understand hardware from a software engineering perspective, as we talk to industry panelists about the emphasis of hardware in CS.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 2, 3, 16, 0, 0),
    end: new Date(2023, 2, 3, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
  {
    title: "DSS: Project Building",
    location: "WCH 127",
    type: "Workshops",
    start: new Date(2023, 2, 6, 17, 0, 0),
    end: new Date(2023, 2, 6, 18, 0, 0),
    zoom: "",
    description:
      "Come to our last workshop as we'll be giving tips and advice on data science projects that you could potentially look on. We'll also be sharing our DS projects that we've done previously.",
  },
  {
    title: "Food and Mingle!",
    location: "WCH 127",
    type: "Socials",
    start: new Date(2023, 2, 10, 16, 0, 0),
    end: new Date(2023, 2, 10, 17, 0, 0),
    zoom: "",
    description:
      "Come to the clubroom to hang out with fellow club members and have lunch!",
  },
];

Events.forEach((event) => {
  event.color = filters[event.type].color;
  event.textColor = filters[event.type].textColor;
  event.shadow = filters[event.type].shadow;
  event.border = filters[event.type].border;
});

export default Events;
