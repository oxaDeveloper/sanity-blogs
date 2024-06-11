import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt asc){
    smallDesc,
    title,
    titleImage,
    "currentSlug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {data.map((post: any, idx: number) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={350}
              height={350}
              className="h-[200px] rounded-t-lg object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="line-clamp-2 text-lg font-bold">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                {post.smallDesc}
              </p>

              <Button asChild className="mt-7 w-full">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
