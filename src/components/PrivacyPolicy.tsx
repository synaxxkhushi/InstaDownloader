import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center gradient-text dark:dark-gradient-text">
        Privacy Policy
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 mb-8">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Overview</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This Privacy Policy explains how InstaReels Downloader collects, uses, and protects your information when you use our service. We respect your privacy and are committed to protecting your personal data.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 mb-8">
        <div className="flex items-center mb-4">
          <Lock className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Information We Collect</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          When you use our Instagram Reels downloader service, we collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Instagram Reel URLs that you provide for downloading</li>
          <li>Basic usage data such as browser type, device information, and IP address</li>
          <li>Cookies and similar tracking technologies to enhance your experience</li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 mb-8">
        <div className="flex items-center mb-4">
          <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We use the collected information for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Processing your download requests</li>
          <li>Improving our service and user experience</li>
          <li>Analyzing usage patterns to optimize performance</li>
          <li>Preventing abuse and ensuring compliance with our Terms of Service</li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 mb-8">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Retention and Security</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We do not store Instagram Reels videos on our servers. URLs are processed in real-time and are not permanently stored. We implement appropriate security measures to protect your data from unauthorized access or disclosure.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          By using our service, you acknowledge that you are responsible for ensuring that your download of Instagram content complies with Instagram's Terms of Use and any applicable laws.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
        <p className="text-gray-600 dark:text-gray-400">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            Instagram: <a href="https://instagram.com/anshopi__" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">@anshopi__</a>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Telegram: <a href="https://t.me/cyber_ansh" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">t.me/cyber_ansh</a>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Email: <a href="mailto:contact@example.com" className="text-primary-600 dark:text-primary-400">contact@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;