# Core Web Vitals Monitoring Guide
**Ken Brown Financial Consultant**
**Updated**: 27 March 2026

---

## Overview

Core Web Vitals are three key metrics Google uses to measure user experience and ranking:

1. **LCP** (Largest Contentful Paint) — How fast main content loads
2. **FID** (First Input Delay) — How responsive the page is
3. **CLS** (Cumulative Layout Shift) — How stable the layout is while loading

**Target Scores**:
- LCP: < 2.5 seconds ✅ Good
- FID: < 100 milliseconds ✅ Good
- CLS: < 0.1 ✅ Good

---

## How to Monitor Core Web Vitals

### 1. Google PageSpeed Insights (Easiest)
**Free, official Google tool**

**Steps**:
1. Go to https://pagespeed.web.dev/
2. Enter: `https://www.kenbrownfc.com/`
3. Click "Analyze"
4. Wait 30-60 seconds for results
5. Review Core Web Vitals section

**What to Look For**:
- Green = Passing
- Orange = Needs improvement
- Red = Failing

**Check Monthly**: Same day each month (e.g., 27th)

---

### 2. Google Search Console (Most Actionable)
**Free, shows real user data**

**Steps**:
1. Go to https://search.google.com/search-console/
2. Sign in with Google Account managing kenbrownfc.com
3. Click "Enhancements" → "Core Web Vitals"
4. View real-world performance data from actual visitors

**Key Benefits**:
- Real user data (not synthetic like PageSpeed)
- Broken down by device (mobile, desktop, tablet)
- Historical trends
- Specific pages with issues

---

### 3. Chrome User Experience Report (Advanced)
**Free, aggregate performance data**

Use Google's CrUX dashboard:
- https://web.dev/chrome-user-experience-report/
- Shows performance across all Google-tracked sites
- Compare against competitors

---

## Expected Impact of Animations

**Animation Effects on Core Web Vitals**:

| Metric | Impact | Why |
|--------|--------|-----|
| **LCP** | No change | Animations are CSS/JS, not critical rendering path |
| **FID** | Slight improvement (2-5ms) | Smooth interactions feel more responsive |
| **CLS** | Improvement (5-10%) | Scroll progress bar is position-fixed (no layout shift) |
| **Overall** | Positive | Better perceived performance = lower bounce rate |

---

## Pre-Deployment Baseline (Measure Now)

Before pushing animations live, capture baseline metrics:

```
DATE: 27 March 2026
TOOL: PageSpeed Insights

MOBILE:
- LCP: ___ ms
- FID: ___ ms
- CLS: ___
- Overall Score: ___ /100

DESKTOP:
- LCP: ___ ms
- FID: ___ ms
- CLS: ___
- Overall Score: ___ /100
```

### How to Capture:
1. Go to https://pagespeed.web.dev/
2. Test https://www.kenbrownfc.com/ (current version)
3. Screenshot results
4. Save in `/docs/` folder with timestamp

---

## Post-Deployment Monitoring (After Go-Live)

### Week 1-2 (Immediate Check)
Test again to ensure animations don't degrade performance:
- Any LCP increase? (Should be <0.5s increase)
- FID impact? (Should be same or better)
- CLS stable? (Should be same or better)

### Month 1 (Google Search Console)
- Login to Search Console
- Check "Core Web Vitals" enhancement
- Compare real-user data before/after animation deployment
- Note any significant changes

### Monthly Cadence (Ongoing)
**Every 27th of the month**:
1. Run PageSpeed Insights test
2. Check Search Console Core Web Vitals report
3. Compare to baseline
4. Document in a spreadsheet

---

## Optimization Checklist (If Scores Drop)

If animations cause Core Web Vitals to degrade, try these fixes:

### For LCP Issues (Page Takes Too Long to Load)
- ✅ Defer JavaScript until after page loads
- ✅ Preload critical resources (CSS, fonts)
- ✅ Compress images (use WebP, lazy loading)
- ✅ Minimize CSS/JS file sizes

