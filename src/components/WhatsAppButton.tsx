"use client"

import React, { useEffect, useState } from "react"
import { FaWhatsapp, FaTimes } from "react-icons/fa"

const PHONE = "919090939193" // use international format without + for wa.me
const MESSAGE = encodeURIComponent("Hi! I'm interested in your properties. Could you help me?")

export default function WhatsAppButton(): JSX.Element {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const onResize = () => {
            // close expanded mobile bar when viewport is large
            if (window.innerWidth >= 768) setExpanded(false)
        }
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const waLink = `https://wa.me/${PHONE}?text=${MESSAGE}`

    return (
        <>
            <div className="fixed z-50 right-6 bottom-6 md:bottom-8">
                {/* Desktop / Tablet: floating circular button on right */}
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="hidden md:inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition transform hover:-translate-y-0.5"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </a>

                {/* Mobile: toggle to full-width bottom bar */}
                <div className="md:hidden">
                    {!expanded ? (
                        <button
                            onClick={() => setExpanded(true)}
                            aria-expanded="false"
                            aria-label="Open WhatsApp chat"
                            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg"
                        >
                            <FaWhatsapp className="w-6 h-6" />
                        </button>
                    ) : (
                        <div className="fixed inset-x-4 bottom-4 bg-white border rounded-xl shadow-lg p-3 flex items-center gap-3">
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 flex-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white">
                                    <FaWhatsapp />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium">Chat on WhatsApp</div>
                                    <div className="text-xs text-gray-500">+91 12345 67890</div>
                                </div>
                            </a>
                            <button onClick={() => setExpanded(false)} aria-label="Close" className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                                <FaTimes />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
