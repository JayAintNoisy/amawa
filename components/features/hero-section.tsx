import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      
      {/* 1. Parent container kinahanglan naay 'relative' para sa 'fill' */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/your-image-name.png" 
          alt="React Hooks Background"
          fill                     // Kini ang mopa-stretch sa image sa tibuok div
          priority                 // Para paspas mo-load (LCP fix)
          sizes="100vw"            // KINI ANG FIX sa Warning: Gi-ingnan nato ang Next.js sa gidak-on
          className="object-cover" // Para dili ma-itlog o ma-inat ang hitsura
        />
        
        {/* Overlay para mas klaro ang text */}
        <div className="absolute inset-0 bg-blue-900/20" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          React Hooks
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
           {/* Imong code boxes dinhi */}
        </div>
      </div>
    </section>
  )
}