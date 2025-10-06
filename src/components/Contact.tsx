import { useState } from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('x75k-impwh37C8J5M');

      // Send email using your service ID and template ID
      await emailjs.send(
        'service_2m520bb', // Your Service ID
        'template_bpk600d', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Prathamesh', // Your name
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'patilprathameshdilip@gmail.com',
      href: 'mailto:patilprathameshdilip@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9529347570',
      href: 'tel:+919529347570'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/prathameshP120',
      href: 'https://github.com/prathameshP120'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-3 sm:p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-200 group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-400">{info.label}</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors duration-200 text-sm sm:text-base break-all">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-400">Let's Connect!</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a conversation about technology and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com/in/prathamesh-patil-992ba8288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-center text-sm sm:text-base"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/prathameshP120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-center text-sm sm:text-base"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700 text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-cyan-400">Download Resume</h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Get a detailed overview of my experience, skills, and projects
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-700 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2024 Prathamesh Patil. Built with React & Tailwind CSS.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Designed and developed with ❤️
        </p>
      </div>
    </section>
  );
};

export default Contact;
