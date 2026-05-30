"use client"

import { GraduationCap, Cpu, BookOpen, MapPin, Calendar } from "lucide-react"
import React from "react";

const schools = [
  {
    id: "ensem",
    name: "Engineering Degree",
    icon: GraduationCap,
    school: "ENSEM / Mines Nancy (Télécom Nancy)",
    location: "Nancy, France",
    date: "2023 – 2026",
    courses: ["Real-Time Operating Systems", "Software Engineering", "Microprocessor Architecture", "C/Assembly Programming", "Digital and Analog Electronics", "Dependability", "Signal Processing"],
  },
  {
    id: "upc",
    name: "Exchange Program",
    icon: Cpu,
    school: "ETSEIB (UPC)",
    location: "Barcelona, Spain",
    date: "Sept 2025 – Jan 2026",
    courses: ["Embedded & Real-Time Systems", "Digital Control", "Microcomputers", "Artificial Intelligence Applied to Engineering"],
  },
  {
    id: "cpge",
    name: "CPGE PC",
    icon: BookOpen,
    school: "Lycée de Troyes",
    location: "Troyes, France",
    date: "2021 – 2023",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Engineering Science"],
  },
]

export function PricingInteraction() {
  const [active, setActive] = React.useState(0);
  const school = schools[active]
  const Icon = school.icon

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start">
      <div className="border-2 rounded-[32px] p-3 shadow-md w-full md:w-72 flex flex-col items-center gap-3 bg-background">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          {schools.map((s, i) => {
            const SvgIcon = s.icon
            const isActive = active === i
            return (
              <div
                key={s.id}
                className={`w-full flex justify-between cursor-pointer p-4 rounded-2xl bg-background ${isActive ? "border-[3px] border-primary" : "border-2 border-border"}`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                    <SvgIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-base text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.date}</p>
                  </div>
                </div>
                <div
                  className="border-2 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center"
                  style={{
                    borderColor: `${isActive ? "#000" : "#d4d4d4"}`,
                    transition: "border-color 0.3s",
                  }}
                >
                  <div
                    className="size-3 bg-primary rounded-full"
                    style={{
                      opacity: `${isActive ? 1 : 0}`,
                      transition: "opacity 0.3s",
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex-1 min-w-0 rounded-2xl border border-border bg-background p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{school.name}</h3>
              <p className="text-sm text-muted-foreground">{school.school}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {school.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {school.date}
            </span>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-sm font-medium text-foreground mb-3">Relevant Coursework</p>
            <ul className="space-y-2">
              {school.courses.map((course) => (
                <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
