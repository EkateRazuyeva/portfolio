import Link from 'next/link';
import Nav from "./Nav";
import {Button} from "./ui/button";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className={"py-8 xl:py-6 text-white"}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className={"text-4xl font-semibold"}>
                        Катя<span className={"text-accent font-bold"}>.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button className="text-white/90">Связаться</Button>
                    </Link>
                </div>


                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header;