import React from 'react';
import { Copy, Clipboard, Download, CheckCircle } from 'lucide-react';

const HowToUse: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center gradient-text dark:dark-gradient-text">
        How to Download Instagram Reels
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
            <Clipboard className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Step 1: Copy URL</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Open Instagram and navigate to the Reel you want to download. Tap on the three dots and select "Copy Link".
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
            <Copy className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Step 2: Paste URL</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Return to our website and paste the copied Instagram Reel URL into the input field on our homepage.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
            <Download className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Step 3: Download</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Click the "Download" button and wait for the process to complete. Then click on the download link to save the video.
          </p>
        </div>
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          Tips for Successful Downloads
        </h3>
        
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2">•</span>
            Make sure the Instagram Reel is from a public account
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2">•</span>
            Ensure you're copying the direct link to the Reel, not just the profile URL
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2">•</span>
            For mobile users, you can share the Reel and choose "Copy Link" from the share menu
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2">•</span>
            If download doesn't start, try refreshing the page and pasting the URL again
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowToUse;