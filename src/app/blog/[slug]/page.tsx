import React from 'react'
import { notFound } from 'next/navigation'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { BlogContent } from '@/components/blog/BlogContent'
import { BlogParams } from '@/types/blog'
import { getPostContent, generateBlogStaticParams } from '@/utils/blog'

export const generateStaticParams = generateBlogStaticParams

export default function BlogPost({ params }: BlogParams) {
    const post = getPostContent(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="w-full animate-blur-fade-in">
            <div className="max-w-4xl mx-auto pt-8 px-6">
                <article className="prose prose-lg
                    prose-headings:text-zinc-900
                    prose-p:text-zinc-900
                    prose-p:[line-height:3]
                    prose-li:[line-height:3]
                    prose-code:text-zinc-900
                    prose-code:bg-zinc-100
                    prose-code:p-1 prose-code:rounded
                    prose-pre:bg-zinc-100
                    prose-pre:p-4 prose-pre:rounded-lg
                    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                    prose-h1:font-bold prose-h2:font-bold prose-h3:font-semibold prose-h4:font-medium
                    prose-h1:mb-8 prose-h2:mb-6 prose-h3:mb-6 prose-h4:mb-6
                    prose-h1:mt-16 prose-h2:mt-12 prose-h3:mt-8 prose-h4:mt-8
                    prose-h1:tracking-tight prose-h2:tracking-tight
                    prose-h1:text-zinc-900 prose-h2:text-zinc-900 prose-h3:text-zinc-800 prose-h4:text-zinc-800
                    prose-a:text-blue-600
                    prose-img:rounded-lg
                    prose-strong:text-zinc-900
                    prose-ul:text-zinc-900
                    prose-ol:text-zinc-900
                    prose-li:text-zinc-900
                    prose-blockquote:text-zinc-700
                    prose-blockquote:border-l-4
                    prose-blockquote:border-zinc-300
                    prose-blockquote:pl-4
                    prose-blockquote:italic
                    max-w-none">
                    <BlogHeader title={post.data.title} date={post.data.date} />
                    <BlogContent content={post.content} />
                </article>
            </div>
        </div>
    )
}
