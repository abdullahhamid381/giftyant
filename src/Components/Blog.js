import React, { Fragment } from 'react';
import '../scss/Blog.scss';
import { blog } from './Data';

const Blog = () => {
    return (
        <Fragment>
            <div className='blog-parent'>
                <div>
                   <center> <h2>FROM THE BLOG</h2>  </center>
                </div>
              <div className='blog-card-grid'>
              {
                blog.map((map)=>{
                    return(
                        <div>
                        <div>
                            <img src={map.img} alt="" />
                        </div>
                        <div className='text-parent'>
                            <h4>{map.h1}</h4>
                            <p>{map.p}</p>
                        </div>
                    </div>
                    )
                })
              }
              </div>

       
            </div>
        </Fragment>
    )
}

export default Blog