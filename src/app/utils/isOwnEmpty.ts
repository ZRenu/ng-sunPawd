/**判断对象是否为空 */
export function isOwnEmpty(obj) {
    for (const name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
            // 返回false，不为空对象
        }
    }
    return true;
    // 返回true，为空对象
}
