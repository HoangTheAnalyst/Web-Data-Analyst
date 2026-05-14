# 📊 Data Analyst Portfolio Website

Một website portfolio chuyên nghiệp cho Data Analyst với thiết kế hiện đại, responsive, và những hiệu ứng đẹp mắt.

## ✨ Tính Năng

### 🎨 Design Features
- **Modern UI**: Thiết kế card-based với spacing và soft shadows
- **Responsive Design**: Hoàn toàn responsive từ mobile đến desktop
- **Smooth Animations**: Các hiệu ứng mượt mà khi scroll và hover
- **Dark Theme**: Giao diện dark theme chuyên nghiệp
- **Fast Performance**: Tối ưu hóa cho tốc độ tải nhanh

### 📱 Sections

1. **Navigation Bar**: 
   - Fixed navbar với logo gradient
   - Mobile hamburger menu
   - Smooth navigation links

2. **Hero Section**:
   - Animated hero content
   - Call-to-action buttons
   - Morphing shape animation

3. **About Section**:
   - Giới thiệu bản thân
   - Danh sách kỹ năng với icons
   - Skill cards interactiv

4. **Projects Section**:
   - Project cards với hover effects
   - Links đến GitHub repositories
   - Links đến Power BI dashboards
   - Project tags và descriptions
   - 6 mẫu dự án (có thể customize)

5. **Contact Section**:
   - Contact form với validation
   - Contact information
   - Social media links
   - Notification system

6. **Footer**:
   - Copyright information
   - Design credits

## 🚀 Cách Sử Dụng

### 1. Mở Website
Đơn giản mở file `index.html` bằng browser:
```bash
# Hoặc click chuột phải vào index.html > Open with > Browser
```

### 2. Customize Thông Tin
Sửa các thông tin sau trong `index.html`:

- **Tên và mô tả**: Tìm phần Hero Section
- **Email & Phone**: Tìm phần Contact Section
- **Social Links**: Cập nhật links GitHub, LinkedIn, Twitter, Medium
- **Projects**: Thêm/sửa dự án của bạn
- **Skills**: Cập nhật danh sách kỹ năng

### 3. Thêm Hình Ảnh
Đặt hình ảnh vào folder `assets/images/` và tham chiếu trong HTML

### 4. Tùy Chỉnh Màu Sắc
Sửa CSS variables trong `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Màu chính */
    --secondary-color: #06b6d4;    /* Màu phụ */
    --accent-color: #ec4899;        /* Màu accent */
}
```

## 📦 Cấu Trúc File

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Styling (responsive)
├── script.js           # JavaScript (interactivity)
└── assets/
    └── images/         # Folder cho hình ảnh
```

## 🎯 Features Chi Tiết

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Hamburger menu trên mobile
- Flexible grid layouts

### ✅ Animations & Effects
- Fade-in animations on scroll
- Hover effects trên cards
- Smooth transitions
- Morphing shape animations
- Parallax scrolling

### ✅ Interactive Elements
- Smooth scroll navigation
- Active link highlighting
- Form validation
- Notification system
- Mobile menu toggle

### ✅ Performance
- Minimal external dependencies
- Optimized CSS
- Efficient JavaScript
- Lazy loading ready
- Print friendly

## 🛠️ Công Nghệ

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, flexbox, grid
- **JavaScript (Vanilla)**: No frameworks needed
- **Font Awesome 6**: Icons library
- **Responsive**: CSS media queries

## 📝 Customize Projects

Ví dụ cách thêm project mới:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-chart-pie"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Tên Dự Án</h3>
        <p class="project-description">Mô tả dự án...</p>
        <div class="project-tags">
            <span class="tag">Tool 1</span>
            <span class="tag">Tool 2</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/your-repo" target="_blank" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://powerbi.link" target="_blank" class="project-link powerbi-link">
                <i class="fas fa-chart-bar"></i> Power BI
            </a>
        </div>
    </div>
</div>
```

## 🎨 Color Palette

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #06b6d4 (Cyan)
- **Accent**: #ec4899 (Pink)
- **Background**: #0f172a (Dark Navy)
- **Surface**: #1e293b (Lighter Navy)

## ⌨️ Keyboard Navigation

- `Tab`: Navigate through links
- `Enter`: Activate links and buttons
- `Esc`: Close mobile menu

## 🔗 Thêm Links

### GitHub
```html
<a href="https://github.com/your-username" target="_blank">
    <i class="fab fa-github"></i> GitHub
</a>
```

### Power BI
```html
<a href="https://app.powerbi.com/..." target="_blank">
    <i class="fas fa-chart-bar"></i> Power BI
</a>
```

### LinkedIn
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
    <i class="fab fa-linkedin"></i> LinkedIn
</a>
```

## 📞 Contact Form

Form hỗ trợ validation:
- Required fields check
- Email validation
- Success/error notifications
- Reset sau khi submit

Để kết nối với backend, uncomment phần fetch() trong `script.js`

## 🌐 Deployment

### Deploy trên GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch
4. Website sẽ live tại `https://username.github.io/repo-name`

### Deploy trên Netlify
1. Kéo thả folder vào Netlify
2. Hoặc connect GitHub repository
3. Custom domain settings

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 💡 Tips

1. **Hình ảnh**: Sử dụng format .webp để giảm dung lượng
2. **SEO**: Thêm meta tags trong `<head>`
3. **Icons**: Browse thêm icons tại [Font Awesome](https://fontawesome.com)
4. **Fonts**: Thêm Google Fonts cho typography tuyệt vời hơn

## 📄 License

Free to use and modify for personal portfolio

---

**Chúc bạn thành công!** 🚀

Nếu có câu hỏi, hãy tùy chỉnh các file theo nhu cầu của bạn!
