'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import services from '@/data/services';

const AppointmentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const formRef = useRef();

  useEffect(() => {
    // Check if the user has already seen or dismissed the modal in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenAppointmentModal');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenAppointmentModal', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        "service_7z6i26k",
        "template_8l3890r",
        formRef.current,
        "pW0v2k9T7X9Y8Z1A2"
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
          // Automatically close modal after success
          setTimeout(() => setIsOpen(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus('error');
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center px-4 py-6 md:p-12 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
        onClick={closeModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-700 flex flex-col md:flex-row">

        {/* Left Accent (Mobile Top) */}
        <div className="w-full md:w-1/3 bg-primary p-8 md:p-10 flex flex-col justify-center text-slate-900 border-b md:border-b-0 md:border-r border-slate-900/10">
          <Calendar size={48} className="mb-6 opacity-80" />
          <h2 className="font-headline text-3xl font-black leading-tight mb-4">
            Book Your <br /> Appointment
          </h2>
          <p className="font-body text-sm font-semibold opacity-70">
            Let's start your journey towards a healthier, brighter smile today.
          </p>
        </div>

        {/* Right Form Area */}
        <div className="flex-1 p-8 md:p-12 relative">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X size={24} />
          </button>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Full Name</label>
              <input
                name="user_name"
                required
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Phone Number</label>
                <input
                  name="user_phone"
                  type="tel"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium"
                  placeholder="+91..."
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Service Required</label>
              <select
                name="service"
                required
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Select a treatment</option>
                {services.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Message</label>
              <textarea
                name="message"
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium resize-none"
                placeholder="Any specific dental concerns?"
                rows="2"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-slate-900 text-white rounded-xl py-4 font-headline font-bold text-lg hover:bg-primary hover:text-slate-900 transition-all active:scale-95 disabled:opacity-70 disabled:grayscale"
            >
              {status === 'sending' ? 'Registering...' : 'Book My Slot'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-xs font-bold flex items-center gap-2 justify-center py-2 bg-green-50 rounded-lg">
                <CheckCircle2 size={16} /> Appointment request dispatched!
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-600 text-xs font-bold flex items-center gap-2 justify-center py-2 bg-red-50 rounded-lg">
                <AlertCircle size={16} /> Something went wrong. Call +91 99805 67389.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
