import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ruler, Satellite, Target, Crosshair, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import serviceEngineering from "@/assets/service-engineering.jpg";
import serviceGnss from "@/assets/service-gnss.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceUav from "@/assets/service-uav.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const services = [
  {
    icon: Ruler,
    title: "Engineering & Construction Surveying",
    image: serviceEngineering,
    desc: "High-precision setting-out, structural alignment, deformation monitoring, and as-built verification for civil, structural, and building works.",
    items: ["Structural & civil setting out", "Bridge & structural alignment control", "Deformation monitoring", "As-built verification", "Machine control support", "On-site problem resolution"],
    tagline: "We deploy site-based survey teams equipped with engineering-grade instrumentation.",
  },
  {
    icon: Satellite,
    title: "Geodetic & GNSS Control Networks",
    image: serviceGnss,
    desc: "Design and establishment of high-accuracy control frameworks that underpin infrastructure reliability.",
    items: ["Static & RTK GNSS surveys", "Primary & secondary control networks", "Site calibration & coordinate transformation", "Benchmark establishment", "Control validation & least-squares adjustment", "Independent control verification"],
    tagline: "We don't simply establish control — we engineer defensible spatial frameworks.",
  },
  {
    icon: Target,
    title: "Renewable Energy & Solar Farm Surveying",
    image: serviceSolar,
    desc: "Precision-driven surveying services supporting solar and renewable energy developments.",
    items: ["Solar tracker setting out", "Torque tube elevation verification", "Pile layout control", "Substation surveying", "Construction QA verification", "As-built validation"],
    tagline: "Designed to protect structural alignment and generation efficiency.",
  },
  {
    icon: Crosshair,
    title: "UAV Mapping & Photogrammetry",
    image: serviceUav,
    desc: "Licensed aerial surveys delivering accurate and decision-grade spatial intelligence.",
    items: ["Orthophotos", "DSM/DTM modelling", "Volumetric analysis", "3D engineering mapping", "Aerial progress monitoring"],
    tagline: "Integrated with ground control for engineering-level accuracy.",
  },
  {
    icon: MapPin,
    title: "GIS & Spatial Data Intelligence",
    image: serviceGis,
    desc: "Structured spatial data systems supporting infrastructure management and asset control.",
    items: ["Spatial database development", "Asset mapping", "GIS analysis", "QA/QC-driven reporting", "Data validation workflows"],
    tagline: "Transforming spatial data into actionable intelligence.",
  },
  {
    icon: Shield,
    title: "Technical Survey Consulting & QA/QC",
    image: serviceConsulting,
    desc: "Independent technical oversight and optimisation for complex infrastructure environments.",
    items: ["Survey planning & risk assessment", "Control network optimisation", "Least-squares adjustment", "Contractor alignment auditing", "On-site survey supervision", "Dispute resolution measurement support"],
    tagline: "We provide technically defensible oversight where precision cannot be compromised.",
  },
];

const industries = [
  "Infrastructure & Civil Engineering",
  "Renewable Energy (Solar & Utility-Scale Projects)",
  "Municipal & Public Works",
  "Mining & Industrial Developments",
  "Property & Commercial Developments",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 inline-block">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-4">
              Comprehensive Surveying Solutions
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              From control network design to field execution, we deliver engineering-grade precision across every project phase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container mx-auto space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-lg overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-72 lg:h-80 object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                    <service.icon size={24} className="text-accent-foreground" />
                  </div>
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-muted-foreground">{service.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeading label="Industries We Serve" title="Trusted Across Key Sectors" />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <span key={ind} className="bg-card border border-border text-foreground font-medium text-sm px-5 py-2.5 rounded-md">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-gradient text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Need Precision Surveying for Your Project?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Let's discuss your requirements and deliver a tailored surveying solution.
          </p>
          <Link to="/contact" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
