import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden flex items-center justify-center">
      
      {/* 1. BACKGROUND LAYER (Dapat naa sa luyo permi) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/your-image-name.png" // Siguruha nga husto ang file name sa public folder
          alt="React Hooks Background"
          fill
          priority
          sizes="100vw"
          className="object-cover" 
        />
        {/* Overlay: Kini ang mopa-itom gamay sa background para makita ang puti nga text */}
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      {/* 2. CONTENT LAYER (Dapat naa sa ibabaw: z-10) */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Ang imong Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
          React Hooks
        </h1>

        {/* Dinhi nimo ibutang ang imong mga Cards o uban pang output */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 w-full">
          
          {/* SAMPLE OUTPUT CARD: Para makita nimo kung ni-work ba */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-2">useEffect</h2>
            <p className="text-white/80">
              Kini nga card dapat makita na nimo karon sa ibabaw sa imong background.
            </p>
          </div>

          {/* I-paste imong uban nga cards dinhi sa ubos... */}

        </div>
      </div>
    </section>
  )
}