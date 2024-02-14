export async function generateStaticParams() {
    return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
  }
  
  function Post({ params }) {
    return <div>Product detail {params.productId}</div>;
  }
  

  export default Post;