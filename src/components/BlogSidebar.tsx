import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail, ArrowRight, BookOpen } from "lucide-react";

interface BlogSidebarProps {
  content: string;
  showOnlyTOC?: boolean;
  showOnlyActions?: boolean;
}

const BlogSidebar = ({ content, showOnlyTOC = false, showOnlyActions = false }: BlogSidebarProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // Extract headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4');
    
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const id = `heading-${index}`;
      const text = heading.textContent || '';
      const level = parseInt(heading.tagName.charAt(1));
      return { id, text, level };
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (showOnlyTOC) {
    return (
      <div className="w-full">
        {/* Table of Contents - Sleeker Design */}
        {headings.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
              <BookOpen className="w-4 h-4 mr-2 text-orange-500" />
              Contents
            </h3>
            <div className="space-y-1">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`block text-xs transition-colors px-2 py-1.5 rounded-md ${
                    activeSection === heading.id
                      ? 'bg-orange-50 text-orange-600 font-medium border-l-2 border-orange-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } ${heading.level === 3 ? 'ml-3' : ''} ${heading.level === 4 ? 'ml-6' : ''}`}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (showOnlyActions) {
    return (
      <div className="w-full space-y-6">
        {/* Social Media & CTA - Compact Design */}
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl shadow-sm border border-orange-100 p-4">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Connect With Us</h3>
          
          <div className="flex justify-center space-x-2 mb-4">
            <a
              href="https://twitter.com/cloudadda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/company/cloudadda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/cloudadda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@cloudadda.com"
              className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Ready to Get Started?</h4>
            <p className="text-xs text-gray-600 mb-3">
              Build your cloud infrastructure with CloudAdda's reliable solutions.
            </p>
            <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs">
              Start Free Trial
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Ad Space - Compact */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg p-4">
            <h4 className="font-bold mb-1 text-sm">🚀 New: GPU Instances</h4>
            <p className="text-xs mb-3 opacity-90">
              AI/ML workloads just got faster. Try our new GPU-powered instances.
            </p>
            <Button variant="secondary" size="sm" className="bg-white text-purple-600 hover:bg-gray-100 text-xs">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Default behavior - show all components
  return (
    <div className="w-80 space-y-8">
      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-orange-500" />
            Table of Contents
          </h3>
          <div className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm transition-colors px-3 py-2 rounded-lg ${
                  activeSection === heading.id
                    ? 'bg-orange-50 text-orange-600 font-medium border-l-2 border-orange-500'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                } ${heading.level === 3 ? 'ml-4' : ''} ${heading.level === 4 ? 'ml-8' : ''}`}
              >
                {heading.text}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Social Media & CTA */}
      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl shadow-lg border border-orange-100 p-6 sticky top-96">
        <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://twitter.com/cloudadda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/cloudadda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/cloudadda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@cloudadda.com"
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
          <p className="text-sm text-gray-600 mb-4">
            Build your cloud infrastructure with CloudAdda's reliable, high-performance solutions.
          </p>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Ad Space */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center sticky top-[600px]">
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl p-6">
          <h4 className="font-bold mb-2">🚀 New: GPU Instances</h4>
          <p className="text-sm mb-4 opacity-90">
            AI/ML workloads just got faster. Try our new GPU-powered instances.
          </p>
          <Button variant="secondary" size="sm" className="bg-white text-purple-600 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
