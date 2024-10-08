type Post = {
    title: string
    description: string
    thumbnail: string
    path: string
    tags: string
    createdAt: string
}

const posts: Post[] = [
    // {
    //     "title": "오픈소스 기여하기",
    //     "description": "React 19 (canary 버전)을 공부하던 중 예시에 비어있는 return statement를 발견했다. 추가해서 React.dev 오픈소스의 컨트리뷰터가 되어보자.",
    //     "thumbnail": "https://picsum.photos/800/700",
    //     "path": "/posts/open-source-contribution",
    //     "tags": [
    //         "React",
    //         "JavaScript",
    //         "Open Source"
    //     ],
    //     "createdAt": "2024-07-25"
    // },
    // {
    //     "title": "프로젝트 - 개인 블로그",
    //     "description": "Next JS로 개인 블로그 만들기",
    //     "thumbnail": "https://picsum.photos/800/700",
    //     "path": "/posts/create-a-blog",
    //     "tags": [
    //         "React",
    //         "JavaScript",
    //         "Next JS",
    //         "Other",
    //         "And then",
    //         "What the"
    //     ],
    //     "createdAt": "2024-07-25"
    // }
]

export default posts