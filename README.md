# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and ShadCN UI components. Features dark/light mode toggle, smooth animations, and optimized performance.

## 🚀 Features

- **Dark/Light Mode Toggle**: Seamless theme switching with smooth transitions
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Modern UI Components**: Built with ShadCN UI for consistency and accessibility
- **Smooth Animations**: Engaging user experience with subtle animations
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading times with Next.js optimization features

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `src/app/layout.tsx` - Update metadata (title, description, etc.)
- `src/components/hero-section.tsx` - Update name, roles, and description
- `src/components/about-section.tsx` - Update personal story, skills, and experience
- `src/components/projects-section.tsx` - Update projects with your own work
- `src/components/contact-section.tsx` - Update contact information and social links
- `src/components/footer.tsx` - Update footer information

### Images

Replace placeholder images in the `public` directory:

- Add your profile photo as `public/profile.jpg`
- Add project screenshots as `public/project-1.jpg`, `public/project-2.jpg`, etc.

### Colors and Styling

The website uses CSS variables for theming. You can customize colors in:

- `src/app/globals.css` - Update CSS custom properties for light/dark themes

## 📱 Sections

1. **Hero Section**: Introduction with animated role titles
2. **About Section**: Personal story, skills, and experience
3. **Projects Section**: Featured and other projects showcase
4. **Contact Section**: Contact form and social media links
5. **Footer**: Copyright and social links

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### Other Platforms

The website can be deployed to any platform that supports Node.js:

- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance Features

- **Static Site Generation (SSG)**: Pre-rendered pages for faster loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Lazy Loading**: Components and images load when needed
- **SEO Optimization**: Meta tags and structured data

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio or have any questions, feel free to reach out through the contact form on the website or open an issue on GitHub.

---

**Made with ❤️ using Next.js and ShadCN UI**
