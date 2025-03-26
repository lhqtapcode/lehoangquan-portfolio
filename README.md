<<<<<<< HEAD
"# lehoangquan-portfolio" 
=======
# Lê Hoàng Quân Portfolio

This is a personal portfolio website for Lê Hoàng Quân, a high school student at High School for the Gifted - VNUHCM with a passion for technology, mathematics, and charity work.

## Features

- Responsive design for all screen sizes
- Light/Dark mode toggle
- Bilingual support (Vietnamese/English)
- Interactive animations with Framer Motion
- Modern UI with clean design
- API integrations with GitHub, Unsplash, EmailJS, Google Drive, and Facebook

## Technologies Used

- React 19 with Hooks
- React Router v6 for navigation
- Framer Motion for animations
- i18next for internationalization
- TailwindCSS for styling
- EmailJS for contact form
- Multiple API integrations
- Vite for build tooling

## API Integrations

- **GitHub API**: Fetches repositories and user information
- **Unsplash API**: Provides high-quality images for the portfolio
- **EmailJS**: Handles sending emails from the contact form
- **Google Drive API**: Fetches documents for the portfolio
- **Facebook API**: Displays events and page information

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   │   ├── layout/   # Layout components (Header, Footer, etc.)
│   │   ├── shared/   # Shared components (Button, Card, etc.)
│   │   └── api-integrations/ # API integration components
│   ├── contexts/     # React contexts (Theme, Language)
│   ├── hooks/        # Custom React hooks
│   ├── locales/      # Translation files
│   ├── pages/        # Page components
│   ├── router/       # React Router setup
│   ├── styles/       # Global styles
│   ├── api/          # API integration functions
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
└── ... config files  # Various configuration files
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lehoangquan/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file with your API keys:
   ```
   # GitHub API credentials
   VITE_GITHUB_TOKEN=your_github_token
   VITE_GITHUB_USERNAME=your_github_username

   # Facebook/Meta credentials
   VITE_FACEBOOK_ACCESS_TOKEN=your_facebook_token

   # Unsplash credentials
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_key

   # EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

   # Google Drive API credentials
   VITE_GOOGLE_API_KEY=your_google_api_key
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Customization

- Edit `src/locales/*.json` files to update the text content
- Modify `tailwind.config.js` to customize the color scheme
- Add your own images in the `public/assets/images` directory

## Deployment

This website can be deployed to any static site hosting service, such as:

- Vercel
- Netlify
- GitHub Pages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/)
>>>>>>> 801558d (Initial commit)
