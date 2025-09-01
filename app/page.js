'use client';

import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Identity, Avatar, Name, Address, EthBalance } from '@coinbase/onchainkit/identity';
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { useEffect, useState } from 'react';
import { TransactionHistory } from './components/TransactionHistory';
import { GraphAnalysis } from './components/GraphAnalysis';

export default function App() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  const [activeTab, setActiveTab] = useState('wallet');

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="min-h-screen bg-bg text-text p-4">
      <div className="max-w-md mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">Wallet Graph Sitter</h1>
          
          <div className="card">
            <Wallet className="w-full">
              <ConnectWallet className="w-full">
                <span className="text-white">Connect Wallet</span>
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </header>

        <nav className="mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('wallet')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'wallet' ? 'bg-primary text-white' : 'bg-surface text-muted hover:text-text'
              }`}
            >
              Wallet
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'analysis' ? 'bg-primary text-white' : 'bg-surface text-muted hover:text-text'
              }`}
            >
              Analysis
            </button>
          </div>
        </nav>

        <main className="animate-fade-in">
          {activeTab === 'wallet' && <TransactionHistory />}
          {activeTab === 'analysis' && <GraphAnalysis />}
        </main>
      </div>
    </div>
  );
}
