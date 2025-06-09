import Link from "next/link"
import { Mail, Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Mindful Blog
            </h3>
            <p className="text-gray-600">생각과 아이디어를 공유하는 공간입니다. 항상 새로운 콘텐츠로 찾아뵙겠습니다.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">카테고리</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  디자인
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  개발
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  생산성
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  자기계발
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  연락처
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">뉴스레터 구독</h4>
            <p className="text-gray-600 mb-4">최신 글과 업데이트를 이메일로 받아보세요.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Mindful Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
