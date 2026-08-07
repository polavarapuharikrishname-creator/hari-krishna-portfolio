# Portfolio Website — Section Prompts

Matches your actual nav: Home, About, Leadership, Projects, Experience, Achievements, Certifications, Gallery, Contact. Copy each prompt into your builder in this order. Fill in [bracketed placeholders] first.

**What changed from the last version:** Achievements and Gallery are now full sections (not folded into others). The animated spine-and-scroll timeline isn't wasted — it's now the layout for Leadership, where the chronological role progression actually lives.

## 1. Home

Your existing hero — no new content needed.

## 2. About

```
Build an "About" section for a personal portfolio website, matching the color palette, typography, and spacing of the existing hero section.

Content:
- Short intro (2-3 sentences): Hari Krishna Polavarapu, a 3rd-year Mechanical Engineering student atAnil Neerukonda Institute of Technology and Sciences,Vishakapatnam Andhra Pradesh, currently President of NEC, Placement Coordinator and IIC Coordinator for the Student Council.
- Academic line: CGPA — 1st Year
                        1-1 SGPA-7.69, CGPA-7.69
                        1-2 SGPA-8.15, CGPA-7.92
                        2-1 SGPA-6.36, CGPA-7.38 
                        
- Skill tags (small pill-style badges): CAD, Autodesk Fusion 360, Web Development, Leadership, Public Relations, Event Management, Sponsorship & Fundraising, Business Development, Recruiting, Human Resources, Team Management, Crowd Management 

Layout: photo/illustration on one side (optional), intro text on the other, skill tags wrapped in a row below.

Responsive: stack vertically on mobile, side-by-side on desktop.
```

## 3. Leadership

```
Build a "Leadership" section for a portfolio website, showing organizational roles as a vertical, scroll-triggered timeline.

Content, in order:

Year 1
- BizVerve — Public Relations Head. Co-founded this entrepreneurship club to build startup and entrepreneurship culture on campus; ran workshops, ideathons, and other entrepreneur-focused events. Flagship event: Gen E Summit, a 2-day summit with games, interactive sessions, and motivational talks from visiting entrepreneurs, drawing attendees from across Visakhapatnam.
- IIC — Coordinator, collaborating with IEEE and other bodies to run events, workshops, and webinars in college
Year 2
- Between Breaks — Campus Ambassador for this startup, building a LinkedIn-style platform for college students to share achievements and experiences
- Street Cause (pan-India NGO, Visakhapatnam division) — DEB (Digital Executive Board) member, running community projects (orphanage visits, old-age home support, tree plantation, donations). Promoted to CEB (Chief Executive Board): Digital (content/social posts), Legal & Finance (audit filing), HR (retention and team culture); also mentored DEB teams at other college chapters
- AIESEC (international NGO) — GB member, oGV department (Outgoing Global Volunteer), maintaining international partnerships with AIESEC chapters abroad (e.g., Egypt) for volunteer exchange. Promoted to MB (Managing Board), Business Development; raised ₹1.5 lakh in sponsorship within about 2-3 months for WLS (Women Leadership Summit), an international event, while also serving as Core Committee Vice President for the event
- NEC — Public Relations. Represented the college at the national round in Mumbai

Year 3 (Present)
- NEC — promoted to President
- Student Council — Member, representing the Mechanical Engineering department
Placement Coordinator

- IIC — Coordinator (continued)

Show role changes with a small arrow badge where applicable (e.g., "DEB → CEB").

Layout: vertical spine line down the center on desktop with cards alternating left/right; collapses to a left-aligned spine with a single column on mobile.

Interaction: each node collapsed by default — org, role, one line. Tap to expand for full detail + photos.

Animation: fade + slide-in per node on scroll (Intersection Observer / Framer Motion whileInView / GSAP ScrollTrigger). Animate the spine to "draw" downward with scroll progress. Keep transitions to 300-500ms, slightly staggered.

Match the visual style of the existing hero section.
```

## 4. Projects

```
Build a "Projects" section for a portfolio website — 2 project cards showcasing tangible technical work.

Content:

1. AI-Powered Well-Being App (prototype) — built during the TEKNOV8R internship (Year 1). Web development + AI integration.
   Skills: Web Development, AI Integration

2. EV Vehicle (prototype) — built during the EV Saksham internship (Year 2). Designed and built using CAD.
   Skills: CAD, Autodesk Fusion 360

Card design: project name, one-line tagline, 2-3 line description, skill tags, project photo if available, optional "View Details" expand.

Layout: 2-column grid desktop, single column mobile.

Match the visual style of the existing hero section.
```

## 5. Experience

