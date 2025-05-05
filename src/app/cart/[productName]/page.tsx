import { CounterButton } from "@/components/counter-button";
import styles from "./styles.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Product {
    name: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
}

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

export default function Page({ params }: { params: { productName: string } }) {
    const selectedProduct = products.find(
        (p) => p.name === decodeURIComponent(params.productName)
    );
    const otherProducts = products.filter(
        (p) => p.name !== decodeURIComponent(params.productName)
    );
    const recommendedProducts = otherProducts.slice(0, 2);

    return (
        <main className="h-screen w-full relative">
            <div className="w-full h-full absolute top-0 left-0">
                <div className={styles.dappledLight}>
                    <div className={styles.glow}></div>
                    <div className={styles.glowBounce}></div>
                    <div className={styles.perspective}>
                        <div className={styles.leaves}>
                            <svg style={{ width: 0, height: 0, position: "absolute" }}>
                                <defs>
                                    <filter
                                        id="wind"
                                        x="-20%"
                                        y="-20%"
                                        width="140%"
                                        height="140%"
                                    >
                                        <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                                            <animate
                                                attributeName="baseFrequency"
                                                dur="16s"
                                                keyTimes="0;0.33;0.66;1"
                                                values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003"
                                                repeatCount="indefinite"
                                            />
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic">
                                            <animate
                                                attributeName="scale"
                                                dur="20s"
                                                keyTimes="0;0.25;0.5;0.75;1"
                                                values="45;55;75;55;45"
                                                repeatCount="indefinite"
                                            />
                                        </feDisplacementMap>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.blinds}>
                            <div className={styles.shutters}>
                                {Array(24)
                                    .fill(null)
                                    .map((_, i) => (
                                        <div key={i} className={styles.shutter}></div>
                                    ))}
                            </div>
                            <div className={styles.vertical}>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.progressiveBlur}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="absolute h-full w-full p-7 flex gap-4">
                <div
                    className="w-full h-full rounded-3xl flex-1 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${selectedProduct?.image.src})` }}
                ></div>
                <div className="lg:w-[30rem] flex flex-col gap-6 h-full">
                    <Link
                        className="font-abc text-3xl font-medium tracking-tighter flex items-center gap-4"
                        href="/"
                    >
                        <ArrowLeft></ArrowLeft>Checkout
                    </Link>
                    <div className="w-full bg-white shadow-2xl p-4 rounded-md border border-neutral-700/30 flex justify-between gap-4">
                        <img
                            src={selectedProduct?.image.src}
                            alt={selectedProduct?.image.alt}
                            className="h-30 w-30 rounded object-cover"
                        />
                        <div className="flex-1 h-full w-full">
                            <div className="flex flex-1 justify-between">
                                <p className="text-2xl font-medium">{selectedProduct?.name}</p>
                                <span className="text-xl text-neutral-600 mt-1 font-medium font-abc">
                                    {selectedProduct?.price.toFixed(2)}$
                                </span>
                            </div>
                            <div className="text-neutral-600 mb-6">Limited Edition</div>
                            <CounterButton></CounterButton>
                        </div>
                    </div>
                    <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl font-abc text-center">
                        Recommanded Items For You
                    </h2>
                    {recommendedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="flex-1 w-full bg-white shadow-2xl p-4 rounded-md border border-neutral-700/30 flex justify-between gap-4 h-fit items-center"
                        >
                            <img
                                src={product.image.src}
                                alt={product.image.alt}
                                className="h-30 w-30 rounded object-cover"
                            />
                            <div className="flex-1 h-full w-full flex flex-col py-4">
                                <div className="flex flex-1 justify-between">
                                    <p className="text-2xl font-medium">{product.name}</p>
                                    <span className="text-xl text-neutral-600 mt-1 font-medium font-abc">
                                        {product.price.toFixed(2)}$
                                    </span>
                                </div>
                                <Link
                                    href={`/cart/${encodeURIComponent(product.name)}`}
                                    className="p-2 bg-[var(--primary)] text-white rounded w-20 hover:bg-[var(--primary)]/80 cursor-pointer inline-block text-center mt-4"
                                >
                                    + Add
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="w-full bg-white shadow-2xl p-4 rounded-md border border-neutral-700/30">
                        <div className="w-full flex justify-between">
                            <p className="text-lg">Total price</p>
                            <span className="text-2xl font-semibold font-abc">
                                {selectedProduct?.price.toFixed(2)}$
                            </span>
                        </div>
                        <p className="text-neutral-600 mb-6">
                            1 items, Estimated shipping: 1st January 2026
                        </p>
                        <button className="w-full h-20 text-xl font-bold tracking-tight bg-[var(--primary)] text-white/95 rounded-2xl hover:bg-[var(--primary)]/95 cursor-pointer">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
