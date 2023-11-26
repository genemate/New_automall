export async function generateStaticParams() {
  return [{ productId: "one" }, { productId: "two" }, { productId: "three" }];
}

function Post({ params }) {
  return <div>Product detail {params.productId}</div>;
}

export default Post;
