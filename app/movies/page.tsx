import ListLayout from '@/layouts/MoviesLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allMovies } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 25

export const metadata = genPageMetadata({ title: 'Library' })

export default function LibraryPage() {
  const posts = allCoreContent(sortPosts(allMovies))
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
      title="All Movies"
    />
  )
}
