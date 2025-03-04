import React from 'react';
import { Instagram, Download, Zap, Shield } from 'lucide-react';
import DownloaderForm from './DownloaderForm';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Instagram className="h-16 w-16 text-primary-600 dark:text-primary-400 animate-float" />
              <div className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                +
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            <span className="gradient-text dark:dark-gradient-text">Instagram Reels</span> Downloader
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Download Instagram Reels videos in high quality for free. No registration required.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-custom dark:shadow-custom-dark p-6 sm:p-8 mb-12 animate-slide-in">
          <DownloaderForm />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast & Easy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Download Instagram Reels in seconds with just a few clicks. No complicated process.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">High Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the highest quality version of Instagram Reels videos available.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">100% Safe</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No registration required. We don't store your videos or personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;