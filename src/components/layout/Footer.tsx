import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AreebKhan619',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mareebkhan',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-300 max-w-md">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Areeb Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}