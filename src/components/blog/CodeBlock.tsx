import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeBlockProps } from '@/types/blog'

export const CodeBlock = ({ node, inline, className, children, ...props }: CodeBlockProps) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <SyntaxHighlighter
            language={match[1]}
            style={nord}
            className="rounded-lg !bg-zinc-100 !p-4"
            {...props}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
} 