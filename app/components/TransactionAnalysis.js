'use client';

import { useState, useEffect } from 'react';

export function TransactionAnalysis() {
  const [analysis, setAnalysis] = useState({
    patterns: [],
    insights: [],
    riskScore: 0,
  });
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // Simulate Graph-sitter analysis
    setAnalysis({
      patterns: [
        { type: 'DeFi Interaction', frequency: 65, risk: 'low' },
        { type: 'Token Swaps', frequency: 25, risk: 'medium' },
        { type: 'NFT Trading', frequency: 10, risk: 'high' },
      ],
      insights: [
        'Most active during weekends',
        'Prefers decentralized exchanges',
        'Low-risk transaction patterns detected',
      ],
      riskScore: 2.3,
    });
  }, []);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Trigger re-analysis with new data
    }, 2000);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'text-success';
      case 'medium': return 'text-warning';
      case 'high': return 'text-error';
      default: return 'text-muted';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text">Transaction Analysis</h2>
        <button 
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="btn-secondary text-sm"
        >
          {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-md font-medium text-text mb-2">Pattern Detection</h3>
          <div className="space-y-2">
            {analysis.patterns.map((pattern, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-bg rounded-md">
                <div>
                  <span className="text-text font-medium">{pattern.type}</span>
                  <span className="text-muted text-sm ml-2">({pattern.frequency}%)</span>
                </div>
                <span className={`text-sm font-medium ${getRiskColor(pattern.risk)}`}>
                  {pattern.risk} risk
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium text-text mb-2">Insights</h3>
          <div className="space-y-2">
            {analysis.insights.map((insight, index) => (
              <div key={index} className="flex items-center p-3 bg-bg rounded-md">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted text-sm">{insight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-bg rounded-md">
          <div className="flex items-center justify-between">
            <span className="text-text font-medium">Overall Risk Score</span>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${analysis.riskScore < 3 ? 'bg-success' : analysis.riskScore < 7 ? 'bg-warning' : 'bg-error'}`}></div>
              <span className="text-text font-bold">{analysis.riskScore}/10</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-surface rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${analysis.riskScore < 3 ? 'bg-success' : analysis.riskScore < 7 ? 'bg-warning' : 'bg-error'}`}
              style={{ width: `${(analysis.riskScore / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
