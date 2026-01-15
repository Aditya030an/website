export default function Footer() {
    return (
      <footer className="bg-white pt-56 pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
  
          {/* Soft divider with breathing room */}
          <div className="mb-40 h-px w-full bg-[#003060]/10" />
  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
  
            {/* BRAND STATEMENT */}
            <div className="lg:col-span-6">
              <h2 className="text-[clamp(3rem,5vw,4rem)] leading-[1.04] font-medium text-[#003060]">
                Thoughtful digital
                <br />
                products — built
                <br />
                to last.
              </h2>
  
              <p className="mt-10 max-w-md text-[#055c9d] text-xl leading-relaxed">
                We partner with ambitious teams to design and build digital
                experiences that remain relevant, scalable and meaningful
                over time.
              </p>
            </div>
  
            {/* NAV + CONTACT */}
            <div className="lg:col-span-6 flex lg:justify-end">
              <div className="flex flex-col gap-20">
  
                {/* Navigation */}
                <nav className="flex flex-wrap gap-x-14 gap-y-6 text-[#003060] text-xl font-medium">
                  <a href="/" className="hover:opacity-70 transition">
                    Home
                  </a>
                  <a href="/services" className="hover:opacity-70 transition">
                    Services
                  </a>
                  <a href="/work" className="hover:opacity-70 transition">
                    Work
                  </a>
                  <a href="/about" className="hover:opacity-70 transition">
                    About
                  </a>
                  <a href="/contact" className="hover:opacity-70 transition">
                    Contact
                  </a>
                </nav>
  
                {/* Contact */}
                <div className="text-[#055c9d] text-xl">
                  <p>
                    <span className="opacity-60">Email</span>
                    <br />
                    <a
                      href="mailto:hello@yourstudio.com"
                      className="underline underline-offset-8"
                    >
                      hello@yourstudio.com
                    </a>
                  </p>
                </div>
  
              </div>
            </div>
          </div>
  
          {/* Bottom meta */}
          <div className="mt-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 text-sm text-[#003060]/60">
            <span>© {new Date().getFullYear()} Your Studio</span>
            <span>Design · Technology · Strategy</span>
          </div>
  
        </div>
      </footer>
    );
  }
  