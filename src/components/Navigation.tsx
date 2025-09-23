"use client"
import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    IconDeviceLandlinePhone,
    IconMenuDeep,
    IconHome,
    IconInfoCircle,
    IconBuildingSkyscraper,
    IconCalendarEvent,
    IconAward,
    IconPhone,
    IconArticle
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";


const menuItems = [
    { name: "Home", link: "/", icon: IconHome },
    { name: "About Us", link: "/about", icon: IconInfoCircle },
    { name: "Projects", link: "/projects", icon: IconBuildingSkyscraper },
    { name: "News & Events", link: "/news-events", icon: IconCalendarEvent },
    { name: "Awards", link: "/awards", icon: IconAward },
    { name: "Contact", link: "/contact", icon: IconPhone },
    { name: "Blog", link: "/blog", icon: IconArticle },
];

const contactNumber = () => {
    window.location.href = "tel:123-456-7890";
};

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    const [sheetOpen, setSheetOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle first open for menu button animation
    const handleSheetOpen = (open: boolean) => {
        setSheetOpen(open);
        if (open && firstOpen) setFirstOpen(false);
    };

    // Animation variants for staggered menu
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.22,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, x: 60 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    // Menu button animation (from top on first open)
    const menuBtnVariants = {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        normal: {},
    };

    return (
        <nav
            className={`px-6 transition-all duration-300 flex justify-between items-center border-b border-gray-900 bg-black/20 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 ${scrolled ? "py-2 h-16" : "py-6 h-24"}`}
        >
            <Link href={"/"} className="flex items-center gap-2">
                {/* <Image src={logo} alt="Belvo Realty" width={100} height={100} /> */}
                <div className="font-serif text-2xl lg:text-3xl font-normal text-white">Belvo Realty</div>
            </Link>
            <div className="flex items-center gap-2 md:gap-6">
                <button
                    onClick={contactNumber}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors focus:outline-none  rounded px-3 py-1"
                    aria-label="Call 123-456-7890"
                >
                    <IconDeviceLandlinePhone size={22} className="text-white" />
                    <span className="hidden sm:inline text-white">123-456-7890</span>
                </button>

                <Sheet open={sheetOpen} onOpenChange={handleSheetOpen}>
                    <SheetTrigger asChild>
                        <motion.button
                            variants={firstOpen ? menuBtnVariants : menuBtnVariants.normal}
                            initial={firstOpen ? "initial" : false}
                            animate={firstOpen ? "animate" : false}
                            whileHover={{ scale: 1.1 }}
                            className="transition-colors text-white px-3 py-2 rounded-lg  focus:outline-none focus:ring-0  bg-transparent"
                            aria-label="Open navigation menu"
                        >
                            <IconMenuDeep size={26} />
                        </motion.button>
                    </SheetTrigger>
                    <SheetContent className="w-72 md:w-96 bg-black/60 backdrop-blur-md border border-gray-800 shadow-xl">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold text-gray-200 mb-2">Navigation</SheetTitle>
                            <SheetDescription>
                                <motion.div
                                    className="flex flex-col gap-3 mt-4"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {menuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.name}
                                                variants={itemVariants}
                                                whileHover={{ x: 8, scale: 1.08 }}
                                            >
                                                <Link
                                                    href={item.link}
                                                    className="flex items-center gap-3 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                                                    aria-label={item.name}
                                                >
                                                    <Icon size={24} className="text-white" />
                                                    <span className="text-white text-lg font-semibold">{item.name}</span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navigation;
