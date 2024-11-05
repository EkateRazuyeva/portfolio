import Link from "next/link";

import {FaGithub, FaLinkedin, FaTelegram, FaCode} from "react-icons/fa";


const socials = [
    {icon: <FaGithub className="text-3xl"/>, path: ""},
    {icon: <FaLinkedin className="text-3xl"/>, path: ""},
    {icon: <FaTelegram className="text-3xl"/>, path: ""},
    {icon: <FaCode className="text-3xl"/>, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}> {
            socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })
        }</div>
    )
}

export default Social;