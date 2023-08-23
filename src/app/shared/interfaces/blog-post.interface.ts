export interface BlogPost {
    title: string,
    id: number,
    intro: string,
    paragraph: {content: string}[],
    conclusion: string,
    date?: string,
    tags?: string[],
    images?: { path: string, title: string}
    thumbnail: string
}