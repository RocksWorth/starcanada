# Star Canada International Website

A modern, responsive website for Star Canada International, a global trading company specializing in metal scrap and industrial equipment trading with a focus on sustainability.

## Project Overview

This project is a Next.js website built with Tailwind CSS, featuring a component-based architecture for better maintainability. The website showcases Star Canada International's services, value propositions, and contact information in a clean, professional design.

## Project Structure

```
my-project/
├── public/
│   └── images/           # Place all images here
│       ├── hero-background.jpg
│       ├── about-image.jpg
│       └── ...
├── src/
│   ├── app/
│   │   ├── components/   # All component files
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── KeySellingPoints.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Main layout component
│   │   └── page.tsx      # Main page that assembles all components
│   └── ...
├── package.json
├── tailwind.config.js
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-project
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create the images directory and add required images:
   ```
   mkdir -p public/images
   ```
   
   Add the following images to the public/images directory:
   - hero-background.jpg - A background image for the hero section
   - about-image.jpg - An image for the about section

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with consistent branding
- **Component-Based Architecture**: Modular code organization for better maintainability
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Next.js Framework**: React framework with server-side rendering capabilities

## Main Sections

- **Hero Section**: Prominent landing area with a call-to-action
- **About Section**: Company information and mission
- **Services Section**: Detailed information about metal scrap trading and industrial equipment services
- **Key Selling Points**: Highlighting global reach, sustainability, competitive pricing, and customer commitment
- **Testimonials**: Client feedback showcasing the company's reliability and expertise
- **Contact Section**: Contact form and email information for inquiries
- **Footer**: Navigation links and copyright information

## Customization

### Updating Content

- Edit the component files to update text content
- Replace sample testimonials with actual client feedback
- Update email addresses and contact information

### Styling

- The website uses Tailwind CSS for styling
- Modify the color scheme by updating class names (e.g., change `yellow-600` to `blue-600` for a different accent color)
- Adjust spacing and layout using Tailwind's utility classes

### Adding Images

- Place all images in the `public/images` directory
- Reference images in components using the Next.js Image component:
  ```jsx
  <Image
    src="/images/your-image-name.jpg"
    alt="Description of image"
    width={800}
    height={600}
  />
  ```

## Production Deployment

To build the project for production:

```
npm run build
# or
yarn build
```

You can then deploy the build output to hosting platforms such as Vercel, Netlify, or any other service that supports Next.js applications.

## Best Practices

- Keep component files focused on a single responsibility
- Use descriptive class names for better maintainability
- Optimize images for web performance
- Regularly test responsive behavior on different screen sizes

## Troubleshooting

If you encounter module import errors:

1. Check file names and paths for correct casing
2. Ensure all component files are in the correct location
3. Try restarting the development server
4. Clear your browser cache if you see outdated content

## License

This project is licensed under the MIT License - see the LICENSE file for details.