// Table data
export interface Table {
    billId: string;
    billDate: string;
    patient: string;
    payments: string;
    status: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
