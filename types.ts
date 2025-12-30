
export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  description: string;
  type: TransactionType;
  currency: string;
}

export interface SummaryData {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export interface GeminiResponse {
  amount: number;
  type: TransactionType;
  category: string;
  description: string;
  currency: string;
}
