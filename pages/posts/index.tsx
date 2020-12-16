import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";
import Page from "@/components/Page";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Stack from "@/components/Stack";

export default function Posts({ posts }) {
  const router = useRouter();
  let category = router.query.category;
  return (
    <Page title='Posts'>
      <Header>
        <Header.Title>Posts</Header.Title>
        <Header.Description>
          Bibendum class eleifend accumsan lobortis nostra fusce donec augue
          sagittis
        </Header.Description>
      </Header>
      <Section>
        <Section.Title>Recent</Section.Title>
        <ul className='flex space-x-2 mb-8'>
          <li>
            <Link
              href={{
                pathname: "/posts",
              }}
              scroll={false}
            >
              <a
                className={`${
                  category === undefined
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200"
                } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
              >
                All
              </a>
            </Link>
          </li>
          {["CSS", "JavaScript"].map((c) => (
            <li key={c}>
              <Link
                href={{
                  pathname: "/posts",
                  query: { category: c.toLowerCase() },
                }}
                scroll={false}
              >
                <a
                  className={`${
                    category === c.toLowerCase()
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200"
                  } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
                >
                  {c}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Stack grid>
          {posts
            .filter((post) => {
              if (!category) {
                return post;
              } else {
                return post.data.tags
                  .map((c) => c.toLowerCase())
                  .includes(category);
              }
            })
            .map((post) => (
              <Stack.Item key={post.filePath}>
                <Card>
                  <Card.Title>
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                      href={`/posts/[slug]`}
                    >
                      <a>{post.data.title}</a>
                    </Link>
                  </Card.Title>
                  {/* {post.data.description && (
                  <Card.Description>{post.data.description}</Card.Description>
                )} */}
                  <Card.Tags items={post.data.tags} />
                </Card>
              </Stack.Item>
            ))}
        </Stack>
      </Section>
    </Page>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
