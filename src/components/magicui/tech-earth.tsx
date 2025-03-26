import { IconCloud } from './icon-cloud'

const slugs = [
  'typescript',
  'javascript',
  'java',
  'react',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'sass',
  'tailwindcss',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'figma'
]

export function IconCloudDemo() {
  const images = slugs.map(
    slug => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="overflow-hidden flex justify-center">
      <IconCloud images={images} />
    </div>
  )
}
