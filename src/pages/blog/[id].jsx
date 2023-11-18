import { useRouter } from "next/navigation";

const BlogId = (props) => {
  const router = useRouter();

  console.log(props);

  return (
    <div className="max-w-[960px] mx-auto px-4">
      <button
        onClick={() => router.back()}
        className="mb-4 text-base text-[#212529]/70 hover:text-[#212529]"
      >
        {"< 戻る"}
      </button>
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-2 block">
        {props.publishedAt.substring(0, 10)}
      </time>
      <article
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const response = await fetch(process.env.API_URL + context.query.id, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY,
    },
  });

  const json = await response.json();

  return {
    props: json,
  };
};

export default BlogId;
