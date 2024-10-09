import {
    algorithms,
    devnotes,
    oscs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Hero",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Python Full stack Intern",
      company_name: "Scholar Logic , Btm Layout Banglore",
      date: "April-2024-present",
      details: [
        "During my Python full-stack internship at <span style='color: white;'>ScholarLogic</span> in 2024, I gained hands-on experience in developing full-stack web applications using  <span style='color: white;'> Python, Django for the backend, and React for the frontend</span>",
        " I worked on various projects that involved building <span style='color: white;'>REST APIs, integrating databases</span>, and ensuring responsive user interfaces.",
        "This experience allowed me to enhance my skills in both frontend and backend development while collaborating with cross-functional teams to deliver scalable and efficient web solutions.",
      ],
    },
    {
      title: "B.tech",
      company_name: "Synergy institute of technology Bbsr",
      date: "2021-2024",
      details: [
        "I earned my Bachelor of Technology (B.Tech) in Electrical Engineering from <span style='color: white;'>Synergy Institute of technology in 2024 </span>, where I developed a strong foundation in electrical principles and applications.",
        "My academic journey encompassed critical areas such as <span style='color: white;'> power systems, control systems, and electronic and embedded systems,</span>  enhancing my understanding of modern electrical engineering challenges",
        "Through hands-on projects, internships, and collaborative research, I gained practical experience that honed my technical skills and prepared me for a successful career in the field.",
      ],
    },
    {
      title: "Diploma",
      company_name: "Synergy Polytechnic Bhubaneswar",
      date: "2018-2021",
      details: [
        "I completed my diploma in Electrical Engineering from Synergy PolyTechnic Bbsr in 2021, where I acquired a comprehensive understanding of electrical systems and technologies",
        "My coursework included essential subjects such as <span style='color: white;'> circuit analysis, electronics, and power systems </span>, which equipped me with both theoretical knowledge and practical skills",
        "Throughout my studies, I participated in various projects and internships",
      ],
    },
    {
      title: "Matriculation",
      company_name: "Board Of Secondary Education, Odisha",
      date: "2017-2018",
      details: [
        "I completed my matriculation at G.P HighSchool in 2018, where I gained a solid foundation in <span style='color: white;'> Mathematics, Science, English</span>",
        "During my time at school, I actively participated in extracurricular activities, which helped me develop valuable skills such as <span style='color: white;'> teamwork, leadership, and time management</span>.",
        
      ],
    },
  ];
  
  const portfolio = [
    {
      name: " GitHub ",
      description:
        `Explore my <a style="color: #FFCC00; text-decoration: none; font-weight: bolder; cursor: pointer;" href="https://github.com/Anilnayak126" target="_blank" rel="noopener noreferrer">GitHub</a>
 profile to see a collection of my full-stack projects. I specialize in building modern web applications using technologies like React, Django, Django Rest Framework, and Tailwind CSS. My repositories showcase projects ranging from CRUD applications to complex LMS, CRM, and YouTube clone apps. I've also worked on a web scraping application using Python 
 and libraries like Beautiful Soup and Selenium.`,
      image: oscs,
    },
    {
      name: "Skills",
      description:
        `Full-stack developer skilled in React, Tailwind CSS, and Redux for building responsive UIs, with strong backend expertise in Django, Python APIs, MySQL, MongoDB, and Node.js for creating robust, scalable applications ,
        As part of my continuous journey in web development, my <a style="color: #FFCC00; text-decoration: none; font-weight: bolder; cursor: pointer;" href="https://github.com/Anilnayak126" target="_blank" rel="noopener noreferrer">previous Portfolio</a> showcases some of my earlier projects where I honed my skills in full-stack development .`,
      image: devnotes,
    },
    {
      name: "Data Structures Algorithms",
      description:
      
        `I actively enhance my problem-solving and coding skills on <a style="color: #FFCC00; text-decoration: none; font-weight: bolder; cursor: pointer;" href="https://www.hackerrank.com/profile/nayakanil43603" target="_blank" rel="noopener noreferrer">HackerRank</a> , where I solve challenges in Python, JavaScript, and data structures. My profile showcases a range of projects, solutions, and coding achievements that demonstrate my expertise in full-stack development and algorithmic problem-solving."`,
      image: algorithms,
    },
  ];
  
  export { experiences, portfolio };
  