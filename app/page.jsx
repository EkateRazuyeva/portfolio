import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4 xl:pt-2">
                    <div className="text-center xl:text-left order-2 xl:order-none mt-6">
                        <span className="text-center xl:text-left">Front-End Developer</span>
                        <h1 className={"h1 mb-6"}>
                            Привет! Я <br/><span className="text-accent">Разуева Екатерина</span>
                        </h1>
                        <p className="w-full max-w-[490px] mb-9 text-white/80 text-justify">
                            Мой путь в IT только начинается, и я ищу возможности, чтобы работать в команде
                            и расти профессионально. Меня вдохновляет создание удобных, красивых и функциональных
                            интерфейсов, и я уверена, что смогу внести свой вклад в интересные проекты.
                        </p>
                        <div className="flex flex-col xl:items-start items-center gap-8">
                            <Button variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-8"
                            >
                                <span className="text-[17px]"> Скачать CV</span>
                                <FiDownload className="text-2xl"/>
                            </Button>
                            <div className="mb-8 xl-mb-8 ">
                                <Social containerStyles="flex gap-10"
                                        iconStyles="w-14 h-14  border border-accent rounded-full
                                        flex justify-center items-center text-accent text-base
                                        hover:bg-accent hover:text-primary
                                        hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-2">
                        <Photo/>
                    </div>
                </div>


            </div>
        </section>
    )
}
