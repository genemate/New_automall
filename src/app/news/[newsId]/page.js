export async function generateStaticParams() {
    return [{ newsId: "1" }, { newsId: "2" }, { newsId: "3" }];
  }
  
  function Post({ params }) {
    return <div>News detail {params.newsId}</div>;
  }
  
  export default Post;