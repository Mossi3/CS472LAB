function add_local(){
    window.localStorage['retrieve'] = document.getElementById('task').value;
    document.write(add_local())
}

function show_local(){
        document.write(add_local())
}