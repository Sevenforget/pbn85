import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = Number.parseInt(params.id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://trendlogicpro.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="min-h-screen">
        {/* 헤더 이미지 */}
        <div className="relative h-[40vh] md:h-[60vh]">
          <Image
            src="/placeholder.svg"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 md:pb-20">
              <Link
                href="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>돌아가기</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-white/80 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author || "관리자"}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {new Date(post.date || new Date()).toLocaleDateString(
                      "ko-KR"
                    )}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime || "5분 읽기"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* 태그 */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/?tag=${tag}`}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* 본문 내용 */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                // 헤더 처리 (마크다운 스타일)
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.substring(2)}
                    </h2>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.substring(3)}
                    </h3>
                  );
                }

                // 볼드 텍스트 처리
                const formattedParagraph = paragraph.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                );

                // 리스트 처리
                if (paragraph.includes("\n1. ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((item) => item.trim());
                  return (
                    <ol key={index} className="list-decimal pl-5 my-4">
                      {items.map((item, i) => {
                        const content = item.replace(/^\d+\.\s/, "");
                        return (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                        );
                      })}
                    </ol>
                  );
                }

                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                  />
                );
              })}
            </div>

            {/* 저자 정보 */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {(post.author || "관리자").charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">
                    {post.author || "관리자"}
                  </h3>
                  <p className="text-gray-600">작성자</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                디자인, 개발, 생산성에 관심이 많은 작가입니다. 더 나은 세상을
                만들기 위한 아이디어를 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
