import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Books } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Books>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { slug, date, title, cover, genres, author, published, language } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="flex flex-col gap-10 space-x-10 sm:flex-row">
              <div className="grid place-items-center sm:ml-4">
                <Image
                  className="aspect-[10/16]"
                  src={cover}
                  alt={title}
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div className="mt-8 flex flex-col text-center">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
                <div className="mt-2 flex flex-col gap-2 md:flex-row">
                  <div className="text-gray-500">Author:</div>
                  <div>{author?.join(', ')}</div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="text-gray-500">Genres:</div>
                  <div>{genres?.join(', ')}</div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="text-gray-500">First published in:</div>
                  <div>{published}</div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="text-gray-500">Original language:</div>
                  <div>{language}</div>
                </div>
                <div className="mb-4 mt-auto flex flex-col gap-2 md:flex-row">
                  <div className="text-gray-500">Finished reading:</div>
                  <div>
                    <div className="sr-only">Finished reading</div>
                    <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert xl:mx-10">
                {children}
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
