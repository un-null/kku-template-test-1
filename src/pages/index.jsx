import Link from "next/link";

const Home = (props) => {
  const contents = props.contents ?? [];
  const totalCount = props.totalCount ?? 0;

  return (
    <div className="max-w-[960px] mx-auto px-4">
      <h1 className="text-4xl font-bold">Home Page</h1>

      <p className="mt-8 text-[#212529]/70 cursor-default">{`記事の総数: ${totalCount} 件`}</p>

      <ul className="mt-4 space-y-4">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link
                href={`/blog/${content.id}`}
                className="text-xl text-blue-800 underline hover:text-blue-400"
              >
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.API_URL, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY,
    },
  });

  const json = await response.json();

  return {
    props: json,
  };
};

export default Home;
