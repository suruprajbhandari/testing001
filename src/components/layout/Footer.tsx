export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold tracking-tighter text-gradient">
            Portfolio
          </p>
          <p className="text-sm text-foreground/60 mt-2">
            Aspiring Computer Engineer. Building the future.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-foreground/60 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-foreground/60 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-foreground/60 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-12 text-center text-sm text-foreground/40">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
