import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-gradient-to-b from-background/80 to-background/40">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Becoming Health Namibia" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <a href="#stats" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              Statistics
            </a>
            <a href="#map" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              Live Map
            </a>
            <Link to="/events" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link to="/collaborative" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              Collaborative Action
            </Link>
            <Button asChild size="sm">
              <a href="#get-involved">Get Involved</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border bg-background/95 backdrop-blur-xl">
            <Link
              to="/"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#stats"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistics
            </a>
            <a
              href="#map"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Live Map
            </a>
            <Link
              to="/events"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/collaborative"
              className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborative Action
            </Link>
            <Button asChild className="w-full">
              <a href="#get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
