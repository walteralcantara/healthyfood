import React from 'react';
import Slider from 'react-slick';

import {
  ContainerOurBlog,
  ContentOurBlog,
  ImageOurBlog,
  ContentTextOurBlog,
  TitleOurBlog,
  SubtitleOurBlog,
  ImageBlogCard,
} from './styled';

import api from '../../../../services/api.json';

export default function OurBlog() {
  let settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px 60px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ContainerOurBlog id="blog">
      <ContentOurBlog>
        <ContentTextOurBlog>
          <TitleOurBlog>Read Our Blog</TitleOurBlog>
          <SubtitleOurBlog>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </SubtitleOurBlog>
        </ContentTextOurBlog>
        <ImageOurBlog>
          <Slider {...settings}>
            {api.blog.map((post) => (
              <ImageBlogCard key={post.title}>
                <div>
                  <img src={post.img} alt={post.title} />
                </div>
                <h3>{post.title}</h3>
                <div>
                  <img src={post.author.photo} alt={post.author.name} />
                  <span>{post.author.name}</span>
                </div>
              </ImageBlogCard>
            ))}
          </Slider>
        </ImageOurBlog>
      </ContentOurBlog>
    </ContainerOurBlog>
  );
}
