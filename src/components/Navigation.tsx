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
    IconMenuDeep,
    IconHome,
    IconInfoCircle,
    IconBuildingSkyscraper,
    IconPhone,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";


const menuItems = [
    { name: "Home", link: "/", icon: IconHome },
    { name: "About Us", link: "/about", icon: IconInfoCircle },
    { name: "Projects", link: "/projects", icon: IconBuildingSkyscraper },
    { name: "Contact", link: "/contact", icon: IconPhone },
];

const contactNumber = () => {
    window.location.href = "tel:+919090939193";
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


    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, x: -80 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        },
    };


    const menuBtnVariants = {
        initial: { y: -40, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        normal: {},
    };

    return (
        <>

            <nav
                className={`px-6 transition-all duration-300 flex justify-between items-center border-b border-gray-900 bg-black/20 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 libreCaslonDisplay  ${scrolled ? "py-2 h-28" : "py-6 h-[7rem]"}`}
            >
                {/* Left side - Menu Button */}
                <div className="flex items-center">
                    <Sheet open={sheetOpen} onOpenChange={handleSheetOpen}>
                        <SheetTrigger asChild>
                            <motion.button
                                variants={firstOpen ? menuBtnVariants : menuBtnVariants.normal}
                                initial={firstOpen ? "initial" : false}
                                animate={firstOpen ? "animate" : false}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="transition-colors text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-0 bg-transparent"
                                aria-label="Open navigation menu"
                            >
                                <IconMenuDeep size={26} />
                            </motion.button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="bg-black/60 backdrop-blur-md border border-gray-800 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=closed]:duration-500 data-[state=open]:duration-500"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-2xl font-bold text-gray-200 mb-2">Belvo Realty</SheetTitle>
                                <SheetDescription>
                                    <motion.div
                                        className="flex flex-col gap-3 mt-4 items-end"
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
                                                    whileHover={{ x: 8, scale: 1.03, transition: { duration: 0.3 } }}
                                                    whileTap={{
                                                        scale: 0.98,
                                                        transition: { duration: 0.1 }
                                                    }}
                                                >
                                                    <Link
                                                        href={item.link}
                                                        className="flex w-full items-center gap-3 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 justify-end text-right"
                                                        aria-label={item.name}
                                                        onClick={() => setSheetOpen(false)}
                                                    >
                                                        <span className="text-white text-lg font-semibold">{item.name}</span>
                                                        <Icon size={24} className="text-white" />
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

                {/* Center - Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href={"/"} className="flex items-center gap-2">
                        <Image
                            src={"/logo.png"}
                            alt="Belvo Realty"
                            width={scrolled ? 100 : 90}
                            height={scrolled ? 100 : 90}
                            className="rounded-full transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* Right side - Phone Number */}
                <div className="flex items-center">
                    <motion.button
                        onClick={contactNumber}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-all duration-200 focus:outline-none rounded px-3 py-1"
                        aria-label="Call 9090939193"
                    >
                        <PhoneCall size={22} className="text-white" />
                        <span className="hidden sm:inline text-white text-base">9090 939193</span>
                    </motion.button>
                </div>
            </nav>
        </>
    );
};

export default Navigation;