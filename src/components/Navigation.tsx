"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IconMenuDeep } from '@tabler/icons-react'
const Navigation = () => {
    return (
        <div className='p-4 flex justify-between items-center border-b border-gray-300'>
            <div className='flex items-center space-x-4'>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                            <IconMenuDeep size={24} />
                        </button>
                    </SheetTrigger>

                    <SheetContent className='w-64'>
                        <SheetHeader>
                            <SheetTitle>Navigation</SheetTitle>
                            <SheetDescription>
                                This is a description of the navigation sheet.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navigation
