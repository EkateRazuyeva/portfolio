"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import {useState} from "react";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Телефон",
        description: "+375-33-610-39-69"
    },
    {
        icon: <FaEnvelope/>,
        title: "Почта",
        description: "25ekatemars08@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: "Адрес",
        description: "Минск, Беларусь"
    },
]

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Отправка...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({name: "", email: "", message: "", lastName: "", phone: ""});
                setStatus("Сообщение успешно отправлено!");
            } else {
                setStatus("Ошибка при отправке сообщения.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Ошибка: не удалось отправить сообщение.");
        }
    };


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
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onClick={handleSubmit}>
                            <h3 className="text-4xl text-accent mb-4">Давайте работать вместе</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Input type="text"
                                       value={formData.name}
                                       onChange={handleChange}
                                       name={"name"} placeholder="Имя"/>
                                <Input type="text" name={"lastName"}
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       placeholder="Фамилия"/>
                                <Input type="email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       name={"email"} placeholder="Почта"/>
                                <Input type="phone" name={"phone"}
                                       value={formData.phone}
                                       onChange={handleChange}
                                       placeholder="Телефон"/>
                            </div>
                            <Textarea className="h-[200px]" name={"message"}
                                      value={formData.message}
                                      onChange={handleChange}
                                      placeholder="Здесь вы можете оставить сообщение..."
                            />
                            <Button size="md" className="max-w-40 text-white/90" type={"submit"}>Отправить</Button>
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
                {status && <p>{status}</p>}
            </div>
        </motion.section>
    )
}

export default Contact;