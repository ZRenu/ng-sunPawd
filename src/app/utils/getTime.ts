/**时间戳转日期 */
export function getTime(data) {
    if (data === undefined || data === null || data === '') {
        return '';
    } else {
        const date = new Date(data);
        const year = date.getFullYear();
        const month = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)).toString();
        const day = (date.getDate()) < 10 ? '0' + date.getDate() : date.getDate();
        const time = year + '-' + month + '-' + day;
        return time;
    }
}
