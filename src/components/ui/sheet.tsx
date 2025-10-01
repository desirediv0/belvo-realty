"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay asChild {...props}>
    <motion.div
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-0 z-50 bg-black/80",
        className
      )}
    />
  </SheetPrimitive.Overlay>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-full md:w-[40%] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right:
          "inset-y-0 right-0 h-full w-full md:w-[40%] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => {
  // controls for motion
  const controls = useAnimation()
  const localRef = React.useRef<HTMLDivElement | null>(null)

  // helper to combine forwarded ref with localRef
  const setRefs = (node: HTMLDivElement | null) => {
    localRef.current = node
    if (!ref) return
    if (typeof ref === "function") {
      // forwarded ref as function
      (ref as (instance: HTMLDivElement | null) => void)(node)
    } else {
      // forwarded ref as mutable ref object
      try {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      } catch {
        // ignore if assignment not possible
      }
    }
  }

  React.useEffect(() => {
    const el = localRef.current
    if (!el) return

    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // determine which closed variant to use based on side
    const closedVariant = side === "left" ? "closedLeft" : side === "right" ? "closedRight" : side === "top" ? "closedTop" : "closedBottom"

    // initial state
    const state = el.getAttribute("data-state")
    controls.set(state === "open" ? "open" : closedVariant)

    // observe attribute changes to animate on open/close
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-state") {
          const v = el.getAttribute("data-state")
          if (prefersReduced) {
            // jump instantly if reduced motion is preferred
            controls.set(v === "open" ? "open" : closedVariant)
          } else {
            controls.start(v === "open" ? "open" : closedVariant)
          }
        }
      }
    })
    obs.observe(el, { attributes: true })
    return () => obs.disconnect()
  }, [controls, side])

  // variants per side
  // slightly slower, smooth easing for a refined entrance/exit
  const variants = {
    open: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8 } },
    closedLeft: { x: "-100%", opacity: 0, transition: { duration: 0.6 } },
    closedRight: { x: "100%", opacity: 0, transition: { duration: 0.6 } },
    closedTop: { y: "-100%", opacity: 0, transition: { duration: 0.6 } },
    closedBottom: { y: "100%", opacity: 0, transition: { duration: 0.6 } },
  }

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content asChild {...props} ref={undefined}>
        <motion.aside
          ref={setRefs as unknown as React.Ref<HTMLDivElement>}
          initial={false}
          animate={controls}
          variants={variants}
          custom={side}
          className={cn(sheetVariants({ side }), className)}
        >
          <SheetPrimitive.Close className="absolute right-4 top-4  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-white text-lg rounded-full p-1">
            <X />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
          {children}
        </motion.aside>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
