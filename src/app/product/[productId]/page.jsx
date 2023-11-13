export async function generateStaticParams() {
  return [{ productId: "one" }, { productId: "two" }, { productId: "three" }];
}

function Post({ params }) {
  return <div>Post {params.productId}</div>;
}

export default Post;
