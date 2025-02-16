'use client'
import React from 'react'
import { useState } from 'react'
import {

    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export const Header = () =>{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-blue">
            <nav aria-label="Global" background-color='#333' className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12" >
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Welcome to RealTimeUserList!
                    </a>

                </PopoverGroup>
            </nav>

        </header>
    )
}
