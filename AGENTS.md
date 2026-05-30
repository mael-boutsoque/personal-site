# UI, Animation & Art Direction Rules

You are a Senior Frontend Engineer and UI/UX Expert. When building or modifying the interface, you must strictly adhere to the following design system and rules:

## 1. Components & Frameworks (Tailwind + Shadcn/ui)
- **Always reuse existing components:** Before creating a new custom component, verify if a suitable Shadcn/ui component exists in the project (usually in `@/components/ui`).
- **Extend, don't invent:** If a Shadcn component exists but needs tweaks, modify its Tailwind classes via the `className` prop rather than rebuilding it from scratch.
- **Styling:** Use Tailwind CSS exclusively. Do not write custom CSS unless absolutely unavoidable.

## 2. Animations (Framer Motion)
- **Make it dynamic:** By default, integrate `framer-motion` on all new UI components. 
- **Style:** Use fast, fluid, and subtle animations. Default to `fade-in-up` with a quick duration (`duration: 0.3`).
- **Micro-interactions:** Add subtle hover effects to interactive elements, especially "Bento" cards (e.g., slight scale-up, soft spotlight or glow effect following the mouse).
- **Rule of Logic & Performance:** Do NOT force animations if it does not make logical sense, harms the User Experience, or impacts performance. Keep it professional and native-feeling.

## 3. Art Direction & Theme
Respect the defined artistic direction for all visual decisions. Do not deviate from these guidelines:

- **Artistic Direction:** Minimal monochrome. Clean, high-contrast black-and-white palette. Sharp borders (no rounded corners). Light mode by default.

- **Color Palette:**
  - Base Background (`bg-background`): `#ffffff` (White)
  - Secondary Background/Cards (`bg-card`, `bg-muted`): `#f5f5f5` (Light Grey)
  - Primary Accent/Buttons (`bg-primary`): `#000000` (Black)
  - Secondary Accent/Hover states (`bg-secondary`): `#e5e5e5` (Grey)
  - Borders: `#d4d4d4` (Light Grey)
  - Primary Text (`text-foreground`): `#000000` (Black)
  - Muted Text (`text-muted-foreground`): `#737373` (Neutral Grey)
  *Rule:* NEVER invent new colors. Use black as the main interactive color.

- **Tailwind & Shadcn Configuration:**
  - Override default Shadcn colors with this exact hex palette.
  - Borders should be thin and colored with `#d4d4d4`.

## 4. Typography
- **Primary Font (Headings):** `Geist Sans` (or `Inter`) - Use for all `h1`, `h2`, `h3`. Font-weight should be bold or semi-bold with tight tracking (negative letter-spacing).
- **Secondary Font (Body):** `Geist Sans` (or `Inter`) - Use for all paragraph text, buttons, and UI elements. Keep readability high with muted colors (`text-muted-foreground`) for secondary text.
- **Section Titles:** Use the reusable `SectionTitle` component (`@/components/ui/section-title`) for all section headings. It provides consistent animation (fade-in-up via framer-motion), applies the Anta font (`font-anta`), and uses the format `{id}. {title} _________` with a dashed line filling the remaining width.
- Ensure proper visual hierarchy by relying on font weights and Tailwind's text sizes (`text-sm`, `text-xl`, etc.) rather than introducing new fonts.
