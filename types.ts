export type RepoProps = {
    private: boolean,
    html_url: string,
    full_name: string,
    name: string,
    description?: string,
    stargazers_count: number,
    is_template: boolean,
    language: string,
    license?: string,
    owner: {
        login: string,
        id: number,
        avatar_url: string
    }
}