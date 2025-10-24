interface ImageOverlayProps {
  image: string;
  alt: string;
  children: React.ReactNode;
}

const ImageOverlay = ({ image, alt, children }: ImageOverlayProps) => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,65%,45%)]/70 via-[hsl(195,60%,50%)]/60 to-[hsl(190,55%,55%)]/50" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[hsl(200,70%,55%)] via-[hsl(180,45%,50%)] to-[hsl(30,40%,55%)] p-[2px] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.2)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-[hsl(200,70%,55%)]/95 via-[hsl(180,45%,50%)]/90 to-[hsl(30,40%,55%)]/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[hsl(30,40%,55%)]/20 rounded-full blur-3xl"></div>
              
              {/* Decorative dots pattern */}
              <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 opacity-20">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              
              <div className="relative z-10 text-white">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageOverlay;
