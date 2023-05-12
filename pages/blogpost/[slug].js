import React from 'react'
import {useRouter } from 'next/router'
const slug = () => {
  
    const router = useRouter();
    const {slug} = router.query;
    return (
    <div>
      
         <div className={styles.box}>
          <a
            href={'/blogpost/learnjavascript'}

            target="_blank"
            rel="noopener noreferrer"
            >
              <h2>
              Blog
              </h2>
              <p>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
         </a>
        </div>
    </div>
  )
};

export default slug;