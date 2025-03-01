export interface BreachAlert {
  id: string;
  source: string;
  data: Record<string, unknown>;
  timestamp: string;
}

export interface OSINTQueryResult {
  ipAddress?: string;
  domain?: string;
  breachedAccounts?: string[];
  vulnerabilities?: string[];
}

export interface DarknetMonitoringResult {
  keyword: string;
  mentions: number;
  riskScore: number;
}
