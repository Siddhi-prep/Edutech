# 📢 Promotional Images Folder

## 🎯 Purpose
This folder is used to display promotional popups on your website. When an image is present here, it will automatically appear as a popup when users visit your site.

---

## 🚀 How to Use

### Step 1: Add Your Promotional Image
Simply place your promotional image in this folder with one of these names:
- `offer.jpg` or `offer.png` or `offer.jpeg` or `offer.webp`
- `promo.jpg` or `promo.png`
- `promotion.jpg` or `promotion.png`
- `banner.jpg` or `banner.png`

### Step 2: Automatic Display
- The popup will **automatically appear** when users visit your website
- Users can close it by clicking the X button or clicking outside the image
- Once closed, it won't show again in that browsing session

### Step 3: Remove Popup
To stop showing the popup:
- Simply **delete** or **rename** the image file from this folder
- No popup will appear if the folder is empty

---

## 📐 Recommended Image Specifications

### For Best Results:

**Desktop & Mobile:**
- **Recommended Size:** 1080px width × 1350px height (9:16 ratio)
- **Alternative:** 800px × 1200px or 1000px × 1500px
- **Format:** JPG, PNG, or WebP
- **File Size:** Keep under 500KB for fast loading

**Why This Ratio?**
- Works perfectly on mobile (vertical)
- Looks great on desktop (centered)
- Instagram-style dimensions (familiar to users)

### Design Tips:
✅ Keep important content in the center  
✅ Leave space at the top-right for the close button  
✅ Use high-contrast colors for text visibility  
✅ Test on both mobile and desktop before publishing  
✅ Include a clear call-to-action (CTA)  

---

## 🎨 Testing Your Promotional Image

### Test Image Included:
A sample test image is provided: `test-offer.jpg`

**To Test:**
1. Rename `test-offer.jpg` to `offer.jpg`
2. Refresh your website
3. The popup should appear automatically
4. Click the X button to close it

**To Stop Testing:**
1. Rename `offer.jpg` back to `test-offer.jpg`
2. Refresh your website
3. No popup will appear

---

## 🔧 Technical Details

### Supported File Names (Priority Order):
1. `offer.jpg`, `offer.png`, `offer.jpeg`, `offer.webp`
2. `promo.jpg`, `promo.png`
3. `promotion.jpg`, `promotion.png`
4. `banner.jpg`, `banner.png`

### Behavior:
- Popup appears 1.5 seconds after page load
- Closes when user clicks X button
- Closes when user clicks outside the image (on dark overlay)
- Won't show again in the same browsing session after being closed
- Automatically adapts to screen size (responsive)

### Browser Storage:
- Uses **sessionStorage** to remember if user closed the popup
- Resets when browser tab is closed
- No cookies used - privacy-friendly

---

## 💡 Use Cases

### When to Use This Popup:
- **Festival Offers:** Diwali, Christmas, New Year sales
- **Course Launches:** New course announcements
- **Limited Time Deals:** Flash sales, early bird discounts
- **Special Events:** Webinars, workshops, live sessions
- **Important Announcements:** Platform updates, new features

### Best Practices:
- Don't show popups too frequently (respect user experience)
- Update regularly to keep content fresh
- Remove outdated promotional images promptly
- A/B test different designs to see what works best

---

## 🛠️ Troubleshooting

**Popup not appearing?**
- ✓ Check if image file name matches supported names
- ✓ Ensure image is in `client/public/promotional-images/` folder
- ✓ Clear browser cache and sessionStorage
- ✓ Check browser console for errors (F12)

**Popup showing old image?**
- ✓ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- ✓ Clear browser cache
- ✓ Check if old image file still exists

**Image looks stretched or cut off?**
- ✓ Use recommended dimensions (1080×1350)
- ✓ Keep important content centered
- ✓ Test on multiple devices

---

## 📱 Responsive Behavior

### Mobile (< 768px):
- Popup takes 90% of screen width
- Maintains aspect ratio
- Close button positioned top-right
- Touch-friendly close button size

### Tablet (768px - 1024px):
- Popup sized appropriately for screen
- Better spacing around popup
- Smooth animations

### Desktop (> 1024px):
- Popup centered on screen
- Dark overlay background
- Optimal viewing experience

---

## 🎯 Quick Start Checklist

- [ ] Create your promotional image (1080×1350)
- [ ] Name it `offer.jpg` (or another supported name)
- [ ] Place it in this folder (`client/public/promotional-images/`)
- [ ] Refresh your website
- [ ] Test on mobile and desktop
- [ ] Verify close button works
- [ ] Remove or rename when campaign ends

---

## 🔐 Security Note

- Images are served from the public folder
- No user data is collected
- Session storage is used only for close state
- Images should be optimized and safe for web use

---

**Need Help?** Check the main project documentation or contact your development team.

**Pro Tip:** Always keep a backup of your promotional images in a separate folder before replacing them!
