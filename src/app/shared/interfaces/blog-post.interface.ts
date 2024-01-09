export interface BlogPost {
    title: string,
    id: number,
    intro: string,
    paragraph: {content: string, images?: { path: string, title: string, source?: string}}[],
    conclusion: string,
    date?: string,
    tags?: string[],
    images?: { path: string, title: string}
    thumbnail: string,
    page_title: string;
    page_url: string;
    isTrending?: boolean
    youtube?: { link: string, title?: string}
    meta: {
        title?: string
        description?: string
        keywords?: string
    },
    sources: [
        {
            link: string
            title: string
        }
    ]
}