import Image from 'next/image';

export async function getStaticPaths() {
  // We don't pre-generate pages; we generate them when requested
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=demo'
  );
  const data = await res.json();

  const article = data.articles[params.id] || null;

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
    revalidate: 30, // ISR
  };
}

export default function Article({ article }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>{article.title}</h1>

      <Image
        src={article.urlToImage || '/placeholder.png'}
        alt="full article"
        width={600}
        height={400}
      />

      <p style={{ marginTop: 20 }}>{article.content || article.description}</p>
    </div>
  );
}
