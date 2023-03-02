export const debounce = (func: () => void, time: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return () => {
        if (timer) {
            clearInterval(timer);
        }
        timer = setTimeout(func, time);
    }
}