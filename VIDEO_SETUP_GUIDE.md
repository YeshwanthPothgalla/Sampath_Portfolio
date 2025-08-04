# Video Setup Guide for Stories Above & Beyond

## 📹 How to Add Your Videos

You now have a flexible system that supports both uploaded videos and Instagram embeds!

### **Step 1: Upload Your Two Videos**

1. **Prepare your videos:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 minimum  
   - File size: Under 50MB each
   - Duration: 10-60 seconds

2. **Upload to the videos folder:**
   - Replace `video-1.mp4` with your first video
   - Replace `video-2.mp4` with your second video
   - You can rename them to be more descriptive (e.g., `hero-background.mp4`, `corporate-showcase.mp4`)

3. **Update the HTML if you rename files:**
   - Find `src="videos/video-1.mp4"` in index.html
   - Replace with your actual filename

### **Step 2: Add Instagram Embeds**

1. **Get Instagram Post URLs:**
   - Go to your Instagram post
   - Click the three dots (⋯) 
   - Select "Copy Link"
   - Example: `https://www.instagram.com/p/ABC123DEF/`

2. **Update the HTML:**
   - Find `YOUR_POST_ID_HERE` in index.html
   - Replace with your actual post ID (the part after `/p/`)
   - Example: Replace `YOUR_POST_ID_HERE` with `ABC123DEF`

### **Step 3: Customize Titles and Descriptions**

Update the overlay text for each video:
- `<h3>Featured Work</h3>` - Change to your video title
- `<p>Professional aerial cinematography</p>` - Change to your description

### **Current Setup:**

✅ **Uploaded Videos:** 2 slots ready
✅ **Instagram Embeds:** 2 slots ready  
✅ **Responsive Design:** Works on all devices
✅ **Auto-play:** Videos play on hover
✅ **Fallback:** Shows poster images if videos fail

### **Example Instagram Post URLs:**

From your Instagram (@dailydronestories), you'll need URLs like:
- `https://www.instagram.com/p/POST_ID_1/`
- `https://www.instagram.com/p/POST_ID_2/`

### **Need Help?**

1. **Video not showing?** Check the filename matches exactly
2. **Instagram not loading?** Verify the post URL is correct and public
3. **Performance issues?** Compress videos to under 50MB

The website will automatically handle the rest!