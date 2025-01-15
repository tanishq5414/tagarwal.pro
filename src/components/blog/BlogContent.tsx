import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from './CodeBlock'
import { BlogContentProps } from '@/types/blog'

export const BlogContent = ({ content }: BlogContentProps) => {
    return (
        <ReactMarkdown
            className="markdown-content text-zinc-900"
            remarkPlugins={[remarkGfm]}
            components={{
                code: CodeBlock,
                h1: ({node, ...props}) => (
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight pt-16 pb-8" {...props} />
                ),
                h2: ({node, ...props}) => (
                    <h2 className="scroll-m-20 border-b pb-2 pt-12 mb-6 text-3xl font-bold tracking-tight first:mt-0" {...props} />
                ),
                h3: ({node, ...props}) => (
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-8 pb-6" {...props} />
                ),
                h4: ({node, ...props}) => (
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-6" {...props} />
                ),
                hr: ({node, ...props}) => (
                    <hr className="my-12 border-zinc-200" {...props} />
                ),
                img: ({node, ...props}) => (
                    <img className="w-full h-auto" {...props} alt='blog-image' />
                ),
                a: ({node, ...props}) => (
                    <a target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors" {...props} />
                ),
                table: ({node, ...props}) => (
                    <table className="border-collapse table-auto w-full text-sm" {...props} />
                ),
                th: ({node, ...props}) => (
                    <th className="border-b border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left" {...props} />
                ),
                td: ({node, ...props}) => (
                    <td className="border-b border-slate-100 p-4 pl-8 text-slate-500" {...props} />
                )
            }}
        >
            {content}
        </ReactMarkdown>
    )
} 