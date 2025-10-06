"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import HeroPage from "@/components/HeroPage"
import { Button } from "@/components/ui/button"
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
        const phone = String(formData.get("phone") || "").trim()
        const message = String(formData.get("message") || "").trim()

        if (!name || !email || !message || !phone) {
            setError("Please fill name, email, message and phone.")
            return
        }

        setStatus("sending")
        // simulate async submit
        try {
            await new Promise((res) => setTimeout(res, 1000))
            setStatus("sent")
            console.log({ name, email, phone, message })
            form.reset()
            await new Promise((res) => setTimeout(res, 5000))
            setStatus("idle")
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
                {/* Background pattern (decorative) - make non-interactive so inputs are reachable */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
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
                            <h2 className="text-3xl font-bold text-[#AA8453]">Contact Sales & Support</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Reach our experienced sales advisors or drop a message and we will get back to you within one business day.
                            </p>

                            <div className="grid gap-4">


                                <div className="p-6 border rounded-lg">
                                    <h4 className="font-semibold mb-2">Head Office</h4>
                                    <p className="text-sm text-gray-600">Office No.- 649, Satya The Hive, Sector 102, Gurugram, Haryana- 122505</p>
                                    <a href="tel:+919090939193" className="text-sm text-slate-900 block mt-2">+91 9090 939193</a>
                                    <a href="mailto:hello@belvorealty.com" className="text-sm text-slate-900 block mt-1">hello@belvorealty.com</a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold">Office Hours</h4>
                                <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-4">Location</h4>
                                <div className="w-full rounded-lg overflow-hidden shadow">
                                    <div className="w-full h-48 sm:h-64">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.745546418237!2d76.9600690752829!3d28.47102317575326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1771caca6cf1%3A0xb743a750f8c9e9b1!2sBelvo%20Realty!5e1!3m2!1sen!2sin!4v1759749096189!5m2!1sen!2sin"
                                            title="Belvo Realty Office Location"
                                            className="w-full h-full border-0"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="p-6 border rounded-lg bg-gray-50">
                            <h3 className="text-2xl font-bold mb-4 text-[#AA8453]">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="grid gap-4" aria-live="polite">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1">Full name</label>
                                        <input id="name" name="name" required className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your full name" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email address</label>
                                        <input id="email" name="email" type="email" required className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Enter your email address" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                                    <input id="phone" name="phone" type="tel" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-slate-300" required placeholder="Enter your phone number" />
                                    <p className="text-xs text-gray-500 mt-1">We&apos;ll only use this to contact you about your enquiry.</p>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea id="message" name="message" required className="p-3 border rounded min-h-[140px] w-full focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Tell us a bit about what you're looking for (budget, location, timelines)" />
                                </div>

                                {error && <div role="alert" className="text-sm text-red-600">{error}</div>}
                                {status === "sent" && <div role="status" className="text-sm text-green-700">Message sent. We will contact you soon.</div>}

                                <div className="pt-2">
                                    <Button type="submit" disabled={status === "sending"} className="bg-slate-900 text-white px-6 py-3">{status === "sending" ? "Sending..." : "Send Message"}</Button>
                                </div>

                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
