export function HeaderSection() {
    const TITLE = "Live With Intention";
    const DESCRIPTION = "Our handcrafted furniture is born from natural materials, shaped with care, and made to last.";
    const SLOGAN = "Furniture with a"
    return (
        <section className="h-screen z-10 relative p-7 font-abc text-white">
            <div className="w-full h-full rounded-3xl bg-[url(/natural-landscape.png)] p-20 pt-40 flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                    <h1 className="scroll-m-20 text-6xl font-light leading-none text-shadow-lg">{TITLE}</h1>
                    <h1 className="scroll-m-20 text-4xl font-sans max-w-[17em]">{DESCRIPTION}</h1>
                </div>
                <div className="flex w-full justify-between items-center">
                    <h1 className="scroll-m-20 text-6xl font-light leading-none text-shadow-lg">{SLOGAN} <span className="italic underline">soul.</span></h1>
                    <button className="p-10 px-24 bg-white text-black text-3xl rounded-xl hover:bg-gray-200 cursor-pointer font-sans">Explore Now</button>
                </div>
            </div>
        </section>
    );
}
