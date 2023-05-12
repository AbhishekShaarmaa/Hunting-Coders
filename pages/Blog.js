import React, { useEffect, useState } from "react";
import styles from "@/styles/blog.module.css";
import Link from "next/link";
function Blog() {
   const [blog, setBlog] = useState([]);
   useEffect(() => {

      console.log("use effect is running");
      fetch("http://localhost:3000/api/hello").then((a) => {
         return a.json();
      })
         .then((prased) => {
            console.log(prased)
            setBlog(prased)
         })
   }, []);
   return <main className={styles.main}>
      {blog.map((blogdata) => {
         return <><div className={styles.box} key={blogdata.slug}>
            <Link href='/blogdata/blog.json'> <h2>
               {blogdata.title}
            </h2>
               <p>
                  {blogdata.content}
               </p>

            </Link>
         </div><h2 className={inter.className}>
               java script<span>-&gt;</span>
            </h2><p className={inter.className}>
               Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p></>
   
      })}
    
   

   </main>

};


export default Blog;
