import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Crosshair, Shield, Satellite, MapPin, Ruler } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import serviceGnss from "@/assets/service-gnss.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceUav from "@/assets/service-uav.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const trustItems = [
  "Registered Professional Engineering Surveyor-Led",
  "GNSS & Geodetic Control Specialists",
  "Field-Deployed Survey Teams",
  "UAV & Spatial Intelligence Integration",
  "Infrastructure & Renewable Energy Experience",
  "Professional Indemnity Insured",
];

const services = [
  {
    title: "Engineering & Construction Surveying",
    desc: "High-precision setting-out, structural alignment, deformation monitoring, and as-built verification.",
    image: serviceEngineering,
    icon: Ruler,
  },
  {
    title: "Geodetic & GNSS Control Networks",
    desc: "Design and establishment of high-accuracy control frameworks that underpin infrastructure reliability.",
    image: serviceGnss,
    icon: Satellite,
  },
  {
    title: "Renewable Energy & Solar Farm Surveying",
    desc: "Precision-driven surveying supporting solar tracker alignment, pile layout, and construction QA.",
    image: serviceSolar,
    icon: Target,
  },
  {
    title: "UAV Mapping & Photogrammetry",
    desc: "Licensed aerial surveys delivering accurate and decision-grade spatial intelligence.",
    image: serviceUav,
    icon: Crosshair,
  },
  {
    title: "GIS & Spatial Data Intelligence",
    desc: "Structured spatial data systems supporting infrastructure management and asset control.",
    image: serviceGis,
    icon: MapPin,
  },
  {
    title: "Technical Survey Consulting & QA/QC",
    desc: "Independent technical oversight and optimisation for complex infrastructure environments.",
    image: serviceConsulting,
    icon: Shield,
  },
];

const processSteps = [
  { step: "01", title: "Project Review & Accuracy Specification" },
  { step: "02", title: "Control Network Design & Establishment" },
  { step: "03", title: "Field Deployment & Survey Execution" },
  { step: "04", title: "Data Processing & QA/QC Validation" },
  { step: "05", title: "Technical Reporting & Ongoing Support" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Infrastructure surveying site with GNSS equipment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-6">
              ZeroPoint GeoConsulting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-[1.1] mb-6">
              Precision at the{" "}
              <span className="text-gradient">Origin.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mb-10">
              Engineering-grade surveying, geodetic control & field execution for infrastructure and renewable energy projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-7 py-3.5 rounded-md transition-colors duration-200 text-center"
              >
                Speak to a Consultant
              </Link>
              {/* <Link
                to="/contact?type=tender"
                className="border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground font-medium px-7 py-3.5 rounded-md transition-colors duration-200 text-center"
              >
                Send Tender Documentation
              </Link> */}
              <Link
                to="/contact?type=quote"
                className="border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground font-medium px-7 py-3.5 rounded-md transition-colors duration-200 text-center"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy py-6 border-y border-navy-light/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <CheckCircle size={15} className="text-gold shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            label="Who We Are"
            title="Engineering Surveying & Geomatics Consultancy"
            description="ZeroPoint GeoConsulting (Pty) Ltd is led by a Registered Professional Engineering Surveyor. We support infrastructure, construction, renewable energy, municipal, mining, and industrial projects through disciplined control methodologies and rigorous QA/QC systems."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <blockquote className="text-lg md:text-xl italic text-muted-foreground border-l-4 border-gold pl-6 text-left">
              "Every successful project begins with a reliable reference. That reference is the Zero Point."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeading
            label="Our Core Service Pillars"
            title="Comprehensive Surveying & Geomatics Solutions"
            description="From control network design to on-site deployment and final verification — we ensure what is designed is executed accurately."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-md bg-gold/90 flex items-center justify-center">
                    <service.icon size={20} className="text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-dark transition-colors">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <SectionHeading
            label="Our Approach"
            title="System-Driven Delivery"
            description="Our process ensures accountability from origin to final verification."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl font-display font-extrabold text-gold/30">{s.step}</span>
                <h4 className="mt-2 font-display font-semibold text-primary-foreground text-sm leading-snug">{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZeroPoint */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            label="Why ZeroPoint"
            title="We Don't Just Measure — We Engineer Spatial Frameworks"
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Led by a Registered Professional Engineering Surveyor",
              "Built on engineering-grade control & adjustment methodologies",
              "Integrated across GNSS, UAV & GIS workflows",
              "Field-capable with deployed site teams",
              "Infrastructure-focused",
              "Technically defensible and audit-ready",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg md:text-xl font-display font-semibold text-foreground">
              We design it. We establish it. We verify it in the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Start Your Project with{" "}
              <span className="text-gradient">Precision at the Origin.</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Partner with ZeroPoint GeoConsulting for engineering-grade surveying, geodetic control, and field execution services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground font-medium px-8 py-3.5 rounded-md transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
