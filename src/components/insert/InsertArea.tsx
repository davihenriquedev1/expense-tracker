import { Item } from "@/types/Item"
import { useForm } from "react-hook-form";
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { categories } from "@/data/categories";
import { maskNumber } from "@/helpers/maskNumber";

type Props = {
    onAdd:(item:Item) => void
}

const schema =  z.object({
    date: z.preprocess(
        (value) => (typeof value === "string" && value ? new Date(value) : value),
        z.date({ required_error: "Insira uma data válida" })
    ),
    category: z.string().min(1, "Insira uma categoria"),
    title: z.string().min(1, "Insira um título"),
    value: z.string().min(1, "Insira um valor").transform(value => parseFloat(value).toFixed(2))
})

type FormData = z.infer<typeof schema>

export const InsertArea = ({onAdd}:Props) => {

    const {register, handleSubmit, watch, formState:{errors}, setValue, reset} = useForm<FormData>({
        resolver:zodResolver(schema),
        defaultValues:{
            date:new Date(),
            category:'',
            title:'',
            value:'',
        }
    })

    const handleSubmitItem =(values:FormData) => {
        onAdd({
            title:values.title, 
            date:values.date,
            category:values.category, 
            value:Number(values.value)
        })
        reset()
    }
    
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = maskNumber(undefined, e.target.value);
        setValue('value', value)
    }
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate()+1;
        setValue("date", new Date(year, month, day))
    }   

    return (
        <div className="bg-white shadow-lg rounded-md p-2 mt-4">
            <h1 className="text-2xl mb-3 font-bold text-sky-950">Insira um novo ganho ou despesa do mês</h1>
            <form action="" onSubmit={handleSubmit(handleSubmitItem)} className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-bold">Título</label>
                    <input {...register("title")} className={`outline-0 border  rounded-lg p-1 ${errors.title? 'border-red-600/30': 'border-sky-800/30'} `}/>
                    {errors.title && <span className="text-red-700">{errors.title.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="font-bold">Categoria</label>
                    <select {...register("category")} className={`outline-0 border rounded-lg p-[7px] ${errors.category? 'border-red-600/30': 'border-sky-800/30'}`}>
                        <option value="">---</option>
                        {Object.entries(categories).map(([key, value]) => (
                            <option key={key} value={key}>{value.title}</option>
                        ))
                        }
                    </select>
                    {errors.category && <span className="text-red-700">{errors.category.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="font-bold">Data</label>
                    <input {...register("date")} type="date" value={
                        watch("date")
                            ? new Date(watch("date")).toISOString().split("T")[0]
                            : ""
                    } onChange={handleDateChange} name="" id="date" title="date" className={`outline-0 border rounded-lg p-[3px] cursor-pointer ${errors.date? 'border-red-600/30': 'border-sky-800/30'}`} />
                    {errors.date && <span className="text-red-700">{errors.date.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="value" className="font-bold">Valor</label>
                    <input {...register("value")} onChange={handleValueChange} type="text" name="value" id="value" title="value" className={`outline-0 border border-sky-800/30 rounded-lg p-1 cursor-pointer ${errors.value? 'border-red-600/30': 'border-sky-800/30'}`} />
                    {errors.value && <span className="text-red-700">{errors.value.message}</span>}
                </div>
                <div className="flex-1 col-span-2 flex justify-center md:justify-start">
                    <button title="Insert" type="submit" className="bg-sky-800 px-3 py-2 rounded-3xl text-3xl text-white ">Adicionar</button>
                </div>
            </form>
        </div>
    )
}