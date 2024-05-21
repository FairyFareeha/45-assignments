"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', text = 'I LOVE TYPESCRIPT') {
    console.log(`Make a ${size} shirt with a message : ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'SUMMER IS FUN ___ BUT WITH AC');
