import React, { useState } from 'react';
import { ContentData } from '../types';
import { MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  text: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ text }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connects to the backend server (Assuming it's running on port 3001)
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{text.title}</h2>
            <p className="text-lg text-gray-600 mb-10">{text.subtitle}</p>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{text.addressTitle}</h4>
                  <p className="text-gray-600 text-lg">{text.address}</p>
                </div>
              </div>
              
              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{text.phoneTitle}</h4>
                  <div className="flex flex-col gap-1">
                    {text.phones.map((phone, idx) => (
                         <p key={idx} className="text-gray-600 text-lg dir-ltr text-start font-mono">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 font-sans">Info@1plumeria.com</p>
                  <p className="text-gray-600 font-sans">salse@1plumeria.com</p>
                  <p className="text-gray-600 font-sans">sppurte@1plumeria.com</p>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-md h-48 bg-gray-100 flex items-center justify-center border border-gray-200 relative group">
               <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors"></div>
               <div className="text-center z-10">
                 <MapPin className="mx-auto text-brand-primary mb-2 opacity-80" size={32}/>
                 <span className="text-gray-500 font-medium">Map Location: Al-Tal, Rural Damascus</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{text.successMessage.split('!')[0]}!</h3>
                <p className="text-gray-600">{text.successMessage.split('!')[1] || text.successMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{text.name}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{text.email}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{text.message}</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm">
                    <AlertCircle size={18} />
                    {text.errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-brand-blue transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {text.sending}
                    </>
                  ) : (
                    text.send
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;