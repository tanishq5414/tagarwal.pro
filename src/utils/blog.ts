import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { PostContent } from '@/types/blog'
import getBlogMetaData from './getBlogMetaData'

export function getPostContent(slug: string): PostContent | null {
    const folder = path.join(process.cwd(), 'blogs')
    const file = path.join(folder, `${slug}.md`)
    try {
        const content = fs.readFileSync(file, 'utf8')
        const matterResult = matter(content)
        const postContent: PostContent = {
            content: matterResult.content,
            data: {
                title: matterResult.data.title || 'Untitled',
                date: matterResult.data.date,
                description: matterResult.data.description,
                ...matterResult.data
            }
        }
        return postContent
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error)
        return null
    }
}

export const generateBlogStaticParams = async () => {
    const posts = getBlogMetaData('blogs')
    return posts.map((post) => ({ slug: post.slug }))
} 