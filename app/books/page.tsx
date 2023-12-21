import ListLayout from '@/layouts/BooksLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBooks } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 25

export const metadata = genPageMetadata({ title: 'Library' })

export default function LibraryPage() {
  const posts = allCoreContent(sortPosts(allBooks))
  console.log(posts)
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Books"
    />
  )
}
