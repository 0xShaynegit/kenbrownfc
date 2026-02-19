# Ken Brown Financial Consultant - Global Assets

## Overview
This document outlines all global stylesheets and scripts that should be loaded on every page of the website. These assets provide consistent styling, navigation, and interactive features across all pages.

---

## CSS Files (Load in `<head>`)

### 1. **modern-design-system.css** (PRIMARY)
- **Location:** `./css/modern-design-system.css` (homepage) or `../css/modern-design-system.css` (inner pages)
- **Purpose:** Main design system with responsive styles, variables, layout, typography, components
- **Includes:**
  - CSS variables (colors, spacing, typography, shadows, transitions, border radius)
  - Base styles and resets
  - Navigation styles (navbar, mega menu, mobile drawer)
  - Component styles (buttons, cards, grids, forms)
  - Responsive media queries (480px, 768px breakpoints)
  - Mobile table scrolling fixes
  - Insurance checklist card styles
  - Footer styles
- **Status:** ✅ Active and maintained

### 2. **chaty-front.min.css** (CONTACT WIDGET)
- **Location:** `./css/chaty-front.min.css` (homepage) or `../css/chaty-front.min.css` (inner pages)
- **Purpose:** Styling for Chaty floating contact widget
- **Status:** ✅ Required for widget appearance

---

## JavaScript Files (Load in `<body>` before closing `</body>`)

### 1. **kb-navigation-global.js** (GLOBAL NAVIGATION)
- **Location:** `./scripts/kb-navigation-global.js` (homepage) or `../scripts/kb-navigation-global.js` (inner pages)
- **Purpose:** Global navigation handler for all pages
- **Functionality:**
  - Mobile drawer open/close with hamburger toggle
  - Mobile overlay click-to-close
  - Navbar scroll effect (adds 'scrolled' class after 50px)
  - Desktop mega menu: hover/focus/keyboard handling
  - Click-outside detection to close mega menu (tablet/iPad support)
  - Escape key closes drawer and mega menu
  - Smooth scroll for anchor links (#)
  - Keyboard navigation support (ARIA attributes)
- **Status:** ✅ New consolidated script (replaces inline navigation code)

### 2. **chaty-widget.js** (CONTACT WIDGET)
- **Location:** `./scripts/chaty-widget.js` (homepage) or `../scripts/chaty-widget.js` (inner pages)
- **Purpose:** Floating contact widget with auto-close functionality
- **Functionality:**
  - Fixed position trigger button at bottom-left
  - Channel icons (slide out on click, position:fixed)
  - Auto-close after 30 seconds if open
  - Manual close on trigger button re-click
  - Click-outside detection to close menu
  - Fully responsive mobile, tablet, desktop
- **Status:** ✅ New rewritten version (replaces old WordPress Chaty plugin)

---

## Asset Loading Template

### For Homepage (index.html)
```html
<!-- In <head> -->
<link href="./css/modern-design-system.css" rel="stylesheet"/>
<link href="./css/chaty-front.min.css" rel="stylesheet"/>

<!-- Before </body> -->
<script src="./scripts/kb-navigation-global.js"></script>
<script src="./scripts/chaty-widget.js"></script>
```

### For Inner Pages (/pages/*.html)
```html
<!-- In <head> -->
<link href="../css/modern-design-system.css" rel="stylesheet"/>
<link href="../css/chaty-front.min.css" rel="stylesheet"/>

<!-- Before </body> -->
<script src="../scripts/kb-navigation-global.js"></script>
<script src="../scripts/chaty-widget.js"></script>
```

---

## Deprecated Files (Should Remove)

These old files are no longer used and can be safely deleted:

- `scripts/cht-front-script.min.js` - Old WordPress Chaty plugin
- `scripts/navigation.min.js` - Old minified navigation (replaced by kb-navigation-global.js)
- `scripts/jquery.min.js` - No longer needed
- `scripts/jquery-migrate.min.js` - No longer needed
- `css/header.min.css` - Replaced by modern-design-system.css
- `css/chaty-front.min.css` - May be cleaned up after removing old Chaty plugin

---

## Navigation HTML Structure

All pages must include the standard navigation HTML structure (see index.html or any /pages/*.html for reference):

```html
<!-- Navigation Bar -->
<nav class="navbar" id="navbar">
  <div class="navbar-container">
    <div class="navbar-brand">
      <a href="../index.html">Ken Brown Financial Consultant</a>
    </div>
    <button class="navbar-toggle" id="navbar-toggle">...</button>
    <ul class="navbar-menu" id="navbar-menu">
      <!-- Menu items -->
    </ul>
  </div>
</nav>

<!-- Mobile Overlay & Drawer -->
<div class="mobile-overlay" id="mobile-overlay"></div>
<div class="mobile-drawer" id="mobile-drawer">
  <!-- Drawer content -->
</div>
```

---

## Today's Updates (2026-02-19)

### CSS Changes (modern-design-system.css)
- ✅ Fixed table overflow on mobile (display:block, overflow-x:auto)
- ✅ Fixed page-hero padding-top (70px) to eliminate white header gap
- ✅ Removed embedded control characters from CSS
- ✅ Added responsive table styles for 480px breakpoint
- ✅ Added insurance checklist card styles with alternating backgrounds
- ✅ Radio button and checkbox input styling

### Page Updates
- ✅ insurance-coverage-guide.html: Table → 7 interactive insurance card checklist
- ✅ investment-strategy-expats.html: Table → 3 descriptive paragraphs

### Script Updates
- ✅ Created kb-navigation-global.js (consolidated global navigation)
- ✅ chaty-widget.js already updated (handles auto-close, manual close)

---

## Testing Checklist

Before deploying, verify on all pages:
- [ ] Navigation hamburger appears and functions on mobile
- [ ] Navbar becomes sticky/scrolled on scroll (adds 'scrolled' class)
- [ ] Desktop mega menu shows on hover/focus
- [ ] Mega menu closes on click-outside
- [ ] Mobile drawer opens on hamburger click
- [ ] Mobile drawer closes on: overlay click, drawer close button, link click, Escape key
- [ ] Chaty widget appears at bottom-left
- [ ] Chaty opens on trigger click
- [ ] Chaty auto-closes after 30 seconds
- [ ] Chaty manual close on trigger re-click
- [ ] Chaty click-outside detection
- [ ] All links work (internal and external)
- [ ] Responsive on mobile (480px), tablet (768px), desktop

---

## Next Steps

1. Update all 13 inner pages to load kb-navigation-global.js
2. Remove inline navigation scripts from all pages
3. Verify all pages load modern-design-system.css and chaty widget
4. Delete deprecated files once verified
5. Test on real devices (mobile, tablet, desktop)
6. Deploy and monitor

---

Last Updated: 2026-02-19
