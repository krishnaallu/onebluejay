// Table data
export interface Table {
    name: string;
    mobilenumber: string;
    office: string;
    age: number;
    dateofbirth: string;
    salary: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
