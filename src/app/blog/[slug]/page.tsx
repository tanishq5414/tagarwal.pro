import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import { notFound } from 'next/navigation'
import path from 'path'
import getBlogMetaData from "@/utils/getBlogMetaData"
import ReactMarkdown from 'react-markdown'

type Params = {
    params: {
        slug: string
    }
    searchParams: Record<string, string | string[] | undefined>
}

function getPostContent(slug: string) {
    const folder = path.join(process.cwd(), 'blogs')
    const file = path.join(folder, `${slug}.md`)
    try {
        const content = fs.readFileSync(file, 'utf8')
        const matterResult = matter(content)
        return matterResult
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error)
        return null
    }
}

export const generateStaticParams = async () => {
    const posts = getBlogMetaData('blogs')
    return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost({ params }: Params) {
    const post = getPostContent(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="w-full animate-blur-fade-in">
            <div className="max-w-4xl mx-auto pt-8 px-6">
                <article className="prose prose-lg dark:prose-invert 
                    prose-headings:text-black dark:prose-headings:text-white 
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 
                    prose-code:text-gray-800 dark:prose-code:text-gray-200
                    prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                    prose-code:p-1 prose-code:rounded
                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 
                    prose-pre:p-4 prose-pre:rounded-lg
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-h1:font-bold prose-h2:font-semibold prose-h3:font-medium
                    prose-h1:mt-8 prose-h2:mt-6 prose-h3:mt-4
                    max-w-none">
                    <h1 className="text-4xl font-bold mb-4 text-black">{post.data.title}</h1>
                    {post.data.date && (
                        <p className="text-sm text-gray-600 mb-8">
                            {new Date(post.data.date).toLocaleDateString()}
                        </p>
                    )}
                    <ReactMarkdown className="markdown-content">
                        {post.content}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    )
}
