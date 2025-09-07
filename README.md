# 🌦️ Mausam – Responsive Weather Website
You can check this website on : http://mausam69.netlify.app

This is a fully responsive weather information website built using **HTML**, **CSS**, and **JavaScript**.  
It provides weather updates for any city, has a modern animated UI, and works smoothly on both desktop and mobile devices.

---

## ✨ Features

- **Responsive Layout**: Optimized for mobile, tablet, and desktop.
- **Hamburger Navigation**: Collapsible menu with animated icon that transforms into a cross on click.
- **Search Functionality**: Users can search for any city’s weather data.
- **Animations**: Smooth CSS animations on page load (navbar slides from top, fact box from left, connection from right, main text from bottom).
- **Separate Search Box for Mobile**: Mobile-friendly search interface.
- **Reusable Navbar**: Shared across pages (`index.html`, `connect.html`, `about.html`) using HTML injection.
- **Connection Section**: Links to GitHub, Instagram, Discord, and other social profiles.

---

## 🛠️ Technologies Used

- **HTML5** for structure  
- **CSS3** for styling, media queries, and animations  
- **Vanilla JavaScript** for hamburger menu toggle, navbar injection, and API calls  
- **GitHub Pages** for deployment  

---
project-root/
├── index.html          # Home page
├── connect.html        # Connect page
├── about.html          # About page
├── hamburger.html      # Shared navbar HTML fragment
├── style.css           # Global styles and animations
├── script.js           # Global JavaScript (menu toggle, API calls)
├── images/             # All images and icons
└── README.md           # This file


## 📂 Project Structure
project-root/
├── index.html # Home page
├── connect.html # Connect page
├── about.html # About page
├── hamburger.html # Shared navbar HTML fragment
│
├── css/
│ └── style.css # Global styles and animations
│
├── js/
│ └── script.js # Global JavaScript (menu toggle, API calls)
│
├── images/ # All images and icons
│
└── README.md # Documentation
---

## 🔑 API Keys

This project uses an external weather API.  

⚠️ **Do not expose your private API key in the frontend** — move API calls to a backend server or use a public/browser key.

---

## 🚀 Deployment on GitHub Pages

1. Create a repository on GitHub.  
2. Push your project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
Enable GitHub Pages:

Go to your repo → Settings → Pages

Source: Deploy from branch

Branch: main

Folder: / (root)

Your site will be live at:
https://<your-username>.github.io/<repo-name>/```
```

---

####How the Navbar Works######

hamburger.html contains the HTML for the navbar.

Each page (connect.html, about.html, etc.) fetches it into a <div id="navbar-placeholder"></div> using JavaScript.

script.js attaches the click listener to .hamburger to toggle the menu and hide other elements on small screens.

---

🎨 Animations

Navbar slides from the top.

Fact Box slides from the left.

Connection Section slides from the right.

Main Text slides from the bottom.

All animations implemented purely with CSS @keyframes and initial hidden states.

---
📸 Screenshots

<img width="328" height="674" alt="Screenshot 2025-09-07 134806" src="https://github.com/user-attachments/assets/918b055d-e151-47a0-8af0-a496076d3340" />
<img width="1387" height="789" alt="Screenshot 2025-09-07 134821" src="https://github.com/user-attachments/assets/48761da1-4680-486b-9086-ae726cf5034c" />
<img width="317" height="665" alt="Screenshot 2025-09-07 134749" src="https://github.com/user-attachments/assets/72bd3aa5-5876-4979-aef4-2f10c11a4ddf" />
<img width="1398" height="790" alt="Screenshot 2025-09-07 134708" src="https://github.com/user-attachments/assets/d79aee9b-7bc5-479f-b5a1-da2de608cb63" />


---

📜 License

This project is open-source. You can use or modify it for your own purposes.

---
👨‍💻 Author

Aman Kumar Shah

GitHub:[ Aman-1206](https://github.com/Aman-1206)

Instagram:[ aman.cpp](https://www.instagram.com/aman.cpp_?utm_source=ig_web_button_share_sheet&igsh=MWs0cmo4b2E5a202cA==)
