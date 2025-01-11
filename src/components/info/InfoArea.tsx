import { formatCurrentMonth } from "@/helpers/formatCurrentMonth"
import { InfoItem } from "./InfoItem";

type Props = {
    currentMonth:string,
    onMonthChange:(newMonth:string)=> void,
    income:number,
    expense:number
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}:Props) => {
    const month = formatCurrentMonth(currentMonth);

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`);
    }

    const handleNexMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`);
    }

    const balance = income - expense
    return (
        <div className="bg-white shadow-lg -mt-10 rounded-lg p-5 flex items-center gap-2 flex-col md:flex-row">
            <div className="flex items-center flex-1">
                <div className="rotate-180 text-3xl text-center cursor-pointer text-sky-500 active:scale-90  active:text-sky-700" onClick={handlePrevMonth} >►</div>
                <div className="flex-1 text-center">{month}</div>
                <div className="text-3xl text-center cursor-pointer text-sky-500 active:scale-90 active:text-sky-700" onClick={handleNexMonth}>►</div>
            </div>
            <div className="flex flex-[2] gap-10">
                <InfoItem title="Receitas" value={income} />
                <InfoItem title="Despesas" value={expense}/>
                <InfoItem title="Balanço" value={balance} color={balance < 0 ? 'red' : '#67cb57'}/>
            </div>
        </div>
    )
}