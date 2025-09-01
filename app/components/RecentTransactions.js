'use client';

import { useState, useEffect } from 'react';

export function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching recent transactions
    setTransactions([
      {
        id: '1',
        type: 'send',
        amount: '0.5 ETH',
        to: '0x742d...a3f1',
        timestamp: '2 hours ago',
        status: 'confirmed',
        gasUsed: '0.002 ETH'
      },
      {
        id: '2',
        type: 'receive',
        amount: '1.2 ETH',
        from: '0x1a2b...c4d5',
        timestamp: '5 hours ago',
        status: 'confirmed',
        gasUsed: '0.001 ETH'
      },
      {
        id: '3',
        type: 'swap',
        amount: '100 USDC → 0.1 ETH',
        to: 'Uniswap',
        timestamp: '1 day ago',
        status: 'confirmed',
        gasUsed: '0.015 ETH'
      },
    ]);
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'send':
        return (
          <div className="w-8 h-8 bg-error/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        );
      case 'receive':
        return (
          <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5l-9-2 9 18 9-18-9 2zm0 0v8" />
            </svg>
          </div>
        );
      case 'swap':
        return (
          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-text mb-4">Recent Transactions</h2>
      
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="transaction-item">
            <div className="flex items-center space-x-3">
              {getTypeIcon(tx.type)}
              <div>
                <div className="text-text font-medium">{tx.amount}</div>
                <div className="text-muted text-sm">
                  {tx.type === 'send' ? `To ${tx.to}` : 
                   tx.type === 'receive' ? `From ${tx.from}` : 
                   tx.to}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-muted text-sm">{tx.timestamp}</div>
              <div className="text-success text-xs">{tx.status}</div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-center text-accent hover:text-accent/80 text-sm font-medium transition-colors">
        View All Transactions
      </button>
    </div>
  );
}