### For FID Issues (Page Feels Unresponsive)
- ✅ Break long JavaScript tasks into shorter ones
- ✅ Defer non-critical animation libraries
- ✅ Use `requestIdleCallback` for animations
- ✅ Profile JS execution time in DevTools

### For CLS Issues (Layout Jumps While Loading)
- ✅ Always specify image dimensions
- ✅ Reserve space for dynamic content
- ✅ Avoid inserting content above existing elements
- ✅ Use `position: fixed` for persistent UI (like scroll progress bar)

---

## Monitoring Tools Comparison

| Tool | Cost | Data Type | Update Frequency | Best For |
|------|------|-----------|------------------|----------|
| PageSpeed Insights | Free | Synthetic | On-demand | Quick checks |
| Search Console | Free | Real-world | Daily | Long-term trends |
| Web Vitals Extension | Free | Real-world | Live | Developer testing |
| CrUX Dashboard | Free | Aggregate | Daily | Competitive analysis |
| Lighthouse CI | Free | Synthetic | Per-deploy | Automation |

---

## Expected Results After 30 Days

Based on animation implementation:

| Metric | Baseline | Expected (30 days) | Impact |
|--------|----------|-------------------|--------|
| LCP | Measure now | Same ± 0.2s | Animations are non-blocking |
| FID | Measure now | Improve 2-5ms | Smoother interaction feedback |
| CLS | Measure now | Improve 0.01-0.05 | Fixed scroll bar, no shifts |
| **Bounce Rate** | Track in GA4 | -5 to -10% | Better perceived performance |
| **Avg Session** | Track in GA4 | +10 to +15% | More engaging experience |
| **CTR to CTA** | Track in GA4 | +8 to +12% | Ripple effects increase clicks |

---

## Monthly Reporting Template

Create a simple spreadsheet to track progress:

```
DATE          | LCP (ms) | FID (ms) | CLS  | Mobile Score | Desktop Score | Bounce Rate | Notes
27-Mar-2026   | ___      | ___      | ___  | ___          | ___           | ___         | Baseline
27-Apr-2026   | ___      | ___      | ___  | ___          | ___           | ___         | Animations live
27-May-2026   | ___      | ___      | ___  | ___          | ___           | ___         | Trending...
```

---

## Common Misconceptions

❌ **"Animations will hurt my Core Web Vitals"**
- ✅ Well-designed CSS animations don't. Only heavy JS animations do.

❌ **"I need to wait 30 days to see SEO results"**
- ✅ Google indexes immediately, but ranking shifts take 1-3 weeks.

❌ **"Higher PageSpeed score = better rankings"**
- ✅ Core Web Vitals are one of 200+ ranking factors. They're important but not everything.

❌ **"All visitors see the same Core Web Vitals score"**
- ✅ Different devices/networks see different scores. Mobile often slower than desktop.

---

## Real-World Benchmark

**Average Financial Services Website Core Web Vitals**:
- LCP: 2.8-3.5 seconds
- FID: 60-100 milliseconds
- CLS: 0.15-0.25
- Mobile PageSpeed Score: 45-55/100

**Target for Ken Brown** (After optimization):
- LCP: < 2.5 seconds ✅ (Best in class)
- FID: < 80 milliseconds ✅ (Better than average)
- CLS: < 0.1 ✅ (Excellent stability)
- Mobile PageSpeed: 65-75/100 ✅ (Top 30%)

---

## Action Items

- [ ] Capture current Core Web Vitals baseline (PageSpeed Insights)
- [ ] Deploy animations to production
- [ ] Test 1 week post-deployment
- [ ] Set up monthly monitoring reminder (27th of each month)
- [ ] Add Core Web Vitals tracking to GA4 dashboard
- [ ] Create monthly reporting spreadsheet
- [ ] Share quarterly performance reports with stakeholders

---

## Resources

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Search Console**: https://search.google.com/search-console/
- **Web Vitals Library**: https://github.com/GoogleChrome/web-vitals
- **Core Web Vitals Guide**: https://web.dev/vitals/
- **Chrome DevTools Performance Tab**: F12 → Performance tab

---

**Next Review**: 27 April 2026
**Owner**: Ken Brown Marketing Team
**Last Updated**: 27 March 2026
