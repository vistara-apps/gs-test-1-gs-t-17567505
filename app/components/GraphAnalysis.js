'use client';

import { useState } from 'react';

export function GraphAnalysis() {
  const [analysisData] = useState({
    riskScore: 'Low',
    connections: 42,
    clusters: 3,
    patterns: [
      { type: 'DeFi Activity', confidence: 95, description: 'Regular interaction with Uniswap and Compound' },
      { type: 'NFT Trading', confidence: 78, description: 'Active on OpenSea marketplace' },
      { type: 'Bridge Usage', confidence: 65, description: 'Cross-chain transactions detected' }
    ]
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Graph Analysis</h2>
      
      <div className="card">
        <h3 className="text-lg font-medium text-accent mb-3">Risk Assessment</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted">Risk Score:</span>
            <span className={`font-medium px-2 py-1 rounded text-sm ${
              analysisData.riskScore === 'Low' ? 'bg-green-500/20 text-green-400' :
              analysisData.riskScore === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {analysisData.riskScore}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Connected Addresses:</span>
            <span className="font-medium">{analysisData.connections}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Transaction Clusters:</span>
            <span className="font-medium">{analysisData.clusters}</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-medium text-accent mb-3">Behavior Patterns</h3>
        <div className="space-y-3">
          {analysisData.patterns.map((pattern, index) => (
            <div key={index} className="border rounded-md p-3" style={{ borderColor: 'rgb(255 255 255 / 0.1)' }}>
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">{pattern.type}</span>
                <span className="text-sm text-accent">{pattern.confidence}%</span>
              </div>
              <p className="text-sm text-muted">{pattern.description}</p>
              <div className="mt-2 bg-surface rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${pattern.confidence}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-medium text-accent mb-3">Network Visualization</h3>
        <div className="bg-surface rounded-lg p-4 text-center">
          <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <span className="text-muted">Interactive graph visualization would appear here</span>
          </div>
          <p className="text-sm text-muted mt-2">
            Graph-sitter analysis showing transaction flow and address relationships
          </p>
        </div>
      </div>
    </div>
  );
}
