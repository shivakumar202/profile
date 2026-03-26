# 🚀 Quick Start Guide - Portfolio Redesign

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd c:\xampp\htdocs\profile
npm install
```
This installs the new animation and 3D libraries added to the project.

### Step 2: Run Development Server
```bash
npm run dev
```
The portfolio will be available at `http://localhost:3000`

### Step 3: Explore & Customize
- Open `http://localhost:3000` in your browser
- Test all sections and interactions
- Make customizations as needed (see below)

---

## 🎨 Quick Customizations

### Change Your Contact Information
**File**: `components/ConnectForm.jsx`

Replace the placeholder emails/phone with yours:
```jsx
href="mailto:your-email@example.com"
href="tel:+91XXXXXXXXXX"
href="https://wa.me/91XXXXXXXXXX"
```

### Update Your Project Links
**File**: `components/Projects.jsx` and `app/projects/page.jsx`

Update the `projectsData` array with your actual project URLs

### Modify Skills & Experience
**File**: `app/page.js`

- Update the `skills` array for tech stack
- Update the `experience` array for work history

### Change Brand Name
**File**: `components/Navbar.jsx` and `components/Footer.jsx`

Replace "Shiva Kumar" with your name:
```jsx
<h1 className="gradient-text text-2xl font-bold">Your Name</h1>
```

---

## 📱 Testing Across Devices

### Desktop
```bash
npm run dev
# Visit http://localhost:3000
```

### Mobile (via device)
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit `http://YOUR_IP:3000` on mobile

### Chrome DevTools
- Press `F12` in Chrome
- Toggle Device Toolbar (Ctrl+Shift+M)
- Test different screen sizes

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel      # Install Vercel CLI
vercel login         # Login to Vercel
vercel              # Deploy!
```

### Option 2: Build for Any Hosting
```bash
npm run build
# Outputs to `.next` folder - upload to your hosting
```

---

## 📌 Important Files to Know

| File | Purpose |
|------|---------|
| `app/page.js` | Home page with all sections |
| `app/projects/page.jsx` | Full projects gallery |
| `components/Navbar.jsx` | Navigation bar |
| `components/Footer.jsx` | Footer section |
| `app/globals.css` | Global styles & theme |
| `package.json` | Dependencies & scripts |

---

## 🔍 What to Check

After first deployment, verify:

- [ ] Hero section loads without errors
- [ ] 3D background is visible
- [ ] All animations are smooth
- [ ] Mobile menu works
- [ ] Contact form submits
- [ ] Project links work
- [ ] Social media links navigate correctly
- [ ] Performance is good (Lighthouse > 80)

---

## 🐛 Common Issues & Fixes

### Issue: Dependencies not installing
**Solution**:
```bash
rm -r node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
**Solution**:
```bash
npm run dev -- -p 3001
# Or Kill process on 3000 and try again
```

### Issue: 3D background not showing
**Solution**:
- Check browser console for errors
- Ensure WebGL is supported
- Clear browser cache and reload

### Issue: Animations are choppy
**Solution**:
- Close unnecessary browser tabs
- Disable browser extensions
- Check system performance

---

## 💡 Pro Tips

1. **Use `.env.local` for secrets**
   ```bash
   # .env.local
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. **Monitor performance**
   - Use Lighthouse: Right-click → Inspect → Lighthouse
   - Target score: 80+

3. **Keep content updated**
   - Update projects regularly
   - Keep skills information current
   - Update social media links

4. **Test before deploying**
   ```bash
   npm run build
   npm run start
   ```

---

## 📞 Need Help?

Check these resources:
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/
- **Next.js Docs**: https://nextjs.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/

---

## ✅ Deployment Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Changed contact details (email, phone, WhatsApp)
- [ ] Verified all project links
- [ ] Tested on mobile devices
- [ ] Checked navigation works
- [ ] Updated portfolio data
- [ ] Set up analytics (optional)
- [ ] Performance tested (> 80 Lighthouse)
- [ ] Tested form submission
- [ ] Copied custom domain (if applicable)

---

## 🎉 You're All Set!

Your portfolio is ready to impress! 

**Next Steps**:
1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ✅ Customize with your information
4. ✅ Deploy to production (`vercel` or hosting)
5. ✅ Share your portfolio with potential clients/employers

---

**Questions?** Check REDESIGN_SUMMARY.md for detailed documentation.

Good luck! 🚀
