type Props = {
    title:string,
    value:number,
    color?:string
}

export const InfoItem = ({title, value, color}:Props) => {

    return(
        <div className="flex-1">
            <div className="text-center font-bold text-gray-700">{title}</div>
            <div className="text-center font-bold" style={{color:color}}>R${value.toFixed(2)}</div>
        </div>
    )
}
