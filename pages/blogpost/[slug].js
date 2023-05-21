import React from 'react';
import { useRouter } from 'next/router';

function slug() {

    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>
      <h1>Title of the Blog {slug}</h1>
      <div>
        <p>
        Moving from Heroku to Render reduced my hosting bill by 80%, and my sites and databases are even faster.
        </p>
      </div>
    </div>
  )
}

export default slug
