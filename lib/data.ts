import type { Post } from "@/types"

// 샘플 데이터
export const posts: Post[] = [
  {
    id: "1",
    title: "디자인 시스템의 중요성",
    content:
      "디자인 시스템은 제품의 일관성을 유지하는 데 중요한 역할을 합니다. 디자인 시스템을 구축함으로써 팀은 더 빠르게 작업하고 일관된 사용자 경험을 제공할 수 있습니다. 이 글에서는 디자인 시스템의 핵심 요소와 구축 방법에 대해 알아보겠습니다.\n\n디자인 시스템의 핵심 요소는 다음과 같습니다:\n\n1. **컴포넌트 라이브러리**: 재사용 가능한 UI 컴포넌트 모음\n2. **디자인 토큰**: 색상, 타이포그래피, 간격 등의 디자인 변수\n3. **패턴 라이브러리**: 일반적인 UI 패턴 및 상호작용\n4. **문서화**: 사용 지침 및 예제\n\n효과적인 디자인 시스템을 구축하려면 팀 전체의 협업이 필요합니다. 디자이너와 개발자가 함께 작업하여 시스템의 모든 측면이 실제 제품 개발에 적용될 수 있도록 해야 합니다.",
    author: "김디자인",
    tags: ["디자인", "UX", "개발"],
    excerpt:
      "디자인 시스템은 제품의 일관성을 유지하는 데 중요한 역할을 합니다. 이 글에서는 디자인 시스템의 핵심 요소와 구축 방법에 대해 알아보겠습니다.",
    date: "2023년 12월 15일",
    readingTime: "5분",
    slug: "design-system-importance",
    coverImage: "/abstract-design-system.png",
  },
  {
    id: "2",
    title: "React 18의 새로운 기능",
    content:
      "React 18이 출시되었습니다! 이번 버전에는 많은 새로운 기능과 개선 사항이 포함되어 있습니다. 이 글에서는 주요 변경 사항과 이를 프로젝트에 적용하는 방법에 대해 살펴보겠습니다.\n\n**주요 변경 사항**:\n\n1. **자동 배치(Automatic Batching)**: 여러 상태 업데이트를 하나의 리렌더링으로 그룹화\n2. **동시성 기능(Concurrent Features)**: 사용자 인터페이스의 응답성 향상\n3. **서스펜스(Suspense) 개선**: 서버 컴포넌트 및 스트리밍 서버 렌더링 지원\n4. **새로운 훅(Hooks)**: useId, useTransition, useDeferredValue 등\n\n이러한 변경 사항은 React 애플리케이션의 성능과 사용자 경험을 크게 향상시킬 수 있습니다. 특히 동시성 기능은 복잡한 UI 업데이트를 처리할 때 매우 유용합니다.",
    author: "박리액트",
    tags: ["React", "JavaScript", "프론트엔드"],
    excerpt:
      "React 18이 출시되었습니다! 이번 버전에는 많은 새로운 기능과 개선 사항이 포함되어 있습니다. 주요 변경 사항과 적용 방법을 알아보세요.",
    date: "2023년 11월 20일",
    readingTime: "7분",
    slug: "react-18-new-features",
    coverImage: "/abstract-react-code.png",
  },
  {
    id: "3",
    title: "효과적인 시간 관리 전략",
    content:
      "시간은 우리 모두에게 주어진 가장 소중한 자원입니다. 효과적인 시간 관리는 생산성을 높이고 스트레스를 줄이는 데 도움이 됩니다. 이 글에서는 일상 생활과 업무에서 시간을 더 효율적으로 사용하는 방법에 대해 알아보겠습니다.\n\n**효과적인 시간 관리 전략**:\n\n1. **우선순위 설정**: 중요하고 긴급한 작업을 먼저 처리\n2. **시간 블록킹**: 특정 작업에 집중할 수 있는 시간 블록 설정\n3. **분산 방지**: 멀티태스킹 대신 한 번에 하나의 작업에 집중\n4. **정기적인 휴식**: 생산성 유지를 위한 짧은 휴식 시간 확보\n5. **자동화 활용**: 반복적인 작업은 가능한 자동화\n\n이러한 전략을 일상에 적용하면 더 많은 일을 완료하고 여유 시간을 확보할 수 있습니다. 중요한 것은 자신에게 맞는 시스템을 찾고 꾸준히 실천하는 것입니다.",
    author: "이시간",
    tags: ["생산성", "자기계발", "시간관리"],
    excerpt:
      "효과적인 시간 관리는 생산성을 높이고 스트레스를 줄이는 데 도움이 됩니다. 일상 생활과 업무에서 시간을 더 효율적으로 사용하는 방법을 알아보세요.",
    date: "2023년 10월 5일",
    readingTime: "6분",
    slug: "effective-time-management",
    coverImage: "/placeholder.svg?height=400&width=600&query=time%20management%20clock",
  },
  {
    id: "4",
    title: "지속 가능한 개발 습관",
    content:
      "소프트웨어 개발은 마라톤과 같습니다. 장기적인 성공을 위해서는 지속 가능한 개발 습관이 필요합니다. 이 글에서는 개발자로서 건강하고 생산적인 경력을 유지하는 데 도움이 되는 습관에 대해 알아보겠습니다.\n\n**지속 가능한 개발 습관**:\n\n1. **꾸준한 학습**: 새로운 기술과 도구에 대한 지속적인 학습\n2. **코드 리뷰**: 다른 사람의 코드를 검토하고 피드백 수용\n3. **문서화**: 코드와 프로세스에 대한 명확한 문서 작성\n4. **테스트 작성**: 안정적인 코드를 위한 테스트 자동화\n5. **건강 관리**: 충분한 휴식과 신체 활동으로 번아웃 방지\n\n이러한 습관은 단기적인 생산성뿐만 아니라 장기적인 경력 발전에도 도움이 됩니다. 개발은 단거리 경주가 아닌 마라톤임을 기억하세요.",
    author: "최개발",
    tags: ["개발", "경력", "습관"],
    excerpt:
      "소프트웨어 개발은 마라톤과 같습니다. 장기적인 성공을 위해서는 지속 가능한 개발 습관이 필요합니다. 건강하고 생산적인 경력을 유지하는 방법을 알아보세요.",
    date: "2023년 9월 12일",
    readingTime: "8분",
    slug: "sustainable-development-habits",
    coverImage: "/placeholder.svg?height=400&width=600&query=sustainable%20development%20coding",
  },
]

export function getAllPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, tag?: string): Post[] {
  if (tag) {
    return posts.filter((post) => post.slug !== currentSlug && post.tags?.includes(tag)).slice(0, 3)
  }

  return posts.filter((post) => post.slug !== currentSlug).slice(0, 3)
}
