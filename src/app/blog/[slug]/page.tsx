import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="mt-6 w-[50%]">
        <div className="flex flex-col items-center">
          <h1 className="block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
            {data.title}
          </h1>

          <div className="mt-8 flex h-[25rem] w-full justify-center">
            <Image
              src={urlFor(data.titleImage).url()}
              alt="image"
              width={1080}
              height={1080}
              className="rounded-lg border object-cover"
            />
          </div>
        </div>

        <div className="prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary mt-16">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}
