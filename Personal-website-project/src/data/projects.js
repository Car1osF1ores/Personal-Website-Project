import chatAppImg from "../assets/images/chat-app.png";
import equipmentDashboardImg from "../assets/images/equipment-dashboard.png";
import natureImg from "../assets/images/nature.jpg";
import carRentalImg from "../assets/images/car-rental.png";
import treeForestImg from "../assets/images/treeForest.jpg";
import gtaDashboardImg from "../assets/images/gta-dashboard.png";

const projects = [
  {
    id: 1,
    title: "Microservices E-Commerce Platform",
    description:
      "Developed an e-commerce application using a microservices architecture with Spring Boot and Netflix Eureka, applying modern API design principles, service discovery, caching, and scalable microservices patterns.",
    framework: "Spring Boot",
    tech: [
      "Java",
      "Spring Boot",
      "Netflix Eureka",
      "REST APIs",
      "Microservices",
      "Caching",
    ],
    image: "",
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Task Collaboration App",
    description:
      "Built a fully functional backend API and contributed to frontend development. Implemented real-time notifications using SignalR and applied clean architecture and design patterns for scalability.",
    framework: "ASP.NET",
    tech: [
      "C#",
      "ASP.NET Core",
      "SignalR",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "GitHub",
    ],
    image: chatAppImg,
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Equipment Rental Web Application",
    description:
      "Developed a rental platform with OAuth 2.0 authentication, layered backend architecture, and secure API access. Deployed backend services on a remote server.",
    framework: "ASP.NET MVC",
    tech: [
      "C#",
      "ASP.NET MVC",
      "OAuth 2.0",
      "HTML",
      "CSS",
      "Bootstrap",
      "GitHub",
    ],
    image: equipmentDashboardImg,
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Meditation Mobile App",
    description:
      "Implemented core features including sound playback and habit tracking using Flutter. Integrated Firebase and SQLite for local and remote data synchronization.",
    framework: "Flutter",
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "GitHub"],
    image: natureImg,
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Car Rental Android App",
    description:
      "Developed the Car Screen feature and contributed to UX design. Applied design patterns such as Singleton, Factory, and Observer using Jetpack Compose.",
    framework: "Android",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "SQLite", "Android Studio"],
    image: carRentalImg,
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Small Demo Applications",
    description:
      "Built multiple small demo applications across web and mobile platforms, including news apps using APIs and calculator apps in multiple programming languages.",
    framework: "Multi-Platform",
    tech: ["React", "Java", "C#", "Kotlin", "Flutter", "REST APIs"],
    image: treeForestImg,
    github: "",
    demo: "",
  },
  {
    id: 7,
    title: "Chat Demo Application",
    description:
      "Built a chat demo application across web demonstrating real-time messaging and user authentication features using various technologies.",
    framework: "ASP.NET",
    tech: ["C#", "REST APIs", "SignalR", "Bootstrap", "HTML", "CSS"],
    image: chatAppImg,
    github: "",
    demo: "",
  },
  {
    id: 8,
    title: "GTA 6 HTML Static Site",
    description:
      "Built a static HTML site showcasing GTA 6 Demo, utilizing Bootstrap for responsive design and CSS for styling to create an engaging user experience.",
    framework: "Static Web",
    tech: ["HTML", "CSS"],
    image: gtaDashboardImg,
    github: "",
    demo: "",
  },
];

export default projects;
