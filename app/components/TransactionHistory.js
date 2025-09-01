'use client';

import { useState } from 'react';

export function TransactionHistory() {
  const [transactions] = useState([
    {
      id: '1',
      type: 'send',
      amount: '0.5 ETH',
      to: '0x742d35Cc6634C0532925a3b8D4C9db96',
      timestamp: '2024-01-15 14:30',
      status: 'confirmed'
    },
    {
      id: '2',
      type: 'receive',
      amount: '1.2 ETH',
      from: '0x8ba1f109551bD432803012645Hac136c',
      timestamp: '2024-01-14 09:15',
      status: 'confirmed'
    },
    {
      id: '3',
      type: 'swap',
      amount: '100 USDC → 0.03 ETH',
      timestamp: '2024-01-13 16:45',
      status: 'confirmed'
    }
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      
      <div className="card">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-accent">Balance Overview</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span className="text-muted">ETH Balance:</span>
              <span className="font-medium">2.34 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">USD Value:</span>
              <span className="font-medium">$5,616.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="card animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  tx.type === 'send' ? 'bg-red-500' : 
                  tx.type === 'receive' ? 'bg-green-500' : 'bg-accent'
                }`} />
                <div>
                  <div className="font-medium capitalize">{tx.type}</div>
                  <div className="text-sm text-muted">{tx.timestamp}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{tx.amount}</div>
                <div className="text-sm text-accent">{tx.status}</div>
              </div>
            </div>
            {(tx.to || tx.from) && (
              <div className="mt-2 text-sm text-muted">
                {tx.to && `To: ${tx.to.slice(0, 10)}...`}
                {tx.from && `From: ${tx.from.slice(0, 10)}...`}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
