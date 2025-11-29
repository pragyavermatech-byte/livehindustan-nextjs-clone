import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=demo'
    );
    const data = await res.json();

    return {
      props: {
        articles: data?.articles || [],
      },
      revalidate: 30, // ISR: revalidate every 30 seconds
    };
  } catch (error) {
    return {
      props: {
        articles: [],
      },
      revalidate: 30,
    };
  }
}

export default function Home({ articles }) {
  if (!articles.length) {
    return <h2 style={{ padding: 20 }}>No news available</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>News Front Page</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 20,
        }}
      >
        {articles.map((a, i) => (
          <Link key={i} href={`/article/${i}`}>
            <div style={{ border: '1px solid #ccc', padding: 10 }}>
              <Image
                src={a.urlToImage || '/placeholder.png'}
                alt="news image"
                width={300}
                height={200}
              />
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
