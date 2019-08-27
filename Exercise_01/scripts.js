// Username input
while (!(username = prompt("Холоп, представься пред царём!")))
{
    alert("Не вздумай шутить со мной, холоп!");
}

// checking username for digits
if (username.search(/\d/) != -1) 
{
    // If there are digits
    new_name = "";
    for (i = 0; i < username.length; i++)
        if (i % 2 == 0)
            new_name += username[i].toUpperCase();
        else
            new_name += username[i].toLowerCase();
}           
else
{
    // If there are not any digits
    new_name = username.split('').reverse().join('');
}
alert("Буду звать тебя " + new_name + ",  холоп.");