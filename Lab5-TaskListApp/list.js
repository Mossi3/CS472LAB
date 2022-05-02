
    function addtask(){
        let input1 = document.getElementById('task').value;
        let input2 = document.getElementById('textarea').value;
        document.getElementById('textarea').innerText = input2 +'\n                              '+ input1;
        console.log(input2);
    }
    function cleartask(){
        document.getElementById('task').value = '';
        document.getElementById('textarea').value = '';
    }
