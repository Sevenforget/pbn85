import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 페이지가 삭제되었거나, 이름이 변경되었거나, 일시적으로 사용할 수 없습니다.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
