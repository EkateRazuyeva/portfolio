import Link from "next/link";

import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";


const socials = [
    {icon: <FaGithub className="text-3xl"/>, path: "https://github.com/EkateRazuyeva"},
    {icon: <FaLinkedin className="text-3xl"/>, path: "https://www.linkedin.com/in/ekaterina-razuyeva-978915318/"},
    {icon: <FaTelegram className="text-3xl"/>, path: "https://t.me/ekate_25"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}> {
            socials.map((item, index) => {
                return (
                    <Link target="_blank" rel="noopener noreferrer" key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })
        }</div>
    )
}

export default Social;