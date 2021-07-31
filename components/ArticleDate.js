import { format, parseISO } from 'date-fns'

const ArticleDate = ({published}) => {
    const publishedAt = parseISO(published)
return (
    <time className="text-lg text-gray-500 mb-2 lg:mb-4" dateTime={publishedAt.toISOString()}>
    {format(publishedAt, 'dd MMM yyyy')}
  </time>
)
}

export default ArticleDate