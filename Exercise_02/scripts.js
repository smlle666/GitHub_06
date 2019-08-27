function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function button_2()
{
    document.body.style.backgroundColor = getRandomColor();
}

function button_3()
{
    // не получается сделать через http запросы т.к. нет своего сервера (даже локального, пока)
    document.body.innerHTML = '<div class="flex-container"><div class="cell red">Здесь у нас содержимое красного блока! Ого!</div><div class="cell orange">А цвет этого блока - апельсинчик!</div><div class="cell green">А это трава. Легальная. Без намёков.</div><div class="cell brown">Ну... Без комментариев. Давайте думать, что это всё же шоколад.</div><div class="cell blue">Как небо голубое, его глаза манят!</div><div class="cell purple">Зови гордо меня deep purple.</div></div>';
    document.head.innerHTML = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Зад\'Ани\'Ё ибн ДВА</title><link href="css.css" rel="stylesheet">';
}