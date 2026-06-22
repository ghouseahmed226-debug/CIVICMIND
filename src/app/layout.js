import './globals.css';

export const metadata = {
  title: 'CivicMind — AI Decision Intelligence for Smart Communities',
  description: 'Transform raw civic data into clear insights, predictions, and recommended actions through natural language. Powered by multi-agent AI orchestration for mobility, safety, health, environment, and citizen engagement.',
  keywords: 'smart city, AI, decision intelligence, civic data, urban analytics, public safety, transit, environment',
  authors: [{ name: 'CivicMind Team' }],
  openGraph: {
    title: 'CivicMind — AI Decision Intelligence for Smart Communities',
    description: 'Transform raw civic data into clear insights, predictions, and recommended actions.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
