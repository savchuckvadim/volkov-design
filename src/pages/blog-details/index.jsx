import React from "react";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import MainSkin from "src/layouts/main-skin";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainSkin>
      <PageHeader
        title="post details"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
          { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails />
    </ MainSkin>
  );
};

export default BlogDetails;
