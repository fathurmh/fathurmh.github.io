import React from "react";
import * as contentful from "contentful";
import BlogItem from "./Component/BlogItem";
import PageHeader from "./Component/PageHeader";

class Blog extends React.Component {
  state = {
    posts: []
  };
  client = contentful.createClient({
    space: "69zp2nt4x5qn",
    accessToken:
      "5bf83c69b36d12ee01ab1f7d11ac1270bebabe2f6b3a8efe6e31c01023c5485a"
  });
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };
  render() {
    return (
      <div className="container">
        <PageHeader color="" title="psychode">
          <strong>life, is, better, with, code.</strong>
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}
export default Blog;
