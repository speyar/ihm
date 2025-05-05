export function MaterialsSection() {
    return (
        <section className="relative h-screen flex pt-40 pb-10 px-10 flex-col justify-between">
            <div className="w-full grid grid-cols-3 gap-12">
                <div className="flex flex-col">
                    <img src="/oak.png" alt="Solid Oak" className="w-full h-[280px] bg-amber-300 rounded-3xl"></img>
                    <div className="flex justify-between p-4">
                        <p className="font-abc font-bold text-neutral-800 text-2xl">Solid Oak</p>
                        <p className="font-semibold text-xl text-neutral-500 max-w-[10em]">Strength that deepens with age.</p>
                    </div>

                </div>
                <div className="flex flex-col">
                    <img src="/linen.png" alt="Natural Linen" className="w-full h-[280px] bg-amber-300 rounded-3xl"></img>
                    <div className="flex justify-between p-4">
                        <p className="font-abc font-bold text-neutral-800 text-2xl">Natural Linen</p>
                        <p className="font-semibold text-xl text-neutral-500 max-w-[10em]">Breathable softness, grounded in nature.</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="/oil.png" alt="Beeswax & Plants oils" className="w-full h-[280px] bg-amber-300 rounded-3xl object-cover"></img>
                    <div className="flex justify-between p-4">
                        <p className="font-abc font-bold text-neutral-800 text-2xl">Beeswax & Plant Oils</p>
                        <p className="font-semibold text-xl text-neutral-500 max-w-[10em]">Protection without plastic.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between pr-40">
                <h1 className="scroll-m-20 text-7xl leading-none font-light text-shadow-lg font-abc text-neutral-900 max-w-[7em] text-balance">Made with What Matters</h1>
                <p className="font-semibold text-xl text-neutral-500 max-w-[15em] text-balance">Together, these materials allow us to craft furniture that doesn’t just fill a room — it lives with you. Quietly, beautifully, and with purpose.</p>
            </div>
        </section>
    )
}