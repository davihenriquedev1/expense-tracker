import { categories } from "@/data/categories"
import { formatDate } from "@/helpers/formatDate"
import { Item } from "@/types/Item"

type Props = {
    item:Item
}

export const TableItem = ({ item }: Props) => {
    const date = formatDate(item.date);
    const color = categories[item.category].color;
  
    return (
      <tr className="border-b border-gray-200 last:border-none hover:bg-gray-100 transition">
        <td className="py-3 px-4">{date}</td>
        <td
          className="py-3 px-4  text-white text-center"
          
        >
          <div title={categories[item.category].desc}className="p-1 rounded-md" style={{ backgroundColor: color }}>{categories[item.category].title}</div>
        </td>
        <td className="py-3 px-4">{item.title}</td>
        <td
          className="py-3 px-4 text-right font-medium"
          style={categories[item.category].expense ? { color: 'red' } : { color: '#67cb57' }}
        >
          R${item.value.toFixed(2)}
        </td>
      </tr>
    );
  };
  