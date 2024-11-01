import Link from "next/link";

import {FaGithub, FaLinkedin, FaTelegram, FaCode} from "react-icons/fa";


const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedin/>, path: ""},
    {icon: <FaTelegram/>, path: ""},
    {icon: <FaCode/>, path: ""},
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