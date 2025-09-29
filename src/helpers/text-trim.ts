/**
 *
 * @param {string} text
 * @param {number} count
 * @return {string}
 */

export function textTrim(text: string, count: number): string {
    if (text.length <= count) {
        return text;
    }
    return text.substring(0, count) + '...';
}