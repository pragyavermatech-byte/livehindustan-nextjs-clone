# 📰 LiveHindustan-Style News Front Page (Simplified Clone)

This is a simplified Next.js project that displays a news front page similar to **LiveHindustan** using a public news API.  
It includes basic layout, routing, image optimization, ISR, and fallback handling.

---

## 🚀 Features

### ✔️ **Next.js Features**
- **ISR (Incremental Static Regeneration)**  
  Pages automatically refresh every 30 seconds.
- **Dynamic Routing**  
  Each article opens on its own URL: `/article/[id]`.
- **Next.js `<Image>` Optimization**  
  Handles image resizing and optimization.
- **Fallback Placeholder Image**  
  Used when an article has no image.

### ✔️ **UI / Layout**
- Simple grid of news cards  
- Responsive (mobile + desktop)  
- Minimal styling (easy to understand)

### ✔️ **Data Source**
- Uses **NewsAPI (demo key)**  
- Handles:
  - No articles  
  - Missing images  
  - API errors  

---

## 📁 Folder Structure

