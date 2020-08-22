
let removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartIsi = cartItemContainer.getElementsByClassName('cart-isi')
    let total = 0
    for (let i = 0; i < cartIsi.length; i++){
        let cartIsian = cartIsi[i]
        let priceGacha = cartIsian.getElementsByClassName('gacha-harga')[0]
        let qtyGacha = cartIsian.getElementsByClassName('cart-qty')[0]
        let price = parseFloat(priceGacha.innerText.replace('$', ''))
        let qty = qtyGacha.value
        let total = total + (price*qty)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function owari(){
    alert("お買い物ありがとうございました～！！！")
    let isian = document.getElementsByClassName('cart-isi')
    isian.addEventListener(function(event){
        let clear = event.target
        clear.removeChild()
    })
}
