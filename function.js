function interest() {
    let send = document.getElementById("send").value;
    let n = document.getElementById("n").value;
    let total = send*n*(6,9/100) ;
    document.getElementById("total").innerHTML = total ;
}