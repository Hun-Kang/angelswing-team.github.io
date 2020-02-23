import React, { Fragment } from "react";
import { Link } from "gatsby";

import Author from '../Author/Author';
import './PostListing.css';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        author: postEdge.node.frontmatter.author,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map((post, idx) => (
          <Fragment key={`postlist-${idx}`}>
            <Link className='post-list' to={post.path} key={post.title}>
              <h1>{post.title}</h1> 
            </Link>
            by 
            <Author author={post.author} />
          </Fragment>
        ))}
      </div>
    );
  }
}

export default PostListing;
