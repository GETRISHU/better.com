import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Careers", path: "/" },
    { label: "Media", path: "/" },
    { label: "Partner With Us", path: "/" },
  ];

  const resourcesLinks = [
    { label: "Mortgage Calculator", path: "/mortgage-calculator" },
    { label: "Learning Center", path: "/" },
    { label: "Help Center", path: "/" },
    { label: "Reviews", path: "/" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/" },
    { label: "Terms of Use", path: "/" },
    { label: "NMLS Consumer Access", path: "/" },
    { label: "Licensing", path: "/" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold mb-4 block">
              Better
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Better Mortgage Corporation is a direct lender dedicated to providing 
              a fast, transparent digital mortgage experience backed by superior 
              customer support.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-xs text-primary-foreground/60 space-y-2">
            <p>
              © 2024 Better Home & Finance Holding Company and/or its affiliates. 
              Better is a family of companies serving all your homeownership needs.
            </p>
            <p>
              Better Mortgage Corporation provides home loans; Better Real Estate, LLC 
              provides real estate services; Better Cover, LLC provides insurance products; 
              and Better Settlement Services provides title insurance services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;