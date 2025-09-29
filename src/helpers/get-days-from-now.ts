export const getDayFromNow = (date: string) => {
    const today = new Date();
    const futureDate = new Date(date);
    const diffTime = futureDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}