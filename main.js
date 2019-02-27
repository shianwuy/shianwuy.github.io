var contracts = new Array(3);
contracts[0] = new Array("au1903", "au1904", "au1905", "au1906", "au1908", "au1910", "au1912", "au2002");
contracts[1] = new Array("ag1903", "ag1904", "ag1905", "ag1906", "ag1907", "ag1908", "ag1909", "ag1910", "ag1911", "ag1912", "ag2001", "ag2002");
contracts[2] = new Array("cu1903", "cu1904", "cu1905", "cu1906", "cu1907", "cu1908", "cu1909", "cu1910", "cu1911", "cu1912", "cu2001", "cu2002");

var productInfoMap = new Map();

$(document).ready(function() {
    // alert("test");
    pareProduct();
});

function pareProduct() {
    // alert($.fn.jquery);

    var productEle = document.getElementById("product");
    for (var i in productList) {
        var item = productList[i];
        var textNode = document.createTextNode(item["productName"]);
        var opEle = document.createElement("option");
        opEle.appendChild(textNode);
        opEle.value = item["productID"];
        productEle.appendChild(opEle);

        productInfoMap.set(item["productID"], item);
    }
}

function check_tick_price(price1) {
    var price = Number(price1)
    if (isNaN(price)) {
        alert('请输入有效的数字')
        return false
    }
    calcul_margin();
    return true
}

function changeProduct(value) {
    if (productInfoMap.has(value)) {
        var item = productInfoMap.get(value);
        document.getElementById('multiplier_value').value = item["multiplier"];
        document.getElementById('multiplier_type').innerText = item["multiplierType"];
        document.getElementById('price_type').innerText = item["priceType"];
        document.getElementById('rate_value').value = item["rateValue"];
        document.getElementById('margin_type').innerText = item["marginType"];

        document.getElementById('price_value').value = "";
        document.getElementById('margin_value').value = "";
    }
}

function clickInputTextFocus(value) {
    var textEle = document.getElementById(value);
    textEle.style.border = "1px solid #a1a1a1";
}

function clickInputTextBlur(value) {
    var textEle = document.getElementById(value);
    textEle.style.border = "0px solid #a1a1a1";
}

function calcul_margin() {
    var tickPrice = Number(document.getElementById('price_value').value);
    if (isNaN(tickPrice)) {
        alert('请输入有效的行情价格');
        return false;
    }

    var multiplierValue = Number(document.getElementById('multiplier_value').value);
    if (isNaN(multiplierValue)) {
        alert('错误的合约乘数');
        return false;
    }

    var rateValue = Number(document.getElementById('rate_value').value);
    if (isNaN(rateValue)) {
        alert('请输入有效的保证金率');
        return false;
    }

    rateValue = rateValue / 100;

    var marginValue = num_multi(multiplierValue, tickPrice);
    marginValue = num_multi(marginValue, rateValue);

    document.getElementById('margin_value').value = marginValue;
}

function reset() {
    var productEle = document.getElementById("product");
    productEle[0].selected = true;
    productEle.style.display = "";

    document.getElementById('multiplier_value').value = '';
    document.getElementById('multiplier_type').innerText = '';
    document.getElementById('price_value').value = '';
    document.getElementById('price_type').innerText = '';
    document.getElementById('rate_value').value = '';
    document.getElementById('margin_value').value= '';
    document.getElementById('margin_type').innerText = '';
}