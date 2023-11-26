export async function generateStaticParams() {
    return [{ newsId: "one" }, { newsId: "two" }, { newsId: "three" }];
  }
  
  function News({ params }) {
    return <div>News detail {params.newsId}</div>;
  }
  
  export default News;
