import imgProjectRouteVisualizer from "./assets/data-supplements/projects/route-visualizer-for-lemlib-vex-robotics.png";
import imgProjectSmartclicks from "./assets/data-supplements/projects/smartclicks.png";

const staticData = {
    bannerTitle: "Akshat\u00A0S",
    // bannerDescription: "Computer Engineering student at Georgia Tech. Electronics, robotics, and programming enthusiast."
    bannerDescription:
`Hi! I'm a Computer Engineering student at Georgia Tech, \
and I'm enthusiastic about programming, electronics, and robotics. \
On the side, I enjoy 3D printing, music production, photography, and 3D graphics.`,

    sections: {
        projects: {
            description: "Big and small projects I've made. Click to learn more.",
            projectList1: [
                {
                    title: "3D Rendering Engine from Scratch",
                    subtitle: "2025, personal project",
                    description: "Used C++ and linear algebra to implement meshes, linear transformations, rasterization, custom math library (vectors, matrices), camera system, and lighting, to render 3D geometry.",
                    image: "https://github.com/the-akze/rendering_engine_3d_from_scratch/raw/refs/heads/main/demo/demo.png",
                    url: "https://github.com/the-akze/rendering_engine_3d_from_scratch"
                },
                {
                    title: "Route Visualizer for LemLib",
                    subtitle: "2024-2025, VEX Robotics",
                    description: "Developed interactive web tool to visualize and animate VEX Robotics routes from LemLib C++ code by creating interpreter in JS, and HTML/CSS interface. Enabled the testing of 5x more autonomous route iterations per week and improved collaboration between code & mechanical subteams.",
                    image: imgProjectRouteVisualizer,
                    url: "https://the-akze.github.io/Route-Visualizer-for-LemLib/"
                },
                {
                    title: "SmartClicks",
                    subtitle: "CruzHacks 2024, 'Best Hardware Hack'",
                    description: "A hardware device and web app to personalize students' learning style by connecting with AI-powered automatic assignment creation website for teachers. I developed the web app (Python Flask, HTML/CSS/JS) and integrated it with the authentication, database, and hardware.",
                    image: imgProjectSmartclicks,
                    url: "https://devpost.com/software/smartclicks"
                },
                {
                    title: "title",
                    subtitle: "subtitle",
                    description: "desc",
                    image: "",
                    url: ""
                },
            ],
            projectList2: [
                {
                    title: "title",
                    subtitle: "subtitle",
                    description: "desc",
                    image: "",
                    url: ""
                }
            ]
        }
    }
};

export default staticData;