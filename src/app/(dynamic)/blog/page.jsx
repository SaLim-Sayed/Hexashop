import Image from "next/image";
import Link from "next/link";
import blog from "public/images/blog.jpg";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const metadata = {
  title: " Blog",
  description: "Generated by create next app",
};

export default async function Blog() {
  const data = await getData();
  const products = data.products;
  return (
    <div className=" container  grid justify-center lg:grid-cols-3 md:grid-col-3 grid-cols-1 gap-10">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/blog/${product.id}`}
          className=" mb-4  p-2   border-2 border-orange-300 rounded-2xl"
        >
          <div>
            <Image
              className=" object-cover rounded-xl max-h-[400px]"
              src={product.thumbnail}
              width={350}
              height={350}
              alt=""
            />
          </div>
          <div>
            <h1 className=" text-2xl">{product.title}</h1>
            <p className=" text-sm text-slate-400">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
