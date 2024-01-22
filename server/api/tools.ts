type BaseComp = {
    name: string,
    icon?: string,
    class?: string | null,
    noFill?: boolean
}


export default defineEventHandler<{
    languages: BaseComp[],
    tools: BaseComp[]   
    frameworks: BaseComp[]
    databases: BaseComp[]
}>((event) => {
    return {
        languages: [
            {
                name: "TypeScript",
                icon: "typescript"
            }, 
            {
                name: "JavaScript",
                icon: "javascript"
            },
            {
                name: "Java",
                icon: "java"
            },
            {
                name: "HTML5",
                icon: "html5"
            },
            {
                name: "Node.js",
                icon: "nodejs"
            },
            {
                name: "Python",
                icon: "python"
            }
        ],
        tools: [
            {
                name: "VS Code",
                icon: "vscode"
            },
            {
                name: "InteliJ",
                icon: "intelij"
            },
            {
                name: "Webstorm",
                icon: "webstorm"
            },
            {
                name: "Github",
                icon: "github",
                noFill: true
            },
            {
                name: "Docker",
                icon: "docker"
            }
        ],
        frameworks: [
            {
                name: "Nuxt",
                icon: "nuxt"
            },
            {
                name: "Vue.js",
                icon: "vue"
            },
            {
                name: "React",
                icon: "react"
            },
            {
                name: "Tailwind",
                icon: "tailwind"
            },
            {
                name: "Discord.js",
                icon: "discordjs"
            },
            {
                name: "Bukkit",
                icon: "minecraft"
            },
            {
                name: "Spigot",
                icon: "minecraft"
            }
        ],
        databases: [
            {
                name: "SQL",
                icon: "mariadb"
            },
            {
                name: "MongoDB",
                icon: "mongodb"
            }
        ]
    }
})