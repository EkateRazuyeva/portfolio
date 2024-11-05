import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none mt-6">
                        <span className="text-center xl:text-left">Front-End Developer</span>
                        <h1 className={"h1 mb-6"}>
                            Hello I&#39;m <br/><span className="text-accent">Ekaterina Razuyeva</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I have a knack for creating user-friendly digital interfaces and I am familiar with various
                            programming languages and technologies in frontend development.
                        </p>
                        <div className="flex flex-col xl:items-start items-center gap-8">
                            <Button variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-8"
                            >
                                <span className="text-[17px]"> Download CV</span>
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
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>


            </div>
        </section>
    )
}
