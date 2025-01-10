import { Item } from "@/types/Item"
import { TableItem } from "./TableItem"

type Props = {
    list:Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
      <div className="p-3 rounded-lg bg-white shadow-md mt-4">
        <table className="w-full border-collapse text-left">
          <thead className="text-gray-700">
            <tr>
              <th className="py-3 px-4 w-24">Data</th>
              <th className="py-3 px-4 w-32">Categoria</th>
              <th className="py-3 px-4">Título</th>
              <th className="py-3 px-4 w-40">Valor</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <TableItem item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };