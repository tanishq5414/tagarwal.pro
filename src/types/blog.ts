export type BlogParams = {
    params: Promise<{
        slug: string
    }>
}

export interface PostContent {
    content: string
    data: {
        title: string
        date?: string
        description?: string
        [key: string]: any
    }
}

export interface BlogHeaderProps {
    title: string
    date?: string
}

export interface BlogContentProps {
    content: string
}

export interface CodeBlockProps {
    node?: any
    inline?: boolean
    className?: string
    children?: React.ReactNode
    [key: string]: any
} 