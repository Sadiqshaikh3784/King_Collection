import heroVideo from "../assets/Videos/1a8e7ac895.mp4";
export const Hero = () => {
    return (<>
        <section className='relative h-screen'>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black/40"></div>
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-20 flex h-full items-center justify-center">
                <div className="text-center text-white">
                   <h1 className="text-6xl md:text-7xl font-bold">
                        Wear Your Attitude
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
                        Oversized Tees • Baggy Jeans • Streetwear • Premium Fits
                        — Everything You Need To Stand Out.
                    </p>

                    <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-md font-semibold text-lg transition duration-300">
                        Explore Collection
                    </button>
                </div>
            </div>




        </section>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-3xl">
  ↓
</div>
</>
    )
}
