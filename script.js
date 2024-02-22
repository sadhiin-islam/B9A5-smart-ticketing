

let count = 8;
let price = 550;
const seat = document.getElementsByClassName('seat-btn')
for (const seats of seat) {
    seats.addEventListener('click', function(e){
       count = count-1;
       document.getElementById("seat-number").innerText = count;
       const totalPrice = document.getElementById('total-price').innerText 
       const total = totalPrice + price
       totalPrice.innerText = total
       if (sitCount >= 4) {
        alert("You can only select up to 4 seats.");
        return; 
}});
 
}

