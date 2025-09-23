"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import HeroPage from "@/components/HeroPage"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeadText from "@/components/Head-text"

const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        const form = e.currentTarget
        const formData = new FormData(form)
        const name = String(formData.get("name") || "").trim()
        const email = String(formData.get("email") || "").trim()
        const message = String(formData.get("message") || "").trim()

        if (!name || !email || !message) {
            setError("Please fill name, email and message.")
            return
        }

        setStatus("sending")
        // simulate async submit
        try {
            await new Promise((res) => setTimeout(res, 1000))
            setStatus("sent")
            form.reset()
        } catch {
            setStatus("error")
            setError("Something went wrong. Please try again.")
        }
    }

    return (
        <main>
            <HeroPage
                heading={<span>Contact</span>}
                subtitle={<span>Get in touch with our sales and support teams — we&apos;d love to help you find the perfect property.</span>}

                breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
            />

            <section className="py-16 bg-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-black transform rotate-45 translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black transform rotate-12 -translate-x-48 translate-y-48"></div>
                </div>
                <div className="container mx-auto px-4">

                    <HeadText
                        heading="CONTACT US"
                        subheadingfirstline="GET IN TOUCH"
                        subheadingsecondline="WITH OUR TEAM"
                        description="We'd love to hear from you! Reach out with any questions or inquiries."
                    />

                    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
                        <motion.div variants={item} className="space-y-6">
                            <h2 className="text-3xl font-bold">Contact Sales & Support</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Reach our experienced sales advisors or drop a message and we will get back to you within one business day.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-6 border rounded-lg">
                                    <h4 className="font-semibold mb-2">Sales Office</h4>
                                    <p className="text-sm text-gray-600">Sector 106, Gurugram</p>
                                    <a href="tel:1234567890" className="text-sm text-slate-900 block mt-2">+91 12345 67890</a>
                                    <a href="mailto:sales@belvo.com" className="text-sm text-slate-900 block mt-1">sales@belvo.com</a>
                                </div>

                                <div className="p-6 border rounded-lg">
                                    <h4 className="font-semibold mb-2">Head Office</h4>
                                    <p className="text-sm text-gray-600">Gurugram, Haryana</p>
                                    <a href="tel:0987654321" className="text-sm text-slate-900 block mt-2">+91 09876 54321</a>
                                    <a href="mailto:info@belvo.com" className="text-sm text-slate-900 block mt-1">info@belvo.com</a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold">Office Hours</h4>
                                <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-4">Location</h4>
                                <div className="w-full rounded-lg overflow-hidden shadow">
                                    <Image src="/luxury-vision-desktop.jpg" alt="Office map" width={1200} height={700} className="object-cover w-full h-48 sm:h-64" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="p-6 border rounded-lg bg-gray-50">
                            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="grid gap-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input name="name" className="p-3 border rounded" placeholder="Your name" />
                                    <input name="email" type="email" className="p-3 border rounded" placeholder="Email address" />
                                </div>

                                <input name="phone" className="p-3 border rounded" placeholder="Phone (optional)" />

                                <textarea name="message" className="p-3 border rounded min-h-[140px]" placeholder="Your message" />

                                {error && <div className="text-sm text-red-600">{error}</div>}
                                {status === "sent" && <div className="text-sm text-green-700">Message sent. We will contact you soon.</div>}

                                <div className="pt-2">
                                    <Button type="submit" className="bg-slate-900 text-white px-6 py-3">{status === "sending" ? "Sending..." : "Send Message"}</Button>
                                </div>

                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
