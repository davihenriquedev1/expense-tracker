import { Item } from "@/types/Item";

export const items :Item[] = [
    {
        date: new Date(2025, 0, 9), 
        category:'food',
        title: 'McDonalds',
        value: 32.12
    },
    {
        date: new Date(2025, 0, 9), 
        category:'food',
        title: 'Burger King',
        value: 28,
    },
    {
        date: new Date(2025, 0, 8), 
        category:'rent',
        title: 'Aluguel Apt',
        value: 2300
    },
    {
        date: new Date(2025, 0, 7), 
        category:'salary',
        title: 'Salário ACME',
        value: 4000
    },
];