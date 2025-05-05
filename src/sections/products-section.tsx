import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  name: string;
  price: number;
  image: {
    src: string;
    alt: string;
  };
}

export function ProductsSection() {
  const products: Product[] = [
    {
      name: "Bedside Wooden Table",
      price: 299.99,
      image: { src: "/p11.jpg", alt: "Bedside Wooden Table" },
    },
    {
      name: "Minimalist Wooden Desk Table",
      price: 599.99,
      image: { src: "/p2.jpg", alt: "Minimalist Wooden Desk Table" },
    },
    {
      name: "Wooden Desk Table Extra",
      price: 799.99,
      image: { src: "/p3.jpg", alt: "Wooden Desk Table Extra" },
    },
  ];

  return (
    <section className="relative z-10 h-screen flex flex-col p-20 pt-40 max-h-screen">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col mb-10">
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="max-h-[650px] w-full object-cover rounded-3xl flex-1"
          />
          <div className="p-5 flex w-full justify-between items-center">
            <div className="flex gap-6">
              <h1 className="scroll-m-20 text-6xl font-light leading-none font-abc text-neutral-900">
                {product.name}
              </h1>
              <span className="scroll-m-20 text-5xl leading-none font-abc text-neutral-600">
                {product.price.toFixed(2)}$
              </span>
            </div>
            <Link href={`/cart/${encodeURIComponent(product.name)}`} className="text-2xl font-semibold bg-white h-full py-6 px-10 rounded-3xl border-2 border-neutral-800 cursor-pointer hover:bg-white/65">
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

