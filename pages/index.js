import styles from '@/styles/Home.module.css';
import { client } from '@/libs/client';
import Link from 'next/link';
// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`} legacyBehavior>
            <a href="">{blog.title} </a>
          </Link>
        </li>
      ))}
    </>
  );
}
