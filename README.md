# 🪦 NecroLog — Digital Graveyard Debugging Dashboard
> **Kiroween Hackathon — "Costume Contest" Track Submission**  
> An interactive production debugging dashboard that visualizes server crashes, unhandled exceptions, and stack traces through a gothic digital graveyard metaphor.

---

## 🌟 Thematic Utility: Why the Spooky Aesthetic Matters
In typical APM and exception monitoring dashboards (e.g. Sentry, Datadog), developers experience alert fatigue from endless tables and flashing badges. **NecroLog** turns telemetry into a spatial digital graveyard where every gothic aesthetic directly drives core debugging efficiency:

1. **The Cemetery View as Spatial Triage:** Active server crashes are visualized as gothic tombstone cards. 
2. **Ambient Drifting Mist & Toxic Soul Red Glow:** High-severity **Critical** outages cast a slow-drifting CSS mist/smoke layer and pulsing red drop shadow beneath their card. This pulls peripheral vision to the highest-priority incident without disruptive popups.
3. **Phantom Summons Detail Inspector:** Clicking any headstone opens a translucent glassmorphic modal (`backdrop-filter: blur(12px)` with 5% dark-purple tint). The error log and stack trace animate into view via a glowing monospace terminal typewriter effect, conveying forensic evidence like a machine spirit.
4. **Exorcism & Banished Crypt (The Resolution Flow):** Clicking **"Exorcise Bug"** triggers a violent seismic vibration and ash/soul particle dispersal animation. The bug is banished to **The Crypt (Mausoleum of Banished Bugs)**, restoring system sanity.
5. **System Sanity Telemetry Gauge:** Dynamic health calculation based on active critical, warning, and diagnostic incident counts.
6. **Autonomous Telemetry Streamer:** Pushes realistic application crashes across microservices every 15 seconds, complete with countdown badges and pause/resume controls.
7. **Procedural Web Audio Engine:** Built natively with the browser Web Audio API (zero external audio files). Procedurally synthesizes stone clicks, typewriter key chatter, and ethereal exorcism chimes with an accessible mute toggle.
8. **100% Mobile Responsive:** Tested on desktop and mobile viewports (375x812 iPhone / 768x1024 tablet / 1440px desktop) with zero horizontal overflow.

---

## 🧱 Tech Stack
- **Frontend:** Semantic HTML5, Tailwind CSS, Vanilla JavaScript (ES6)
- **Styling & Motion:** Tailwind utilities + Pure CSS3 keyframes (`styles.css`)
- **Sound:** Native browser Web Audio API
- **Assets:** Inline handcrafted SVG gothic vectors (zero external image dependencies)

---

## 🚀 Running Locally
To run the application locally:
```bash
# Start a local HTTP server
python -m http.server 8080

# Open in your browser
http://127.0.0.1:8080/
```

### Keyboard Shortcuts
- `S`: Summon manual crash incident
- `M`: Toggle ambient spooky sound effects
- `C`: Toggle between Active Cemetery and The Crypt
- `Esc`: Close Phantom Summons detail inspector
- `Enter` / `Space`: Open selected tombstone

---

## 🧪 Automated Browser Verification
NecroLog includes a native Chrome DevTools Protocol automated test harness:
```bash
python verify_necrolog.py
```
This script programmatically launches headless Chrome, verifies the cemetery grid, clicks a tombstone, verifies modal typewriter streaming, executes the exorcism flow, checks particle dispersal, and verifies mobile responsive viewports.
