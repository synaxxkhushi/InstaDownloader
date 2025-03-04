import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Instagram, ExternalLink } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Using Web3Forms API
      const apiKey = '4b030b42-d3b1-4434-89a8-8f6637c23b73';
      
      const formResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
          subject: `Contact Form Submission from ${formData.name}`,
        })
      });
      
      const data = await formResponse.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit the form');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center gradient-text dark:dark-gradient-text">
        Contact Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have questions, feedback, or need assistance? We're here to help! Fill out the form or reach out to us directly through any of our channels.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Instagram</h4>
                  <a 
                    href="https://instagram.com/anshopi__" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
                  >
                    @anshopi__ <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Telegram</h4>
                  <a 
                    href="https://t.me/cyber_ansh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
                  >
                    t.me/cyber_ansh <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We typically respond to all inquiries within 24-48 hours. For urgent matters, please reach out via Telegram for faster assistance.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
          
          {submitSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 animate-slide-in">
              <h4 className="text-green-800 dark:text-green-400 font-medium mb-2">Message Sent Successfully!</h4>
              <p className="text-green-700 dark:text-green-500">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                ></textarea>
              </div>
              
              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-700 dark:text-red-400 text-sm">{submitError}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;