import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/farhanEditya",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammad-farhan-editya",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/farhanEditya",
    label: "Twitter",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Muhammad Farhan Editya. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Next.js & ShadCN UI</span>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
