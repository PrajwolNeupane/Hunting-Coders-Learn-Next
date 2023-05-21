import React from 'react';
import { useRouter } from 'next/router';

export default function sn() {

    const router = useRouter();
    const {sn} = router.query;

  return (
    <div>
      <p>Post : {sn}</p>
    </div>
  )
}
