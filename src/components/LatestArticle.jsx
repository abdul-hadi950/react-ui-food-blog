import React from 'react'

import { useState } from 'react'
import Cards from './Cards'
import {blogOne} from './blogs'



const LatestArticle = () => {
    const [PageCount, setPageCount] = useState(1);

    const prev = () => {
        if (PageCount === 1){ 
          return;
        } else {
          setPageCount(PageCount - 1);
        }
      }
    
      const next = () => {
        if (PageCount === 2){ 
          return;
        } else {
          setPageCount(PageCount + 1);
        }
      }

      const startIdx = (PageCount - 1) * 3;
      const endIdx = PageCount * 3;


    return (
        <>
            <section className='lastest-article'>
                <div className='title'>lastest article</div>
                <div className='cards-container'>
                    
                    {blogOne.slice(startIdx, endIdx).map((blogPost) => (
                        <Cards
                            key={blogPost.id}
                            id={blogPost.id}
                            img={blogPost.img}
                            title={blogPost.title}
                            description={blogPost.description}
                        />
                    ))}
                    

                </div>
                <div className='page-arrow'>
                    <div className="left-arrow-box" onClick={prev}>
                        <div className="left-arrow"></div>
                    </div>
                    <div className="page-count">{PageCount }/2</div>
                    <div className="right-arrow-box" onClick={next}>
                        <div className="right-arrow"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestArticle