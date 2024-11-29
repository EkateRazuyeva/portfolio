"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaSass} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiStorybook, SiTypescript, SiRadixui, SiRedux} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const about = {
    title: "Обо мне",
    description: "Я — начинающая разработчица, прошла обучение в IT-incubator, где изучала основы программирования и веб-разработки. Мой путь в IT начался с того, что я захотела работать в сфере, где всегда есть новые вызовы и возможности для роста. До этого я работала в государственной энергетической отрасли, где научилась высокой ответственности и умению работать в условиях многозадачности. Однако со временем я почувствовала, что мне не хватает динамики и развития. Я решила перейти в IT, чтобы постоянно учиться и развиваться. Сейчас создаю небольшие проекты и радуюсь каждому новому шагу в своей трансформации. Ищу первую работу в IT, где смогу применить свои знания, работать в команде и расти профессионально.",
    info: [
        {
            fieldName: "Имя",
            fieldValue: "Екатерина"
        },
        {
            fieldName: "Фамилия",
            fieldValue: "Разуева"
        },
        {
            fieldName: "Телефон",
            fieldValue: "+375-33-610-39-69"
        },
        {
            fieldName: "Опыт",
            fieldValue: "0+"
        },
        {
            fieldName: "Языки",
            fieldValue: "English (B1), Spanish (C1) "
        },
        {
            fieldName: "Почта",
            fieldValue: "25ekatemars08@gmail.com"
        },

    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Моё образование',
    description: "Образование — это основа для профессионального роста, и я всегда стремлюсь развивать свои навыки в области веб-разработки. Я прошла обучение в нескольких учебных заведениях и программах, которые помогли мне освоить необходимые для Front-End разработки технологии.",
    items: [
        {
            institution: "БНТУ",
            degree: "инженер-экономист (энергетика)",
            duration: "2015-2020"
        },
        {
            institution: "IT-Academy",
            degree: "Разработка веб-сайтов (HTML, CSS и JS)",
            duration: "2022"
        },
        {
            institution: "IT_INCUBATOR",
            degree: "Обучение Frontend-разработке",
            duration: "2023 - present"
        },


    ]
}

const skills = {
    title: "Мои навыки",
    description: "Я активно развиваю свои навыки в области Front-End разработки, постоянно осваиваю новые подходы и методы, чтобы создавать чистый, функциональный и удобный код, который будет отвечать современным требованиям веб-разработки.",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "CSS 3",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs/>,
            name: "node.js",
        },
        {
            icon: <SiTypescript/>,
            name: "Typescript",
        },
        {
            icon: <SiStorybook/>,
            name: "Storybook",
        },

        {
            icon: <SiRadixui/>,
            name: "Radixui",
        },
        {
            icon: <FaSass/>,
            name: "Sass",
        },
        {
            icon: <SiRedux/>,
            name: "Redux, Redux toolkit, RTK query",
        },
    ]
}


const Resume = () => {
    return <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >

        <div className="container mx-auto">
            <Tabs defaultValue="education"
                  className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="education">Образование</TabsTrigger>
                    <TabsTrigger value="skills">Навыки</TabsTrigger>
                    <TabsTrigger value="about">Обо мне</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="w-full max-w-[680px] text-white/60 mx-auto xl:mx-0 text-justify">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                                                justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-[18px] text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="w-full max-w-[680px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    {skills.description}
                                </p>
                            </div>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                                rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent
                                                    transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="w-full max-w-[680px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60 w-[100px]">{item.fieldName}</span>
                                            <span className="text-xl w-[300px]">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
}

export default Resume;