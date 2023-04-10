import {
  jquery,
  sass,
  Firebase,
  meta,
  starbucks,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "dev",
    title: "About", 
  },
  {
    id: "education",
    title: "Education & Skills",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon:'',
  },
  {
    title: "React Native Developer",
    icon: '',
  },
  {
    title: "Backend Developer",
    icon: 'backend',
  },
  {
    title: "Content Creator",
    icon: '',
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: 'https://i.ibb.co/3vw6Rvb/html.png',
    color:"#DD4B25",
  },
  {
    name: "CSS 3",
    icon: 'https://i.ibb.co/rkWRLPy/css.png',
    color:"#0068BA",
  },
  {
    name: "JavaScript",
    icon: "https://i.ibb.co/w6CDt8R/javascript.png",
    color:"#E8D44D",
  },
  
  {
    name: "React JS",
    icon: "https://i.ibb.co/khWxkkH/reactjs.png",
    color:"#5AD2F3",
  },
  {
    name: "Redux Toolkit",
    icon: "https://i.ibb.co/JrvnT68/redux.png",
    color:"#7349B6",
  },
  {
    name: "Tailwind CSS",
    icon: "https://i.ibb.co/WczkVyB/tailwind.png",
    color:"#15B8C5",
  },
  {
    name: "Node JS",
    icon: "https://i.ibb.co/9Wpprj3/nodejs.png",
    color:"#52A042",
  },
  {
    name: "MongoDB",
    icon: "https://i.ibb.co/kQQtFn5/mongodb.png",
    color:"#50AE3F"
  },
  {
    name: "Firebase",
    icon: Firebase,
    color:"#F7C62F",
  },
  {
    name: "git",
    icon: "https://i.ibb.co/MZjZ0Wh/git.png",
    color:"#E84E31"
  },
  {
    name: "Material Ui",
    icon: "https://i.ibb.co/3Ss4F6b/Mui.png",
    color:"#3B7CEF"
  },
  {
    name: "NPM",
    icon: "https://i.ibb.co/59YD9P9/NPM.png",
    color:"#EBABAD"
  },
  {
    name: "Sass",
    icon: sass,
    color:"#BE608B"
  },
  {
    name:"Jquery",
    icon:jquery,
    color:"#1266A9"
  }
];

const experiences = [
  {
    title: "SS Goverment PG College Tigaon",
    company_name: "Maharshi Dyanand University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020- Present",
    points: [
      "Currently, I am pursuing my Bachelor's degree from Maharshi Dayanand University (MDU), where I am gaining a deeper understanding of my chosen field of study and honing my analytical and critical thinking abilities."
    ],
  },
  
  {
    title: "Arya Vidya Mandir Sr. Sec School",
    company_name: "CBSE",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2018 - May 2020",
    points: [
      "My academic journey continued with the Central Board of Secondary Education (CBSE), where I successfully completed my senior secondary education with Achieved 73% in Commerce, gaining invaluable knowledge and skills that have stayed with me to this day.",
      "I believe that my academic achievements have prepared me well for the challenges that lie ahead, and have equipped me with the skills and knowledge necessary to pursue my passions and make a positive impact on the world."

    ],
  },
  {
    title: "Adarsh Shiksha Niketan High School",
    company_name: "HBSE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2018 ",
    points: [
      "I am proud to have completed my secondary education with  83% from the Haryana Board of Secondary Education (HBSE), which equipped me with a strong foundation for further studies.",
      "I am a driven and dedicated individual who is passionate about lifelong learning and personal growth. My education has provided me with a strong foundation for success and has instilled in me a deep appreciation for the power of knowledge.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DevMart |",
    description:
      "Web Application that allows users to browse products, add items to their cart and provide User authentication and authorization using Firebase Authentication with Responsive design for desktop and mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/25wq7TZ/devmart.png",
    source_code_link: "https://github.com/dev0869/Ecommerce",
    live_code_link: "https://devmarts.netlify.app/",

  },
  {
    name: "PixelDev |",
    description:
      "An AI-powered image generator using the Dall-E API that generates high-quality, photorealistic images for various applications that allows user to Generate Image and share that in Community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/JrnLCGp/pixeldev.png",
    source_code_link: "https://github.com/dev0869/pixeldev2",
    live_code_link: "https://pixeldev1.netlify.app/",
  },
  {
    name: "DevTalk",
    description:
      " A private chat application that allows users to communicate securely and privately with each other and with a user-friendly interface and utilized responsive web design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/3mxDtjS/devtallk2.png",
    source_code_link: "https://github.com/dev0869/RealTimeChat-Application",
    live_code_link: "https://devtalllk.netlify.app/login",
  },
  {
    name: "Codepen 2.0 |",
    description:
      "Designed an online code editor that allows users to write and run code in HTML, CSS, and JavaScript with a user-friendly interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/n7HFcyq/codepen.png",
    source_code_link: "https://github.com/dev0869/CodeDev...",
    live_code_link: "https://codedeve.netlify.app/",
  },
  {
    name: "Cryptoverse |",
    description:
      " A crypto tracker application that allows users to follow real-time prices, trends, and news of various cryptocurrencies such as Bitcoin , Etherium and much more !",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/41hDPMx/crypto.png",
    source_code_link: "https://github.com/dev0869/crrypto",
    live_code_link: "https://cryptoverrse.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
