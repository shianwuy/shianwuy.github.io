var contracts = new Array(3);
contracts[0] = new Array("au1903", "au1904", "au1905", "au1906", "au1908", "au1910", "au1912", "au2002");
contracts[1] = new Array("ag1903", "ag1904", "ag1905", "ag1906", "ag1907", "ag1908", "ag1909", "ag1910", "ag1911", "ag1912", "ag2001", "ag2002");
contracts[2] = new Array("cu1903", "cu1904", "cu1905", "cu1906", "cu1907", "cu1908", "cu1909", "cu1910", "cu1911", "cu1912", "cu2001", "cu2002");

var productInfoMap = new Map();

$(document).ready(function() {
    // alert("ready function callback");
    // loadSHFEPrice();
    pareProduct();
});

function loadSHFEPrice() {
    // //http://www.shfe.com.cn/data/dailydata/kx/kx20190227.dat
    // $.ajax ({
    //     url: "http://www.shfe.com.cn/statements/dataview.html?paramid=kx",
    //     type: "GET",
    //     dataType: "json",
    //     crossDomain: true,
    //     success: function (data) {
    //         $.each(data.o_curinstrument, function (i, item) {
    //             console.log(item.PRODUCTID);
    //         })
    //     },
    //     error: function(data) {
    //         console.log(data.msg);
    //     }
    // })
    alert("loadSHFEPrice function")
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp == null) {
        alert("Your browser does not support XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var txt = xmlhttp.responseText;
            // process txt
            console.log(txt);
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            // process nodata
            console.log("no find data")
        }
    };
    xmlhttp.open("GET", "https://www.shfe.com.cn/data/dailydata/kx/kx20190227.dat", true);
    xmlhttp.setRequestHeader("If-Modified-Since","0"); 
    xmlhttp.send();
}

