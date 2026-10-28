'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header/Header';
import './Form.css';

interface ServiceOption {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceOption[] = [
  { id: 'corporate', name: 'Corporate Governance & Strategy', description: 'Comprehensive legal advisory for corporate operations and structure.' },
  { id: 'ma', name: 'Mergers & Acquisitions', description: 'Transaction structuring, due diligence, and negotiation guidance.' },
  { id: 'ip', name: 'Intellectual Property & Licensing', description: 'Protection, registration, and monetization of key IP assets.' },
  { id: 'private', name: 'Private Counsel & Advisory', description: 'Dedicated personal legal representation for high-net-worth clients.' }
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '01:30 PM',
  '03:45 PM',
  '05:00 PM'
];

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<number>(16);
  const [selectedTime, setSelectedTime] = useState<string>('01:30 PM');
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    goals: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const emptyPrefixDays = [27, 28, 29, 30];

  return (
    <>
      <Header />
      <main className="pure-main ">
        
        {/* Dekoratif Arka Plan Işımaları */}
        <div className="pure-glow-1" />
        <div className="pure-glow-2" />

        {/* Ana Konteyner */}
        <div className="pure-card ">
          
          {/* Başlık Alanı */}
          <div className="pure-header-box">
            <span className="pure-badge">Direct Executive Consultation</span>
            <h1 className="pure-main-title">Schedule an Appointment</h1>
          </div>

          {isSubmitted ? (
            /* Onay Ekranı */
            <div className="pure-success-wrapper">
              <div className="pure-success-icon">✓</div>
              <h2 className="pure-success-heading">Consultation Requested</h2>
              <p className="pure-success-desc">
                Thank you, <span className="pure-text-bold">{formData.fullName || 'Valued Client'}</span>. Your appointment request for <span className="pure-text-gold">October {selectedDate}, 2026 at {selectedTime}</span> has been received. Our executive associate will confirm details via <span className="pure-text-bold">{formData.email || 'your email'}</span>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="pure-btn-submit"
              >
                Book Another Session
              </button>
            </div>
          ) : (
            /* Randevu Formu */
            <form onSubmit={handleSubmit} className="pure-form-grid">
              
              {/* Sol Kolon: Takvim ve Saat */}
              <div className="pure-left-pane">
                <div>
                  <div className="pure-cal-top">
                    <h3 className="pure-cal-month">October 2026</h3>
                    <span className="pure-utc">UTC+03:00</span>
                  </div>

                  <div className="pure-week-grid">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>

                  <div className="pure-days-grid">
                    {emptyPrefixDays.map((d) => (
                      <div key={`prev-${d}`} className="pure-day-muted">
                        {d}
                      </div>
                    ))}

                    {daysInMonth.map((day) => {
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          type="button"
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`pure-day-btn ${isSelected ? 'active' : ''}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Saat Dilimleri */}
                <div className="pure-time-section">
                  <label className="pure-input-label">Select Available Time Slot</label>
                  <div className="pure-time-grid">
                    {TIME_SLOTS.map((time) => {
                      const isTimeSelected = selectedTime === time;
                      return (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`pure-time-btn ${isTimeSelected ? 'active' : ''}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Özet Alanı */}
                <div className="pure-summary-box">
                  <span>Selected Schedule:</span>
                  <span className="pure-summary-val">Oct {selectedDate}, 2026 • {selectedTime}</span>
                </div>
              </div>

              {/* Sağ Kolon: Form Girdi Alanları */}
              <div className="pure-right-pane">
                <div className="pure-fields-stack">
                  
                  <div className="pure-row-dual">
                    <div className="pure-field-block">
                      <label className="pure-input-label">Full Name <span className="pure-asterisk">*</span></label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Elena Vance"
                        className="pure-text-input"
                      />
                    </div>

                    <div className="pure-field-block">
                      <label className="pure-input-label">Email Address <span className="pure-asterisk">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="elena@company.com"
                        className="pure-text-input"
                      />
                    </div>
                  </div>

                  <div className="pure-field-block">
                    <label className="pure-input-label">Service / Practice Area</label>
                    <select
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="pure-select-box"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id} className="pure-option-item">
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pure-field-block">
                    <label className="pure-input-label">Subject / Matter Title</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of the consultation subject"
                      className="pure-text-input"
                    />
                  </div>

                  <div className="pure-field-block">
                    <label className="pure-input-label">Brief Consultation Goals</label>
                    <textarea
                      name="goals"
                      rows={3}
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="Outline key questions or objectives for this strategy session..."
                      className="pure-textarea-box"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="pure-btn-submit"
                >
                  <span>Book Consultation</span>
                  <span>→</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </main>
    </>
  );
}