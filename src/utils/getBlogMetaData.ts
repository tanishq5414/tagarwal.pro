import fs from 'fs'
import matter from 'gray-matter'

interface BlogPost {
    title: string;
    date?: string;
    description?: string;
    tags?: string[];
    slug: string;
}

export default function getBlogMetaData(basePath: string): BlogPost[] {
    try {
        const folder = basePath + '/'
        const files = fs.readdirSync(folder)
        const markdownPosts = files.filter(file => file.endsWith('.md'))

        // get the file data
        const posts = markdownPosts.map((filename): BlogPost | null => {
            try {
                const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
                const matterResult = matter(fileContents)
                return {
                    title: matterResult.data.title,
                    date: matterResult.data.date,
                    description: matterResult.data.description,
                    tags: matterResult.data.tags,
                    slug: filename.replace('.md', ''),
                }
            } catch (error) {
                console.error(`Error reading blog post ${filename}:`, error)
                return null
            }
        }).filter((post): post is BlogPost => post !== null) // Type guard to remove nulls

        return posts
    } catch (error) {
        console.error(`Error reading blog directory ${basePath}:`, error)
        return []
    }
}