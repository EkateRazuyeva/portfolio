"use client"

import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        title: 'Конвертер валюты',
        description: '— это веб-приложение, предназначенное для простого и удобного обмена одной валюты на другую. Пользователи могут легко вводить сумму, выбирать исходную и целевую валюту, и мгновенно получать результаты обмена. Приложение использует актуальные данные о курсах валют, чтобы обеспечить надежные и точные конверсии.',
        stack: [{name: "HTML"}, {name: "Javascript"}, {name: "SCSS"}],
        image: '/assets/work/converter.png',
        live: 'https://ekaterazuyeva.github.io/currency-converter/',
        github: 'https://github.com/EkateRazuyeva/currency-converter',
    },
    {
        num: '02',
        title: 'ToDo List',
        description: '— это удобное веб-приложение, которое помогает пользователям управлять своими задачами и делами. С помощью этого инструмента пользователи могут легко добавлять, редактировать и удалять задачи, а также отмечать их как выполненные. Приложение ориентировано на повышение продуктивности и упрощение планирования повседневных задач.',
        stack: [{name: "HTML"}, {name: "Css"}, {name: "TypeScript"}, {name: "React"}, {name: "Material UI"}, {name: "Redux ToolKit"}],
        image: '/assets/work/thumb1.png',
        live: '',
        github: 'https://github.com/EkateRazuyeva/todoList',
    },
    {
        num: '03',
        title: 'Онлайн-магазин кроссовок',
        description: '— это удобная веб-платформа, позволяющая пользователям просматривать, выбирать и приобретать широкий ассортимент кроссовок для различных стилей и потребностей. Сайт предлагает пользователь-friendly интерфейс, который делает процесс покупки простым и приятным.',
        stack: [{name: "HTML"}, {name: "SCSS"}, {name: "React"}, {name: "Javascript"}],
        image: '/assets/work/sneackers.png',
        live: 'https://ekaterazuyeva.github.io/react-sneakes/',
        github: 'https://github.com/EkateRazuyeva/react-sneakes',
    },
    {
        num: '04',
        title: 'Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Mauris fringilla nibh vitae mauris viverra convallis.',
        stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
        image: '/assets/work/thumb1.png',
        live: '',
        github: 'https://github.com/EkateRazuyeva/portfolio',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])

    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                            transition-all duration-500">
                                {project.title}
                            </h2>
                            <p className="w-full text-white/60 text-justify">{project.description}</p>
                            <ul className="flex flex-wrap gap-2 ">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>

                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight
                                                    className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-4xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center
                                       items-center bg-pink-50/20 ">
                                            <div
                                                className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image}
                                                       alt=""
                                                       fill
                                                       className="w-1/2 p-1"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[24px] w-[44px]
                                 h-[44px] flex justify-center items-center transition-all rounded-xl"
                                iconsStyles="text-white"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;