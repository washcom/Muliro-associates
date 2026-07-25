import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center brand-section-soft px-4">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-[#262626]">404</h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Page Not Found</h2>
        <p className="text-lg text-[#262626]/64 mb-6 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t max-w-md mx-auto">
          <p className="text-[#262626]/64 mb-4">Looking for something specific?</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/products" className="brand-link hover:underline">View Our Insurance Products</Link>
            <Link to="/quote" className="brand-link hover:underline">Request a Quote</Link>
            <Link to="/contact" className="brand-link hover:underline">Contact Us</Link>
            <Link to="/faq" className="brand-link hover:underline">Frequently Asked Questions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
