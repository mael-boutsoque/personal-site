import { Terminal, Mail } from "lucide-react"
import { FloatingHeader } from "@/components/floating-header"
import { CTASection } from "@/components/hero-dithering-card"
import { Skills } from "@/components/skills"
import { PricingInteraction } from "@/components/ui/pricing-interaction"
import { GlassBlogCard } from "@/components/ui/glass-blog-card-shadcnui"
import { SectionTitle } from "@/components/ui/section-title"
import { Footer } from "@/components/ui/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"

export default function Home() {
  return (
    <>
      <FloatingHeader />
      <CTASection />
      <section id="education" className="w-full px-4 md:px-6 py-24 md:py-32">
        <AnimatedSection className="max-w-6xl mx-auto">
          <SectionTitle id="01" title="Education" />
          <PricingInteraction />
        </AnimatedSection>
      </section>
      <section id="projects" className="w-full px-4 md:px-6 py-24 md:py-32">
        <AnimatedSection className="max-w-6xl mx-auto">
          <SectionTitle id="02" title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard index={0}>
              <GlassBlogCard
                title="Autonomous Drone"
                excerpt="Built a quadcopter with custom flight controller using FreeRTOS and IMU sensors for stable autonomous flight."
                image="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                author={{ name: "Mael B.", avatar: "https://github.com/shadcn.png" }}
                date="2025"
                readTime="C, FreeRTOS, IMU"
                tags={["Embedded", "Drone"]}
              />
            </AnimatedCard>
            <AnimatedCard index={1}>
              <GlassBlogCard
                title="Smart Grid Simulator"
                excerpt="Simulated power distribution network with load balancing algorithms, real-time monitoring, and fault detection."
                image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                author={{ name: "Mael B.", avatar: "https://github.com/shadcn.png" }}
                date="2024"
                readTime="Python, Simulink"
                tags={["Simulation", "Energy"]}
              />
            </AnimatedCard>
            <AnimatedCard index={2}>
              <GlassBlogCard
                title="Weather Station IoT"
                excerpt="IoT weather station with LoRaWAN connectivity, collecting environmental data with ESP32 microcontrollers."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                author={{ name: "Mael B.", avatar: "https://github.com/shadcn.png" }}
                date="2024"
                readTime="ESP32, C++, LoRa"
                tags={["IoT", "Embedded"]}
              />
            </AnimatedCard>
            <AnimatedCard index={3}>
              <GlassBlogCard
                title="Robot Arm"
                excerpt="3D-printed robotic arm with inverse kinematics control using Arduino and Python for precise movement."
                image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                author={{ name: "Mael B.", avatar: "https://github.com/shadcn.png" }}
                date="2023"
                readTime="Arduino, Python"
                tags={["Robotics", "Embedded"]}
              />
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </section>
      <Skills />
      <Footer
        logo={<Terminal className="h-6 w-6 text-primary" />}
        brandName="Mael"
        socialLinks={[
          { icon: <Mail className="h-4 w-4" />, href: "mailto:hello@mael.com", label: "Email" },
          { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, href: "https://github.com", label: "GitHub" },
          { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, href: "https://linkedin.com", label: "LinkedIn" },
        ]}
        mainLinks={[
          { href: "#hero", label: "Home" },
          { href: "#education", label: "Education" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
        ]}
        legalLinks={[
          { href: "#", label: "Privacy" },
          { href: "#", label: "Terms" },
        ]}
        copyright={{ text: `© ${new Date().getFullYear()} Mael. All rights reserved.` }}
      />
    </>
  )
}
