import { useTranslations } from 'next-intl';
import { BlogPost } from '@/types';

const POSTS: Pick<BlogPost, 'tags' | 'publishedDate'>[] = [
  { publishedDate: new Date('2024-01-15'), tags: ['Next.js', 'Tutorial'] },
  { publishedDate: new Date('2024-01-22'), tags: ['Design', 'CSS'] },
  { publishedDate: new Date('2024-01-29'), tags: ['Layout', 'Tailwind'] },
];

export default function BlogSection() {
  const t = useTranslations('blog');

  const posts: BlogPost[] = [
    {
      title: t('post1Title'),
      content: '',
      author: 'Dev Team',
      publishedDate: POSTS[0].publishedDate,
      tags: POSTS[0].tags,
    },
    {
      title: t('post2Title'),
      content: '',
      author: 'Design Team',
      publishedDate: POSTS[1].publishedDate,
      tags: POSTS[1].tags,
    },
    {
      title: t('post3Title'),
      content: '',
      author: 'Dev Team',
      publishedDate: POSTS[2].publishedDate,
      tags: POSTS[2].tags,
    },
  ];

  const excerpts = [t('post1Excerpt'), t('post2Excerpt'), t('post3Excerpt')];

  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="scroll-reveal group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Placeholder image */}
              <div
                className="h-48 circular-wipe"
                style={{
                  background: `oklch(${85 + i * 3}% 0.${15 + i * 3} ${140 + i * 30})`,
                }}
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[oklch(70%_0.15_250)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {excerpts[i]}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.publishedDate.toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
