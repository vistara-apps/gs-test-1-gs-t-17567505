'use client';

import { useState, useEffect } from 'react';

export function WalletMetrics() {
  const [metrics, setMetrics] = useState({
    totalTransactions: 0,
    totalValue: 0,
    avgTransactionSize: 0,
    gasSpent: 0,
  });

  useEffect(() => {
    // Simulate fetching wallet metrics
    setMetrics({
      totalTransactions: 45,
      totalValue: 12.5,
      avgTransactionSize: 0.28,
      gasSpent: 0.025,
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="metric-card">
        <div className="text-2xl font-bold text-primary">{metrics.totalTransactions}</div>
        <div className="text-sm text-muted">Total Transactions</div>
      </div>
      
      <div className="metric-card">
        <div className="text-2xl font-bold text-success">{metrics.totalValue} ETH</div>
        <div className="text-sm text-muted">Total Value</div>
      </div>
      
      <div className="metric-card">
        <div className="text-2xl font-bold text-accent">{metrics.avgTransactionSize} ETH</div>
        <div className="text-sm text-muted">Avg Transaction</div>
      </div>
      
      <div className="metric-card">
        <div className="text-2xl font-bold text-warning">{metrics.gasSpent} ETH</div>
        <div className="text-sm text-muted">Gas Spent</div>
      </div>
    </div>
  );
}
