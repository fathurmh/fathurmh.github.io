import React from "react";
import * as Markdown from "react-markdown";
const BlogContent = props => (
  <article className="media">
    <div className="media-left">
      <figure className="image is-128x128">
        <img src={props.icon} alt={props.title} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p className="title article-title">{props.title}</p>
        <Markdown
          source={
            props.limit
              ? props.content
                  .split(" ")
                  .splice(0, props.limit)
                  .join(" ")
                  .concat("...")
              : props.content
          }
        />
      </div>
      {props.children}
    </div>
  </article>
);
export default BlogContent;
