export const debounce = (func: () => void, time: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return () => {
        if (timer) {
            clearInterval(timer);
        }
        timer = setTimeout(func, time);
    }
}

export const throttle = (func: () => void, time: number) => {
    let timer: NodeJS.Timeout | null;
    return () => {
        if (!timer) {
            timer = setTimeout(() => { func(); timer = null }, time)
        }
    }
}