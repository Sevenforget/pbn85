import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Mindful Blog
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            홈
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
            카테고리
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
            소개
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
            연락처
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
            구독하기
          </button>
        </div>
      </div>
    </header>
  )
}
