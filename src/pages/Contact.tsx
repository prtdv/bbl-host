import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "../lib/supabaseClient";


const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { phone, subject, message } = formData;

    if (!phone || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    const { error } = await supabase
      .from('contacts')
      .insert([{ phone, subject, message }]);

    if (error) {
      alert("Error submitting form: " + error.message);
    } else {
      alert("Form submitted successfully!");
      setFormData({ phone: '', subject: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center justify-center p-4 gap-8">
      <div className="grid place-items-center">
        <img 
          src="/lovable-uploads/c6210870-ca22-41ef-baf1-8e8a651b2529.png"
          alt="Colorful cards grid"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-6 py-4 text-lg bg-white/90 border-2 rounded-2xl"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-6 py-4 text-lg bg-white/90 border-2 rounded-2xl"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your text here....."
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-6 py-4 text-lg bg-white/90 border-2 rounded-2xl resize-none"
            required
          />
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-xl rounded-2xl shadow-lg font-semibold transition-all"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
