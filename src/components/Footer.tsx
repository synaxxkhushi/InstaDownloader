import React from 'react';
import { Instagram, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">InstaReels Downloader</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A fast and free tool to download Instagram Reels videos in high quality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/anshopi__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://t.me/cyber_ansh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  How to Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Instagram: <a href="https://instagram.com/anshopi__" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">@anshopi__</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Telegram: <a href="https://t.me/cyber_ansh" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">t.me/cyber_ansh</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:contact@example.com" className="text-primary-600 dark:text-primary-400">contact@example.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by 
            <a href="https://instagram.com/anshopi__" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">
              Ansh
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} InstaReels Downloader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;