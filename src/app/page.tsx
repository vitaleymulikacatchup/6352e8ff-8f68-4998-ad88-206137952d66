"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { HelpCircle, Mail, MessageCircle, Settings, Target, Trophy, Users, Zap } from 'lucide-react';

export default function F1PresentationPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="dotGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Presentation"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Formula 1 Racing Excellence"
          description="Experience the pinnacle of motorsport technology and engineering with our comprehensive F1 car presentation showcasing cutting-edge innovation"
          tag="F1 Presentation"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Features", href: "features" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623276361-gjdyewkm.jpg"
          imageAlt="Formula 1 racing car at high speed"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Formula 1 represents the ultimate fusion of human skill and technological innovation. Our presentation showcases the incredible engineering and performance that makes F1 the pinnacle of motorsport."
          features={[
            {
              icon: Zap,
              title: "Cutting-Edge Technology",
              description: "Advanced hybrid power units, sophisticated aerodynamics, and state-of-the-art materials push the boundaries of automotive engineering."
            },
            {
              icon: Target,
              title: "Precision Performance",
              description: "Every component is meticulously designed for maximum performance, from carbon fiber construction to advanced telemetry systems."
            },
            {
              icon: Trophy,
              title: "Racing Heritage",
              description: "Decades of motorsport excellence and innovation have shaped the evolution of modern Formula 1 technology and safety standards."
            },
            {
              icon: Target,
              title: "Safety Innovation",
              description: "Continuous development of safety systems including the halo device, HANS system, and impact-resistant monocoques protect drivers."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="F1 Car Technical Specifications"
          description="Explore the advanced engineering and cutting-edge technology that powers Formula 1 racing cars"
          tag="Technical Details"
          tagIcon={Settings}
          textboxLayout="default"
          buttons={[
            { text: "View All Specs", href: "contact" }
          ]}
          features={[
            {
              id: 1,
              title: "Aerodynamics Package",
              description: "Advanced wing designs and aerodynamic elements generate up to 1,500kg of downforce at racing speeds, providing incredible grip and cornering performance through precisely engineered airflow management.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623278833-omyrkzxw.jpg",
              imageAlt: "F1 car aerodynamic wings and elements"
            },
            {
              id: 2,
              title: "Hybrid Power Unit",
              description: "1.6-liter V6 turbo engine combined with sophisticated energy recovery systems delivers over 1,000 horsepower while maintaining fuel efficiency through advanced hybrid technology.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623280150-itsbnon1.jpg",
              imageAlt: "Formula 1 hybrid power unit engine"
            },
            {
              id: 3,
              title: "Carbon Fiber Brakes",
              description: "Ultra-lightweight carbon fiber brake discs and pads operate at temperatures exceeding 1,000°C, providing exceptional stopping power and heat dissipation for consistent performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623281166-vrjlpkhv.jpg",
              imageAlt: "F1 carbon fiber brake system"
            },
            {
              id: 4,
              title: "Racing Tire Technology",
              description: "Specialized Pirelli compounds designed for different track conditions and racing strategies, featuring advanced rubber formulations that provide optimal grip and performance characteristics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623282396-8vsipxwb.jpg",
              imageAlt: "Formula 1 racing tire compounds"
            },
            {
              id: 5,
              title: "Safety Systems",
              description: "Comprehensive safety features including the revolutionary halo protection device, impact-resistant carbon fiber monocoque, and advanced HANS system ensure maximum driver protection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623283519-kzzc3k0u.jpg",
              imageAlt: "F1 safety halo protection system"
            },
            {
              id: 6,
              title: "Telemetry & Data",
              description: "Real-time data acquisition systems monitor hundreds of parameters per second, providing critical information for performance optimization and strategic decision-making during races.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623284582-d797vzum.jpg",
              imageAlt: "F1 telemetry and data systems"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Racing Professionals"
          description="Meet the talented individuals who make Formula 1 racing possible"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rodriguez",
              role: "Lead Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623286135-sp6i16s4.jpg",
              imageAlt: "Portrait of Marco Rodriguez, Lead Driver"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Race Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623287249-fhtbkmta.jpg",
              imageAlt: "Portrait of Sarah Chen, Race Engineer"
            },
            {
              id: "3",
              name: "James Thompson",
              role: "Chief Mechanic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623288408-8kud63xu.jpg",
              imageAlt: "Portrait of James Thompson, Chief Mechanic"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Racing Community Feedback"
          description="Hear what F1 enthusiasts and professionals say about our presentation"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex",
              handle: "@f1_fanatic",
              testimonial: "This F1 presentation is absolutely incredible! The technical details and visual presentation really capture the essence of Formula 1 racing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623289631-bdwu6lil.jpg",
              imageAlt: "Portrait of Alex, F1 enthusiast"
            },
            {
              id: "2",
              name: "Maria",
              handle: "@racing_engineer",
              testimonial: "As a motorsport engineer, I'm impressed by the accuracy and depth of the technical specifications presented. Excellent work on the aerodynamics section.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623290788-jxazvprd.jpg",
              imageAlt: "Portrait of Maria, racing engineer"
            },
            {
              id: "3",
              name: "David",
              handle: "@speedway_king",
              testimonial: "The safety features section really opened my eyes to how much technology goes into protecting drivers. Amazing presentation of complex engineering concepts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623291816-rvxm3kzz.jpg",
              imageAlt: "Portrait of David, racing enthusiast"
            },
            {
              id: "4",
              name: "Sophie",
              handle: "@trackside_pro",
              testimonial: "Perfect blend of technical information and visual appeal. This presentation makes F1 technology accessible to both fans and professionals alike.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623293573-ri1vaki2.jpg",
              imageAlt: "Portrait of Sophie, trackside professional"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about Formula 1 technology and our presentation"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes F1 cars so fast?",
              content: "F1 cars achieve incredible speeds through a combination of advanced aerodynamics, lightweight carbon fiber construction, powerful hybrid engines, and sophisticated tire technology that maximizes grip and performance."
            },
            {
              id: "2",
              title: "How do F1 safety systems work?",
              content: "Modern F1 safety includes the halo protection device, carbon fiber monocoques, HANS systems, impact-absorbing barriers, and advanced medical facilities to protect drivers during high-speed incidents."
            },
            {
              id: "3",
              title: "What is the hybrid power unit?",
              content: "F1 cars use 1.6-liter V6 turbo engines combined with two energy recovery systems (ERS-K and ERS-H) that harvest energy from braking and exhaust heat, delivering over 1,000 total horsepower."
            },
            {
              id: "4",
              title: "How important is aerodynamics in F1?",
              content: "Aerodynamics is crucial in F1, generating up to 1,500kg of downforce at speed. This allows cars to corner at incredible speeds and maintain stability, with teams spending millions on wind tunnel testing and CFD analysis."
            },
            {
              id: "5",
              title: "What role does telemetry play?",
              content: "F1 telemetry systems monitor hundreds of parameters in real-time, including engine performance, tire temperatures, fuel consumption, and aerodynamic efficiency, allowing teams to optimize strategy and performance."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Learn More About F1?"
          description="Contact us for detailed information about Formula 1 technology, racing specifications, or to schedule a comprehensive presentation for your team or organization."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763623294786-dnj861t5.jpg"
          imageAlt="Formula 1 racing circuit aerial view"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Send Message"
          termsText="By submitting your email, you agree to receive updates about Formula 1 presentations and racing technology insights."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="F1 Presentation"
          copyrightText="© 2025 | F1 Presentation"
          columns={[
            {
              title: "Racing",
              items: [
                { label: "Features", href: "features" },
                { label: "Technology", href: "features" },
                { label: "Safety", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}