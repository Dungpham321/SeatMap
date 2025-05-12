import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-4 border-t-3 border-zinc-200 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://www.facebook.com/dungpv2k" className="hover:underline">Phạm Văn Dũng </a>.</span>
            </div>
        </footer>
    )
}

