import {defineConfig} from "vitepress"

export default defineConfig(
    {
        title: "有男不玩 - U No. 1",
        description: "有男不玩 - U No. 1",
        lastUpdated: true,
        themeConfig: {
            nav: [
                {text: "首页", link: "/"},
                {text: "博客", link: "/blog/"},
            ],
        },
    }
)
