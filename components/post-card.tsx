import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/types"

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link href={`/posts/${post.slug}`} className="block h-full">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-6">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h2 className={`text-white font-bold ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{post.title}</h2>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime} 읽기</span>
          </div>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-medium">
              {post.author.charAt(0)}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{post.author}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
