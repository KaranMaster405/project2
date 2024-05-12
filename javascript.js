let string = "";
let screen = document.getElementById("screen");

console.log(screen);

let buttonGroup = document.querySelectorAll(".button");
console.log(buttonGroup.length);
{
    document.getElementById(screen).innerHTML

    button.addEventListener('click',function(e)
    {
        if(e.target.textContent == 'C')
        {
            string = "";
            screen.value = ""; 
        }
        else if(e.target.textContent != '=')
        {
        string += e.target.textContent;
        screen.value = string;
        console.log(string);
        }
        else if(e.target.textContent == '=')
        {
            var result = eval(string);
            console.log(result);
            screen.value = result;
            string = "";
        }
       
    })

};
