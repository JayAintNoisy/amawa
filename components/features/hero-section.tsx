import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/your-image-name.png" // ILISDI KINI SA SAKTONG FILE NAME (ex: /hooks-bg.png)
          alt="React Hooks Background"
          fill
          priority
          sizes="100vw"
          className="object-cover" // Kini ang mo-fix sa stretching
        />
        
        {/* Overlay para mas klaro ang text (Optional: I-adjust ang opacity /20) */}
        <div className="absolute inset-0 bg-blue-900/20" />
      </div>

      {/* 2. Content Layer (Text & Cards) */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          React Hooks
        </h1>
        
        {/* Container para sa imong Cards/Boxes */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
           {/* I-paste balik imong karaan nga code boxes/cards dinhi sa sulod */}
           
           {/* EXAMPLE CARD (Para naay makita):
           <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 w-64">
              <h3 className="text-white font-bold">useState</h3>
              <p className="text-white/70 text-sm">Manage local state</p>
           </div> 
           */}
        </div>
      </div>
    </section>
  )
}