"use client";

import { InfoArea } from "@/components/info/InfoArea";
import { InsertArea } from "@/components/insert/InsertArea";
import { TableArea } from "@/components/table/TableArea";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const Page = () => {
	const [list, setList] = useState(items);
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const [filteredList, setFilteredList] = useState<Item[]>([]);
	const [income, setIncome] = useState(0);
	const [expense , setExpense] = useState(0);

	useEffect(()=> {
		setFilteredList(filterListByMonth(list, currentMonth))
	},[list, currentMonth]);

	const handleMonthChange = (newMonth:string) => {
		setCurrentMonth(newMonth);
	}

	useEffect(()=> {
		let incomeCount = 0;
		let expenseCount = 0;

		for (let i in filteredList) {
			if(categories[filteredList[i].category].expense) {
				expenseCount += filteredList[i].value;
			} else {
				incomeCount += filteredList[i].value;
			}
		}

		setIncome(incomeCount);
		setExpense(expenseCount);

	}, [filteredList]);

	const handleAddItem = (item:Item)=> {
		let newList = [...list];
		newList.push(item);
		setList(newList);
	}

	return (
		<div>
			<header className="bg-cyan-900 h-40 text-center">
				<h1 className="m-0 p-0 text-white pt-6 font-bold text-3xl">Sistema Financeiro</h1>
			</header>
			<main className="m-auto container max-w-[980px] mb-10 ">
				<InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>
				<InsertArea onAdd={handleAddItem}/>
				<TableArea list={filteredList}/>
			</main>
		</div>
	);
}

export default Page;