let display = document.getElementById('tip-display');

let buttons = Array.from(document.getElementsByClassName('tip-button'));

let tipAmount = 0;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'RESET':
                // Insert removal of variables and such
                // In real calc, set display to ''
                break;

            case '5%':
                tipAmount = 0.05;
                console.log(tipAmount);
                break;
            case '10%':
                tipAmount = 0.1;
                console.log(tipAmount);
                break;
            case '15%':
                    tipAmount = 0.15;
                    console.log(tipAmount);
                    break;
            case '25%':
                tipAmount = 0.25;
                console.log(tipAmount);
                break;
            case '50%':
                tipAmount = 0.5;
                console.log(tipAmount);
                break;
            case 'Custom':
                tipAmount





            /* case '=':
                 try {
                     display.innerText = eval(display.innerText); (For actual calculator)
                 } catch {
                     display.innerText = 'Error';
                 }
            
               break; */
               
            default:
              
                console.log(tipAmount);
        }
    });
});