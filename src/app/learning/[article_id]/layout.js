import articles from "@/data/articles";

export async function generateMetadata({ params }) {
  const { article_id } = await params;
  const article = articles.find((a) => a.id === article_id);
  if (!article) return {};
  return {
    title: `${article.title}`,
    description: article.excerpt,
    alternates: { canonical: `/learning/${article.id}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: article.heroImage ? [{ url: article.heroImage }] : [],
    },
  };
}

export default function ArticleLayout({ children }) {
  return children;
}
