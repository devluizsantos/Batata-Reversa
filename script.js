function reverseWord() {
    var word = document.getElementById('write').value;
    var reversed = '';

    for ( var i = word.length - 1; i >= 0; i--) {
        reversed += word[i]
    }

    var output = document.getElementById('output');
    output.innerHTML = reversed;
}

document.getElementById('write').addEventListener('keypress', function(event)
    {
        if(event.key === 'Enter'){
            reverseWord();
        }
    });