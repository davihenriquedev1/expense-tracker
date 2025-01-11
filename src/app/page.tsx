"use client";

import { InfoArea } from "@/components/info/InfoArea";
import { InsertArea } from "@/components/insert/InsertArea";
import { TableArea } from "@/components/table/TableArea";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [list, setList] = useState<Item[]>(items); // Tipagem do estado como array de Item
  const [currentMonth, setCurrentMonth] = useState<string>(getCurrentMonth()); // Estado de mês atual como string
  const [filteredList, setFilteredList] = useState<Item[]>([]); // Estado de lista filtrada como array de Item
  const [income, setIncome] = useState<number>(0); // Estado de receitas como número
  const [expense, setExpense] = useState<number>(0); // Estado de despesas como número

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth)); // Atualiza a lista filtrada com base no mês
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string): void => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      const itemCategory = categories[filteredList[i].category]; // Garantir que a categoria existe
      if (itemCategory?.expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleAddItem = (item: Item): void => {
    setList((prevList) => [...prevList, item]); // Adiciona o item à lista
  };

  return (
    <div>
      <header className="bg-cyan-900 h-40 text-center">
        <h1 className="m-0 p-0 text-white pt-6 font-bold text-3xl">Sistema Financeiro</h1>
      </header>
      <main className="m-auto container max-w-[980px] mb-10 ">
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InsertArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </main>
    </div>
  );
};

export default Page;
