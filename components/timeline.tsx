"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"

const milestones = [
  {
    logo: "🎓",
    school: "École Polytechnique",
    date: "2022 — 2026",
    degree: "M.Sc. in Computer Engineering",
    classes: [
      "Embedded Systems Design",
      "Digital Signal Processing",
      "Real-Time Operating Systems",
      "Advanced Control Theory",
    ],
    projects: [
      { name: "Autonomous Drone", description: "Built a quadcopter with custom flight controller", tech: "C, FreeRTOS, IMU" },
      { name: "Smart Grid Sim", description: "Simulated power distribution with load balancing", tech: "Python, Simulink" },
    ],
  },
  {
    logo: "💻",
    school: "Institut de Technologie",
    date: "2020 — 2022",
    degree: "B.Sc. in Electrical Engineering",
    classes: [
      "Circuit Theory",
      "Microcontrollers",
      "Signal & Systems",
      "Object-Oriented Programming",
    ],
    projects: [
      { name: "Weather Station", description: "IoT weather station with LoRaWAN", tech: "ESP32, C++, LoRa" },
      { name: "Robot Arm", description: "3D-printed robotic arm with inverse kinematics", tech: "Arduino, Python" },
    ],
  },
  {
    logo: "🔧",
    school: "Lycée technique",
    date: "2018 — 2020",
    degree: "Baccalaureate in Engineering Sciences",
    classes: [
      "Applied Mathematics",
      "Industrial Computing",
      "Mechanics",
      "Electronics",
    ],
    projects: [
      { name: "Line Follower", description: "Autonomous line-following robot", tech: "C, IR sensors" },
    ],
  },
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="education" className="w-full px-4 md:px-6 py-24 md:py-32" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="01" title="Education" />

        <div className="relative">
          <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-border" />
          <motion.div
            className="absolute left-[23px] top-2 w-0.5 bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 pb-14 last:pb-0 group"
            >
              <div className="absolute left-[17px] top-1.5 size-[14px] rounded-full bg-card ring-[3px] ring-primary z-10 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(124,101,240,0.5)]" />

              <div className="rounded-2xl bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(124,101,240,0.08)]">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl">{item.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold text-foreground">{item.school}</h3>
                      <span className="text-sm text-muted-foreground shrink-0">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.degree}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Classes</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.classes.map((c, i) => {
                      const tagColors = [
                        "border-primary/30 bg-primary/10 text-primary",
                        "border-foreground/20 bg-foreground/5 text-foreground",
                        "border-secondary/30 bg-secondary/10 text-secondary",
                      ]
                      return (
                        <span
                          key={i}
                          className={`rounded-md border px-2.5 py-1 text-xs ${tagColors[i % 3]}`}
                        >
                          {c}
                        </span>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Projects</h4>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted text-left text-muted-foreground text-xs uppercase tracking-wider">
                          <th className="px-3 py-2 font-medium">Project</th>
                          <th className="px-3 py-2 font-medium hidden sm:table-cell">Description</th>
                          <th className="px-3 py-2 font-medium">Tech</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {item.projects.map((p, i) => (
                          <tr key={i} className="hover:bg-muted/50 transition-colors">
                            <td className="px-3 py-2.5 font-medium text-foreground">{p.name}</td>
                            <td className="px-3 py-2.5 text-muted-foreground hidden sm:table-cell">{p.description}</td>
                            <td className="px-3 py-2.5">
                              <span                               className={`rounded-md px-2 py-0.5 text-xs ${index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground"}`}>
                                {p.tech}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
