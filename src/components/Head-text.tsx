"use client"
import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"

const HeadText = ({
    heading,
    subheadingfirstline,
    subheadingsecondline,
    description,
}: {
    heading?: string
    subheadingfirstline?: string
    subheadingsecondline?: string
    description?: string
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: "-120px" })

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    const lineVariants: Variants = {
        hidden: { width: 0, opacity: 0 },
        visible: { width: "4rem", opacity: 1, transition: { duration: 0.8 } },
    }

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-8"
        >
            <motion.div variants={lineVariants} className="mx-auto mb-6 h-px bg-black" />

            <motion.span variants={item} className="text-xs tracking-[0.3em] uppercase font-bold text-black mb-5 block">
                {heading}
            </motion.span>

            <motion.h1
                variants={item}
                className="font-black text-black leading-[0.9] mb-8"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
                {subheadingfirstline} <br />
                <motion.span variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                    {subheadingsecondline}
                </motion.span>
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {description}
            </motion.p>
        </motion.div>
    )
}

export default HeadText


