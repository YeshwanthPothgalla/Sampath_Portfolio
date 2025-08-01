# Video Upload Guide for Sampath's Drone Portfolio

## 📁 Video File Structure

Your videos should be placed in the `videos/` folder with these specific names:

```
videos/
├── hero-background.mp4          # Main hero section background video
├── corporate-showcase.mp4       # Corporate/business projects video
├── real-estate-showcase.mp4     # Real estate projects video
├── event-coverage.mp4           # Event coverage video
├── cinematic-landscapes.mp4     # Landscape/travel video
└── README.md                    # This guide
```

## 🎥 Video Requirements

### Technical Specifications:
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9
- **Frame Rate**: 24fps, 30fps, or 60fps
- **File Size**: Under 50MB per video for optimal web performance
- **Duration**: 10-30 seconds for portfolio videos, 30-60 seconds for hero video

### Quality Guidelines:
- High-quality footage with good lighting
- Stable, smooth camera movements
- Clear, crisp visuals
- Professional color grading preferred
- No audio required (videos will be muted)

## 📝 How to Replace Videos

### Step 1: Prepare Your Videos
1. Edit your videos to the recommended specifications
2. Export as MP4 files
3. Name them according to the structure above

### Step 2: Upload to Videos Folder
1. Place your video files in the `videos/` folder
2. Ensure the filenames match exactly (case-sensitive)

### Step 3: Update Poster Images (Optional)
If you want custom thumbnail images:
1. Take a screenshot from each video
2. Upload to an image hosting service (like Imgur, Cloudinary, etc.)
3. Replace the poster URLs in the HTML file

## 🖼️ Poster Image Locations in Code

Find these lines in `index.html` and replace with your own image URLs:

```html
<!-- Hero Video Poster -->
poster="YOUR_HERO_THUMBNAIL_URL_HERE"

<!-- Portfolio Video Posters -->
poster="YOUR_CORPORATE_THUMBNAIL_URL_HERE"
poster="YOUR_REALESTATE_THUMBNAIL_URL_HERE"
poster="YOUR_EVENT_THUMBNAIL_URL_HERE"
poster="YOUR_LANDSCAPE_THUMBNAIL_URL_HERE"
```

## 🎨 Video Content Suggestions

### Hero Background Video:
- Stunning aerial shot of landscapes or cityscapes
- Smooth, cinematic movement
- Represents your best work
- Sets the tone for your portfolio

### Corporate Showcase:
- Business buildings, offices, or industrial sites
- Professional, clean shots
- Demonstrates commercial capabilities

### Real Estate Showcase:
- Beautiful properties from aerial perspectives
- Luxury homes, developments, or architectural features
- Shows property marketing expertise

### Event Coverage:
- Weddings, festivals, or corporate events
- Dynamic shots showing scale and atmosphere
- Demonstrates event videography skills

### Cinematic Landscapes:
- Natural beauty, travel destinations
- Artistic, cinematic shots
- Shows creative and artistic capabilities

## 🚀 Performance Tips

1. **Compress Videos**: Use tools like HandBrake to reduce file sizes
2. **Test Loading**: Check how quickly videos load on different devices
3. **Fallback Images**: Always include poster images for slow connections
4. **Mobile Optimization**: Test on mobile devices for performance

## 🔧 Troubleshooting

### Video Not Playing?
- Check file format (must be MP4)
- Verify filename matches exactly
- Ensure file isn't corrupted
- Check file size (very large files may not load)

### Slow Loading?
- Reduce file size through compression
- Consider shorter video duration
- Optimize video encoding settings

### Quality Issues?
- Check original video resolution
- Ensure proper export settings
- Verify video isn't over-compressed

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all file paths are correct
3. Test with a smaller video file first
4. Ensure your web server supports video files

---

**Remember**: Always keep backup copies of your original, high-quality videos before compressing for web use!