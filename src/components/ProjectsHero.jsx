import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsHero = () => {
  return (
    <>
          <div className="md:w-[90%] mx-auto py-10 px-4 md:p-10 items-center md:flex-wrap w-[95%] flex flex-col md:flex-row md:gap-3 gap-4 justify-center md:items-center md:justify-center hero">
              <h1 className="text-center text-4xl font-['Charley'] text-white md:hidden">Projects</h1>
        <ProjectCard
          projectPara="This is a react components library build to provide free reuseable buttons."
          pImg="https://www.smartsight.in/wp-content/uploads/2022/01/Best-Mobile-App-UI-UX-Design-Trends-in-2022.jpg"
          projectNo={1}
        />
        <ProjectCard
          projectPara="This a Fullstack Social Media Clone Applictaion buit as a clone of Twitter."
          pImg="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/jxqb6ghqrv79rllm1uop/do-ui-and-ux-designing-of-your-application.png"
          projectNo={2}
        />
        <ProjectCard
          projectPara="This is a Portfolio website built with modren animations and styling."
          pImg="https://media.licdn.com/dms/image/D5612AQEleUdlkXCu9g/article-cover_image-shrink_720_1280/0/1701446787595?e=2147483647&v=beta&t=rv576tiIxeX58HIoxt-tliZ78HWcZrt1PUYWvMcRyGY"
          projectNo={3}
        />
        <ProjectCard
          projectPara="This is a Wallpaper Designer Application that takes data and generates wallpapers."
          pImg="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/beauty-app-1024x768.png"
          projectNo={4}
        />
      </div>
    </>
  );
};

export default ProjectsHero;