function pareProduct() {
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

function check_tick_price(control, price1) {
    var price = Number(price1)
    if (isNaN(price)) {
        alert('请输入有效的数字')
        return false
    } else if (price > 999999) {
        document.getElementById(control).value = 999999;
    } else if (price < 0) {
        document.getElementById(control).value = 0;
    } else {
        document.getElementById(control).value = price;
    }
    calcul_margin();
    return true
}

function check_product_rate(control, rate1) {
    var rate = Number(rate1)
    if (isNaN(rate)) {
        alert('请输入有效的数字')
        return false
    } else if (rate > 100) {
        document.getElementById(control).value = 100
    } else if (rate < 0) {
        document.getElementById(control).value = 0
    } else {
        document.getElementById(control).value = rate
    }
    calcul_margin()
    return true
}

function changeProduct(value) {
    if (productInfoMap.has(value)) {
        var item = productInfoMap.get(value);
        if (value === "IO-P" || value === "IO-C") {
            document.getElementById('strike_tr').style = ''//"display:block;"
            document.getElementById('last_tr').style = ''//'display:block;'
            document.getElementById('coefficient_tr').style = ''//'display:block;'
            document.getElementById('otm_tr').style = ''//'display:block;'
            
            document.getElementById('strike_type').innerText = item['strike_type']
            document.getElementById('last_type').innerText = item['last_type']
            document.getElementById('coefficient_type').innerText = '%'
            document.getElementById('coefficient_value').value = item['coefficient']
            document.getElementById('otm_type').innerText = item['otm_type']
        }
        else {
            document.getElementById('strike_tr').style = "display:none;"
            document.getElementById('last_tr').style = 'display:none;'
            document.getElementById('coefficient_tr').style = 'display:none;'
            document.getElementById('otm_tr').style = 'display:none;'

            document.getElementById('strike_type').innerText = ''
            document.getElementById('strike_price').value = ''
            document.getElementById('last_type').innerText = ''
            document.getElementById('last_price').value = ''
            document.getElementById('coefficient_type').innerText = ''
            document.getElementById('coefficient_value').value = ''
            document.getElementById('otm_type').innerText = ''
            document.getElementById('otm_value').value = ''
        }

        document.getElementById('multiplier_value').innerHTML = item["multiplier"]
        document.getElementById('multiplier_type').innerText = item["multiplierType"]
        document.getElementById('price_type').innerText = item["priceType"]
        document.getElementById('rate_value').value = item["rateValue"]
        document.getElementById('rate_type').innerText = '%'
        document.getElementById('margin_type').innerText = item["marginType"]
        document.getElementById('price_value').value = ""
        document.getElementById('margin_value').innerText = ""
    } else if (value === 'default') {
        reset()
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

    var productSelt = document.getElementById('product');
    var index = productSelt.selectedIndex;
    var productValue = productSelt[index].value;

    var tickPrice = Number(document.getElementById('price_value').value);
    if (isNaN(tickPrice)) {
        alert('请输入有效的行情价格');
        return false;
    }

    var multiplierValue = Number(document.getElementById('multiplier_value').innerText);
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

    if (productValue === 'IO-P' || productValue === 'IO-C') {
        var strikePrice = Number(document.getElementById('strike_price').value)
        if (isNaN(strikePrice)) {
            alert('请输入有效的行权价格')
            return false
        }

        var indexPrice = Number(document.getElementById('last_price').value)
        if (isNaN(indexPrice)) {
            alert('请输入有效的指数价格')
            return false
        }

        var coeffRate = Number(document.getElementById('coefficient_value').value)
        if (isNaN(coeffRate)) {
            alert('请输入有效的保障系数')
            return false
        }

        coeffRate = coeffRate / 100

        if (productValue === 'IO-P') {
            var otmValue = num_multi(Math.max((strikePrice - indexPrice), 0), multiplierValue)
            var marginValue = num_multi(indexPrice, multiplierValue)
            marginValue = num_multi(marginValue, rateValue)
            marginValue = marginValue - otmValue

            var aa = num_multi(coeffRate, indexPrice)
            aa = num_multi(aa, multiplierValue)
            aa = num_multi(aa, rateValue)
            marginValue = Math.max(marginValue, aa)

            marginValue = marginValue + num_multi(tickPrice, multiplierValue)

            document.getElementById('margin_value').innerText = marginValue
            document.getElementById('otm_value').innerText = otmValue;
        }
        else if (productValue === 'IO-C') {
            var otmValue = num_multi(Math.max((indexPrice - strikePrice), 0), multiplierValue)
            var marginValue = num_multi(indexPrice, multiplierValue);
            marginValue = num_multi(marginValue, rateValue)
            marginValue = marginValue - otmValue

            var aa = num_multi(coeffRate, indexPrice)
            aa = num_multi(aa, multiplierValue)
            aa = num_multi(aa, rateValue)
            marginValue = Math.max(marginValue, aa)

            marginValue = marginValue + num_multi(tickPrice, multiplierValue)

            document.getElementById('margin_value').innerText = marginValue
            document.getElementById('otm_value').innerText = otmValue
        }
    }
    else {
        var marginValue = num_multi(multiplierValue, tickPrice);
        marginValue = num_multi(marginValue, rateValue);
    
        if (productValue === 'jd') {
            marginValue = num_multi(marginValue, 2);
        }
    
        document.getElementById('margin_value').innerText = marginValue;
    }
}

function reset() {
    var productEle = document.getElementById("product");
    productEle[0].selected = true;
    productEle.style.display = "";

    document.getElementById('multiplier_value').innerText = '';
    document.getElementById('multiplier_type').innerText = '';
    document.getElementById('price_value').value = '';
    document.getElementById('price_type').innerText = '';
    document.getElementById('rate_value').value = '';
    document.getElementById('rate_type').innerText = '';
    document.getElementById('margin_value').innerText = '';
    document.getElementById('margin_type').innerText = '';
}