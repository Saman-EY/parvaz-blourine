export function highlightNumberInText(
    text: string,
    options?: {
        color?: string;
        className?: string;
    }
): string {
    if (!text || text.length) return '-';
    const numberRegex = /(\d+)/;
    const match = text.match(numberRegex);

    if (!match) return text;

    const colorClass = options?.color ? `style="color: ${options.color}"` : '';
    const classAttr = options?.className ? `class="${options.className}"` : '';

    return text.replace(
        numberRegex,
        `<span ${classAttr} ${colorClass}>${match[0]}</span>`
    );
}
