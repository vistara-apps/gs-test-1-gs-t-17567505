import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Wallet Graph Sitter',
  description: 'Simple wallet app with graph-sitter analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
