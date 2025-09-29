import moment from 'moment-jalaali';

export const getPersianDate = (date: string) => {
    // Convert the input date to moment object
    const momentDate = moment(date);

    // Convert to Persian calendar
    const persianDate = momentDate.format('jYYYY/jMM/jDD');

    // Get Persian month names
    const persianMonths = [
        'فروردین', 'اردیبهشت', 'خرداد',
        'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر',
        'دی', 'بهمن', 'اسفند'
    ];

    // Extract year, month, and day from Persian date
    const [year, month, day] = persianDate.split('/');
    const monthIndex = parseInt(month) - 1;

    return `${day} ${persianMonths[monthIndex]} ${year}`;
}