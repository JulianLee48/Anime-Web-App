# 🎴 Anime Finder (React)

A simple React app to search anime via the public **Jikan** API (MyAnimeList mirror).  
Type a title, submit, and browse results as clickable cards.

> This is a small demo built to practice React state, fetching APIs, and basic UI composition.

---

## ✨ Features
- Search for anime by title using the Jikan REST API
- Displays results as cards with:
  - Poster image
  - Title
  - Score
  - Number of episodes
  - Synopsis
- Clickable cards that open the anime's MyAnimeList page
- Lightweight setup built with **Create React App**

---

## 📦 Tech Stack
- **React** (via Create React App)
- **Fetch API** for retrieving data
- **CSS** for styling
- **Jikan API** for anime data

---

## 🔌 API Reference
This app uses the free **Jikan API** to fetch anime data from MyAnimeList.

**Endpoint:**  
https://api.jikan.moe/v4/anime?q=<query>

markdown
Copy
Edit
- No API key required ✅  
- Returns JSON data including:
  - `title`, `title_english`
  - `images.jpg.image_url`
  - `score`
  - `episodes`
  - `synopsis`
  - `url` (links to MyAnimeList page)
 
 ---

## 📝 Notes
- Built to practice **React fundamentals** like state, props, and mapping lists.
- Uses the **Jikan API** for anime data; some fields (e.g., `title_english` or `images`) may occasionally be `null`.
- The UI focuses on displaying search results, keeping the app lightweight and simple.

---

## 🛣️ Possible Improvements
- Add loading and error states for a smoother UX.
- Debounce input so API calls aren’t triggered on every keystroke.
- Replace `window.location.href` with proper `<a>` tags for accessibility.
- Paginate results or add infinite scroll for large datasets.
- Improve accessibility (keyboard navigation, ARIA roles).
- Add unit and integration testing using **Jest** and **React Testing Library**.
- Add better empty-state handling when there are no results.
