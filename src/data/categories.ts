import { Category } from "@/types/Category";

export const categories: Category = {
    food: {title:'Alimentação', color:'yellow', expense:true, desc:'(feira e extras)'},
    rent: {title: 'Aluguel', color:'blue', expense: true},
    salary: {title: 'Salário', color:'green', expense: false},
    monthlyExpenses: {title: 'Despesas Mensais', color:'#722F37', expense: true, desc:'(energia, água, internet, telefone, streaming...)'},
    otherExpenses: {title: 'Outros gastos', color:'#722F37', expense: true},
    otherEarnings: {title: 'Outros ganhos', color:'#636b2f', expense: false, desc:'renda extra, rendimentos de investimentos...'},
}