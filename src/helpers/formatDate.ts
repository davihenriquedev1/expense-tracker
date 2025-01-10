export const formatDate =(date:Date) => {
    let day = `${date.getDate() >= 10 ? date.getDate() : '0'+date.getDate()}`;
    let month = date.getMonth() + 1;
    let formattedMonth = `${month < 10 ? '0'+month : month }`;
    let year = date.getFullYear();

    return `${day}/${formattedMonth}/${year}`
}