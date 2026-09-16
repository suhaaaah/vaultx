import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { footerQuickLinks, footerServices } from "@/lib/site-data";
import { SocialLinks } from "./social-links";

const footerLegal = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 bg-black py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link href="/" className="mb-6 inline-block transition-opacity hover:opacity-80" aria-label="VaultX home">
              <img src="/images/vaultx-logo-blue.svg" alt="VaultX" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mb-6 font-light leading-relaxed text-gray-400">
              VaultX is Dubai&apos;s trusted provider of premium logistics and warehousing solutions,
              specializing in cryptocurrency mining equipment logistics. We make storage, handling, and
              distribution simple and reliable for businesses and individuals, with expert services for
              crypto hardware imports, secure storage, and specialized transportation.
            </p>
            <p className="text-xs text-gray-500">VAULTX SECURE LOGISTICS L.L.C</p>
          </div>

          <FooterList title="QUICK LINKS" items={footerQuickLinks} />

          <FooterList title="OUR SERVICES" items={footerServices} />

          <div className="font-light">
            <h4 className="mb-6 text-sm font-light tracking-wider text-white">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" aria-hidden="true" />
                <a href="tel:+971586992781" className="transition-colors duration-500 hover:text-yellow-500">
                  +971 58 699 2781
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" aria-hidden="true" />
                <a href="mailto:info@vaultx.ae" className="transition-colors duration-500 hover:text-yellow-500">
                  info@vaultx.ae
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" aria-hidden="true" />
                <p>79VV+R8W, Al Qusais Industrial Area 3, Dubai, UAE</p>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" aria-hidden="true" />
                <div>
                  <p>Office Hours: 09:00 - 20:00</p>
                  <p>Warehouse Hours: 24/7</p>
                </div>
              </div>
              <SocialLinks className="mt-6 gap-4" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center lg:flex-row lg:text-left">
          <p className="text-sm font-light text-gray-500">
            © {new Date().getFullYear()} VaultX Secure Logistics L.L.C. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-light text-gray-500 transition-colors duration-500 hover:text-yellow-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-6 text-sm font-light tracking-wider text-white">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-light text-gray-400 transition-colors duration-500 hover:text-yellow-500"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