```
Build an "Experience" section for a portfolio website — internships listed chronologically.

Content:

1. TEKNOV8R Startup Solutions (OPC) Pvt. Ltd. — Web Development Intern (Year 1)
2. EV Saksham — EV Internship (Year 2)
3. Coca-Cola — Manufacturing Intern (Year 3). Worked across maintenance, production, and TPM (Total Productive Maintenance)

Card design: company name, role + year, 2-3 line description, skill tags at the bottom.

Layout: single column list or 3-card row — simple is fine with only 3 entries. Optionally reuse the Leadership section's timeline styling for visual consistency.

Match the visual style of the existing hero section.
```

## 6. Achievements

```
Build an "Achievements" section for a portfolio website — stat-style cards highlighting standout wins.

Content:

1. "1st Place" — Ideathon Winner (cash prize; photo + certificate)
2. "₹1.5L Raised" — Sponsorship for AIESEC's Women Leadership Summit, raised in about 2-3 months (international event)
3. "76th Nationally" — NEC national round, Mumbai (out of 4,000+ colleges)
4. "Co-Founded" — BizVerve, an entrepreneurship club, including its flagship 2-day Gen E Summit
5. "3 Promotions" — Internal growth across Street Cause (DEB → CEB), AIESEC (GB → MB), and NEC (PR → President)

Style: bold number/stat per card, short label underneath, hero's accent color.

Layout: grid — 3 columns desktop, 1 column mobile. Subtle fade/scale-in on scroll.

Match the visual style of the existing hero section.
```

## 7. Certifications

No certifications were mentioned yet, so this one needs your input before it's ready to use. Possible candidates: completion certificates from TEKNOV8R, EV Saksham, or Coca-Cola if they issued any, the Ideathon certificate, or course certifications (NPTEL, Coursera, an Autodesk Fusion 360 certification, etc.). Once you have the list, here's the layout prompt:

```
Build a "Certifications" section for a portfolio website — a grid of certification cards.

Content: [add your certifications — name, issuing organization, date, for each]

Card design: certificate name, issuer, date, small badge icon or certificate thumbnail, optional "View Certificate" link.

Layout: grid — 3 columns desktop, 1 column mobile.

Match the visual style of the existing hero section.
```

## 8. Gallery

```
Build a "Gallery" section for a portfolio website — a unified photo grid pulling together visuals from across the journey.

Content categories:
- Ideathon win — photo + certificate
- BizVerve / Gen E Summit — event photos (2-day summit)
- Street Cause-
- AIESEC / WLS (Women Leadership Summit) — event photos
- EV Saksham — build photos
- National Entrepreneurship Challenge (2025)
  Coca-Cola — activity photos, if available

Layout: responsive masonry or grid, optional category filter tabs at the top. Clicking a photo opens a full-size lightbox with a caption (what it's from + year).

Keep images to a consistent aspect ratio, compressed (WebP), lazy-loaded so the page stays fast.

Match the visual style of the existing hero section.
```

## 9. Contact

```
Build a closing "Contact" section — the final section before the footer.

Content: a short closing line (e.g., "Let's connect" or "Open to opportunities in [your field]"), email, LinkedIn, GitHub (if relevant), and a downloadable resume/CV button.

Layout: centered, minimal — large heading, contact links/icons in a row, resume download button styled as the primary CTA.

Match the visual style of the existing hero section.
```

---

## Photo Checklist

What to gather for each section, with a naming convention that'll make it easy to tell your builder tool where each one goes:

**Leadership**
- BizVerve / Gen E Summit — event photos: `leadership-bizverve-1.jpg`, `leadership-bizverve-2.jpg`
- AIESEC / WLS — event photos: `leadership-aiesec-wls-1.jpg`
- Street Cause, NEC, Between Brakes, Student Council — any activity photos you have: `leadership-[org]-1.jpg`

**Achievements**
- Ideathon — winning photo + certificate: `achievements-ideathon-photo.jpg`, `achievements-ideathon-certificate.jpg`

**Projects**
- AI Well-Being App — screenshot(s) of the prototype: `projects-wellbeing-app-1.jpg`
- EV Vehicle — build photos: `projects-ev-vehicle-1.jpg`

**Gallery**
- Everything above, plus any extras — reuse the same files rather than re-uploading duplicates

**Prep specs — keep these consistent across the site:**
- Thumbnails/cards: square or 4:3, at least 800px on the long edge
- Gallery/lightbox full-size: up to 1600px on the long edge
- Format: WebP where you can (smaller file size, same quality); JPG works as a fallback
- Target under 300KB per image after compression — Squoosh or TinyPNG both work well and are free
- Certificate: scan or photograph at a higher resolution (1200px+) so the text stays legible

Once photos are named and sized this way, tell your builder: "add these photos to their matching cards using the filenames as-is" — it'll be able to place them correctly.

---

**Before using, fill in:**
- Your college name
- Your CGPA
- Your certifications list (section 7)
- Email, LinkedIn/GitHub links, and resume file for Contact
- Photos for Gallery and wherever else you want thumbnails
