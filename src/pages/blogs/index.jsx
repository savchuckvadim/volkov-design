import React from 'react'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'
import MainSkin from 'src/layouts/main-skin'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainSkin>
        <PageHeader
          title="Our Blogs"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "blogs", url: "/blogs" },
          ]}
        />
        <BlogsList />
      </MainSkin>
    );
}

export default Blogs;