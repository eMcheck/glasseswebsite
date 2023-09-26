export default function changeMoney(curM, price) {
    let temp = price

    switch (curM) {
        case 'dollar': {
            temp = price * 1.07;
            break;
        }
        case 'euro': {
            temp = price;
            break;
        }
        case 'rub': {
            temp = price * 101.92;
            break;
        }
        case 'hryvnia': {
            temp = price * 39.35;
            break;
        }
    }

    return Math.floor(temp);
}