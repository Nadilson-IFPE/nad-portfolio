import Frontmatter from './frontmatter'

interface Post {
  slug: string
  content: string
  frontmatter: Frontmatter
}

export default Post
