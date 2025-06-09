import Link from "next/link"

interface TagCloudProps {
  tags: string[]
  activeTag?: string
}

export default function TagCloud({ tags, activeTag }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/"
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          !activeTag ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        전체
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/?tag=${tag}`}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeTag === tag ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}
