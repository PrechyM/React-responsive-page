import React from 'react'
import './article.css'

const Article = ({imgUrl,date,title,text}) => {
  return (
    <div className='responsive__blog-container_article'>
      <div className='responsive__blog-container_article-image'>
        <img src={imgUrl} alt='blog_img' />
      </div>
      <div className='responsive__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p1>{text}</p1>
        </div>
        <p>Read the entire article</p>
      </div>
    </div>
  )
}

export default Article