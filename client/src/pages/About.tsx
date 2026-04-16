import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, ShieldCheck, HardHat, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const techItems = [
  "Advanced GNSS RTK & PPK Systems",
  "Geodetic Network Adjustment Software",
  "UAV Aerial Survey Platforms",
  "Photogrammetric Processing Systems",
  "GIS & Spatial Analytics Platforms",
  "Survey QA/QC & Accuracy Validation Systems",
];

const compliance = [
  { icon: Award, text: "Registered Professional Engineering Surveyor" },
  { icon: ShieldCheck, text: "Compliant with South African Geomatics Council regulations" },
  { icon: ShieldCheck, text: "Professional Indemnity Insured" },
  { icon: HardHat, text: "Health & Safety Compliant Field Operations" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-navy pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-4">
              Precision Begins at the Origin
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              A professional engineering surveying and geomatics consultancy built on discipline, accuracy, and field capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              ZeroPoint GeoConsulting (Pty) Ltd is a professional engineering surveying and geomatics consultancy led by a Registered Professional Engineering Surveyor. We support infrastructure, construction, renewable energy, municipal, mining, and industrial projects through disciplined control methodologies, integrated spatial technologies, and rigorous QA/QC systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We operate nationally within South Africa, supporting both private and public sector infrastructure development. At ZeroPoint, precision begins at the origin — the baseline of every project's structural integrity, financial protection, and long-term performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Commitment */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeading label="Our Purpose" title="Vision, Mission & Commitment" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Our Vision",
                text: "To strengthen South Africa's built environment through disciplined engineering surveying, modern spatial intelligence, and the responsible application of professional skill — ensuring that precision serves progress beyond profit.",
              },
              {
                title: "Our Mission",
                text: "To deliver technically defensible surveying and geospatial solutions that uphold professional standards, support infrastructure reliability, and contribute to sustainable development across South Africa.",
              },
              {
                title: "Our Commitment",
                text: "We measure with accountability. We verify with discipline. We deliver with confidence. Precision is not just technical — it is financial, structural, and reputational.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Execution */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            label="Field Execution"
            title="Site-Based Deployment & Technical Support"
            description="ZeroPoint deploys trained survey teams to operate within live infrastructure and construction environments. Our teams integrate directly with project engineers, contractors, and project managers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Engineering-grade instrumentation",
              "Site safety compliant teams",
              "Real-time GNSS deployment",
              "Active construction coordination",
              "Immediate field-based problem resolution",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={16} className="text-gold shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 font-display font-semibold text-foreground text-lg">
            We are not only advisors — we execute.
          </p>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <SectionHeading
            label="Technology & Systems"
            title="Modern Instrumentation. Engineering Discipline."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {techItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-navy-light/30 rounded-md px-5 py-4"
              >
                <Cpu size={16} className="text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            label="Professional Compliance"
            title="Governance & Accreditation"
            description="Our operations meet the highest professional and regulatory standards."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {compliance.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-5"
              >
                <item.icon size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Work with a Trusted Partner?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Let's establish the spatial framework your project depends on.
          </p>
          <Link to="/contact" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-colors inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
