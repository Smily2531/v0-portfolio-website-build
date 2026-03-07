# Project Media Instructions

## Adding Images & Videos to Your Projects

### 📁 File Locations:
- **Images**: `public/images/projects/` - Place your project screenshots/mockups here
- **Videos**: `public/videos/` - Place your project demo videos here

### 🖼️ Image Requirements:
- **Format**: JPG, PNG, GIF, WebP
- **Size**: 800x600px or larger (will be cropped to fit)
- **Naming**: Use descriptive names like `flysmily-screenshot.jpg`

### 🎥 Video Requirements:
- **Format**: MP4 (H.264 codec recommended)
- **Size**: Keep under 10MB for web performance
- **Length**: 10-30 seconds for best UX
- **Content**: Show key features, UI interactions

### 📝 How to Add Media:

1. **Add your files** to the appropriate folders above
2. **Update the projects data** in `components/portfolio/projects.tsx`:
   ```typescript
   // For images:
   image: "/images/projects/your-image-name.jpg"

   // For videos:
   video: "/videos/your-video-name.mp4"
   image: null  // Set image to null when using video
   ```

3. **File naming examples**:
   - `flysmily-screenshot.jpg`
   - `samvaad-demo.mp4`
   - `event-ticketing-mockup.png`

### ✨ Features:
- **Hover Effects**: Images/videos scale up on hover
- **Auto-play Videos**: Videos play on hover, pause when mouse leaves
- **Responsive**: Media adapts to different screen sizes
- **Fallback**: Shows folder icon if no media is provided

### 🎨 Best Practices:
- Use high-quality screenshots showing your app's UI
- For videos, show actual functionality, not just scrolling
- Optimize file sizes for fast loading
- Test on both light and dark themes