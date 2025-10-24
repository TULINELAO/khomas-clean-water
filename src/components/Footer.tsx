import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="wrap fgrid container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand + Description */}
        <div>
          <div className="brand flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <div className="font-semibold text-lg">CSIP • Khomas Region</div>
          </div>
          <p className="fsmall text-sm opacity-90">
            Community Sanitation Improvement Programme. A multi-stakeholder effort to map, prioritise, and upgrade sanitation across Khomas.
          </p>
          <p className="fsmall text-sm mt-2 opacity-90">
            Windhoek, Namibia •{" "}
            <a href="mailto:team@csipkhomas.com" className="underline hover:no-underline">
              team@csipkhomas.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div> <h3 className="font-semibold mb-4">Quick Links</h3> <ul className="space-y-2 text-sm"> <li> <a href="#stats" className="opacity-90 hover:opacity-100 transition-opacity">Statistics</a> </li> <li> <a href="#mission" className="opacity-90 hover:opacity-100 transition-opacity">Our Mission</a> </li> <li> <a href="#map" className="opacity-90 hover:opacity-100 transition-opacity">Live Map</a> </li> <li> <a href="#get-involved" className="opacity-90 hover:opacity-100 transition-opacity">Get Involved</a> </li> </ul> </div>

        {/* Documents */}
        <div>
          <h4 className="font-semibold mb-3">Documents</h4>
          <p className="fsmall text-sm opacity-90">
            Census highlights & programme brief are summarised on this page; full references available on request.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form
            action="mailto:team@csipkhomas.com"
            method="post"
            encType="text/plain"
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-2 rounded bg-primary-foreground text-primary"
            />
            <button
              type="submit"
              className="bg-primary-foreground text-primary px-3 py-2 rounded hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          <p className="fsmall text-sm opacity-75 mt-2">
            We’ll send occasional updates (opt-out anytime).
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wrap copy border-t border-primary-foreground/20 text-center text-sm opacity-75 py-4">
        © {new Date().getFullYear()} CSIP Khomas • Built with OpenStreetMap & Leaflet
      </div>
    </footer>
  );
};

export default Footer;

