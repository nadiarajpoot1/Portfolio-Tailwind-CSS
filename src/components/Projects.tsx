import React from 'react';
import Heading from "./Heading";
import Card from "./Card";

const data=[
    {
        id:0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time",
        img: "/project-4.jpg",
        tags: ["Node.js","Node","CSS","Typescript"],
    },
    {
        id:1,
        title: "Static Interactive Resume Builder",
        desc: "A Typescript based Interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/project-3.jpg",
        tags: ["HTML", "Node","CSS","Typescript"],
    },
    {
        id:2,
        title: "Editable Resume Builder",
        desc: "A Typescript based Editable Resume Builder with HTML and CSS",
        img: "/project-02.jpg",
        tags: ["HTML", "Node","CSS","Typescript"],
    },
    {
        id:3,
        title: "Website with Custom CSS",
        desc: " A Next.js and CSS website powered website to track time",
        img: "/project-5.jpg",
        tags: ["HTML","CSS","Next.js"]
    },
];

const Projects = () => {
    return (
        <div id='projects' className='container pt-32'>
            <Heading title='My Projects'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
                {data.map((el) =>(<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>
        </div>
    );
};

export default Projects;
