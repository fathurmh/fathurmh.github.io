import React from "react";
import PageContent from "./PageContent";
import BlogNav from "./../Shared/BlogNav";
import BlogContent from "./../Shared/BlogContent";

const BlogPost = ({
  location: {
    state: { props }
  }
}) => (
  <PageContent>
    <BlogNav date={props.date} status={props.status} to="/blog" />
    <BlogContent {...props} />
  </PageContent>
);
export default BlogPost;
