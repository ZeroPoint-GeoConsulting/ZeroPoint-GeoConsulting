import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Upload, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectTypes = [
  "Engineering & Construction Surveying",
  "Geodetic & GNSS Control",
  "Renewable Energy / Solar Farm",
  "UAV Mapping & Photogrammetry",
  "GIS & Spatial Data",
  "Technical Consulting & QA/QC",
  "Tender Submission",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "",
    location: "",
    phone: "",
    email: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-navy pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 inline-block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-4">
              Contact ZeroPoint GeoConsulting
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Ready to discuss your project requirements? Whether you require engineering control, site-based survey execution, or UAV mapping — our team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a href="mailto:info@zeropointgeomatics.co.za" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="text-sm text-foreground group-hover:text-gold transition-colors">info@zeropointgeomatics.co.za</p>
                    </div>
                  </a>
                  <a href="tel:+27272316960" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                      <p className="text-sm text-foreground group-hover:text-gold transition-colors">+27 27 231 6960</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Coverage</p>
                      <p className="text-sm text-foreground">Operating Nationally Across South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Project Type *</label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Attach Tender Documents (Optional)
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer bg-background border border-dashed border-border rounded-md px-4 py-4 hover:border-gold/50 transition-colors">
                    <Upload size={18} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {fileName || "Click to upload files"}
                    </span>
                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.xls,.xlsx,.zip" />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
