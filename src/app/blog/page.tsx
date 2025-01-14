import React from 'react'
import getBlogMetaData from "@/utils/getBlogMetaData"
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export async function generateMetadata() {
    return {
        title: "Tanishq Agarwal's Blog"
    }
}

function getPostPreview(slug: string) {
    try {
        const content = fs.readFileSync(`blogs/${slug}.md`, 'utf8')
        const { content: markdownContent } = matter(content)
        return markdownContent.slice(0, 200) + '...'
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error)
        return ''
    }
}

export default function BlogPage() {
    const posts = getBlogMetaData('blogs')
    
    return (
        <main className="max-w-4xl mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-orange-500">Blog Posts</h1>
            <div className="space-y-8">
                {posts.map((post) => {
                    const preview = getPostPreview(post.slug)
                    
                    return (
                        <Link 
                            href={`/blog/${post.slug}`} 
                            key={post.slug}
                            className="block p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors animate-blur-fade-in"
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-gray-600">{post.title}</h2>
                            {post.date && (
                                <p className="text-sm text-gray-500 mb-2">
                                    {new Date(post.date).toLocaleDateString()}
                                </p>
                            )}
                            {post.description && (
                                <p className="text-gray-600 mb-4">{post.description}</p>
                            )}
                            <div className="prose prose-sm text-gray-600">
                                <ReactMarkdown>{preview}</ReactMarkdown>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}