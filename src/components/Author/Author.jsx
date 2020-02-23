import React from 'react';

const githubIdByAuthor = {
  Hyeokjoo: '9oelM',
  hyeokjoo: '9oelM',
};

const Author = ({ author }) => (
  <a className='post-list-author' href={`https://github.com/${githubIdByAuthor[author]}`}> 
    {` ${author}`}
  </a>
)

export default Author;
