'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'viem/chains';

export function Providers({ children }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'dark',
          theme: 'default',
          name: 'Wallet Graph Sitter',
        },
      }}
    >
      <MiniKitProvider chain={base}>
        {children}
      </MiniKitProvider>
    </OnchainKitProvider>
  );
}
