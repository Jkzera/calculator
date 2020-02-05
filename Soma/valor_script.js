function soma(){
    var tn1 = document.getElementById('n1')
    var tn2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    if(n1 === 0 && n2 === 0){
        alert('Insira pelo menos um valor!')
    }
    else{
        res.innerHTML = `<strong>${s}</strong>`
    }
}