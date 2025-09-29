/**
 * seo index able items
 * @return boolean
 */

export function isClient(): boolean {
    if (typeof window !== 'undefined') {
        return true;
    }
    return false;
}