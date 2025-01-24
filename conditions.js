console.log('5' == 5);
console.log('5' === 5);
console.log('5' != 5);
console.log('5' !== 5);

function switcharoo(value) {
    switch(value){
        case '1': {
            console.log('1');
            break;
        }
        case '2': {
            console.log('2');
            break;
        }
        case '3': {
            console.log('3');
            break;
        }
        case '4': {
            return undefined;
        }
        default: {
            console.log('burrrrpppp');
            break;
        }
    }
}
switcharoo("1");
switcharoo('2');
switcharoo('3');
switcharoo(4);
console.log(switcharoo("4"));