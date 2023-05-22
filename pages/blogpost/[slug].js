import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function slug() {

  const [blogData, setBlogData] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const getSingleBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
        const data = await response.json();
        setBlogData(data);
      } catch (e) {
        console.log(e);
      }
    }
    if (!router.isReady) {
      return;
    } else {
      getSingleBlogData();
    }
  }, [router.isReady, slug]);

  return (
    <>
      <Head>
        <title>Hunting Coder || {blogData?.title} </title>
      </Head>
      <div>
        <h1>{blogData?.title}</h1>
        <div>
          <p>
            {blogData?.content}
          </p>
        </div>
      </div>
    </>
  )
}

export default slug
