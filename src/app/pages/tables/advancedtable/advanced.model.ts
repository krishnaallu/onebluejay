// Table data
export interface Table {
    name: string;
    mobile: number;
    age: number;
    state: string;
    dateofbirth: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
