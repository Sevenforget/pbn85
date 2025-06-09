"use client"

import { getAllPosts } from "@/lib/data"
import PostCard from "@/components/post-card"
import TagCloud from "@/components/tag-cloud"

export default function Home({
  searchParams,
}: {
  searchParams: { tag?: string }
}) {
  const allPosts = getAllPosts()
  const { tag } = searchParams

  const filteredPosts = tag ? allPosts.filter((post) => post.tags?.includes(tag)) : allPosts

  // 모든 태그 추출 및 중복 제거
  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags || [])))

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/blog-hero-bg.png")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">생각과 아이디어를 공유하는 공간</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              디자인, 개발, 생산성, 자기계발에 관한 인사이트를 발견하세요.
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
                최신 글 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">{tag ? `"${tag}" 관련 글` : "최신 글"}</h2>
            <TagCloud tags={allTags} activeTag={tag} />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} featured={index === 0 && !tag} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">해당 태그의 글이 없습니다.</h3>
              <p className="text-gray-500 mb-8">다른 태그를 선택하거나 전체 글을 확인해보세요.</p>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                전체 글 보기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 뉴스레터 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">뉴스레터 구독하기</h2>
            <p className="text-gray-600 mb-8">
              최신 글과 독점 콘텐츠를 이메일로 받아보세요. 언제든지 구독을 취소할 수 있습니다.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
