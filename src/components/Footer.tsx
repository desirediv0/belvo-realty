"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"

interface FooterLink {
    label: string
    href: string
}

interface FooterSection {
    title: string
    links: FooterLink[]
}



const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}



const Footer: React.FC = () => {
    // Only keep real pages that are present in the navbar
    const footerSections: FooterSection[] = [
        {
            title: "QUICK LINKS",
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1GfX6dEyVc", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/belvorealty", label: "Instagram" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/belvorealty", label: "LinkedIn" },
    ]

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-black via-black to-black" />
                <div className="absolute inset-0 bg-[url('/modern-architectural-glass-structure-geometric-pat.jpg')] bg-cover bg-center opacity-40" />
            </div>

            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
            >


                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">


                            {/* Contact Info (kept real) */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-lg font-semibold mb-6 text-[#AA8453] relative">CONTACT
                                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#AA8453] to-black" />
                                </h3>
                                <div className="space-y-3 text-sm text-gray-200">
                                    <div>649, Satya The Hive, Sector 102, Gurugram, Haryana- 122505</div>
                                    <div><a href="tel:+919090939193" className="hover:text-[#AA8453]">+91 9090 939193</a></div>
                                    <div><a href="mailto:hello@belvorealty.com" className="hover:text-[#AA8453]">hello@belvorealty.com</a></div>
                                </div>
                            </motion.div>

                            {/* Pages */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-lg font-semibold mb-6 text-[#AA8453] relative">{footerSections[0].title}
                                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#AA8453] to-black" />
                                </h3>
                                <ul className="space-y-3">
                                    {footerSections[0].links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className="text-gray-200 hover:text-[#AA8453] transition-colors duration-200 text-sm leading-relaxed">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Social */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-lg font-semibold mb-6 text-[#AA8453] relative">FOLLOW US
                                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#AA8453] to-black" />
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            whileHover={{ scale: 1.05 }}
                                            target="_black"
                                            className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-[#AA8453] transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-4 h-4 text-white" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Information */}

                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div variants={itemVariants} className="border-t border-black/50 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-200">
                                Copyright © 2025 <span className="text-[#AA8453]">Belvo Realty</span> All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </footer >
    )
}

export default Footer
