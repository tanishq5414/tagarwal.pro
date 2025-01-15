import React from 'react'
import { BlogHeaderProps } from '@/types/blog'

export const BlogHeader = ({ title, date }: BlogHeaderProps) => {
    return (
        <header>
            <h1 className="text-4xl font-bold mb-4 text-zinc-900">{title}</h1>
            {date && (
                <p className="text-sm text-zinc-600 mb-8">
                    {new Date(date).toLocaleDateString()}
                </p>
            )}
        </header>
    )
} 