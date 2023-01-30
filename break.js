for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}



var items = ['alu', 'potol', 'shosha', 'peyaj', 'kola', 'kumra', 'komola', 'snake', 'watch', 'mobile']
for (var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'watch'){
        break;
    }
    console.log(item);
}