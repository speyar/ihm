export function VisionSection() {
    return (
        <section className="relative h-screen grid grid-cols-2 z-10">
            <div className="p-15">
                <img src="/craftin.jpg" alt="" className="h-full object-cover rounded-3xl" />
            </div>
            <div className="p-20 flex flex-col gap-25">
                <h1 className="scroll-m-20 text-6xl leading-none text-shadow-md text-black font-abc text-left text-balance">Rooted in Nature, Shaped by Hand.</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-2xl text-gray-900 leading-8 text-balance text-left">We value slowness, sustainability, and care in everything we make. Each piece is handcrafted—never rushed, never mass-produced.</p>
                    <hr className="border-dashed border-gray-400 my-4" />
                    <p className="text-2xl text-gray-900 leading-8 text-balance text-left">Handmade furniture feels different because it is different. It holds the warmth of human touch and the quiet strength of time.</p>
                    <hr className="border-dashed border-gray-400 my-4" />
                    <p className="text-2xl text-gray-900 leading-8 text-balance text-left">Wood is our partner. Its grain, texture, and imperfections guide us, reminding us to work with nature, not against it.</p>
                </div>
            </div>
        </section>
    );
}