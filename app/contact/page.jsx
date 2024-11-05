"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";
import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+375-33-610-39-69"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "25ekatemars08@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: "Address",
        description: "Minsk, Belarus"
    },
]

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla nibh vitae
                                mauris viverra convallis.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Input type="firstname" placeholder="First Name"
                                       className="focus:border-accent border-2"/>
                                <Input type="lastname" placeholder="Last Name"/>
                                <Input type="email" placeholder="Email address"/>
                                <Input type="phone" placeholder="Phone Number"/>
                            </div>
                            <Textarea className="h-[200px]"
                                      placeholder="Type your message here..."
                            />
                            <Button size="md" className="max-w-40 text-white/90">Send message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end
                    order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent
                                         rounded-[8px] flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;