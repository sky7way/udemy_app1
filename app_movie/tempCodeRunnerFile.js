function getTimeFromMinutes(getMinutes) {
    if(getMinutes < 0){
        return `Ошибка, проверьте данные`;
    }
    
    let hour = Math.floor(getMinutes / 60);
    let minutes = getMinutes % 60;
    let str = '';
    
    switch (hour) {
        case 0:
            str = 'часов'
            break;
        case 1:
            str = 'час'
            break;
        case 2:
        case 3:
        case 4:
            str = 'часa'
            break;
        default:
            hoursStr = 'часов';
    }
    return `Это ${hour} ${str} и ${minutes} минут`
}

console.log(getTimeFromMinutes(150));