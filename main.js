var contracts = new Array(3);
contracts[0] = new Array("au1903", "au1904", "au1905", "au1906", "au1908", "au1910", "au1912", "au2002");
contracts[1] = new Array("ag1903", "ag1904", "ag1905", "ag1906", "ag1907", "ag1908", "ag1909", "ag1910", "ag1911", "ag1912", "ag2001", "ag2002");
contracts[2] = new Array("cu1903", "cu1904", "cu1905", "cu1906", "cu1907", "cu1908", "cu1909", "cu1910", "cu1911", "cu1912", "cu2001", "cu2002");

var productInfoMap = new Map();

$(document).ready(function() {
    // alert("ready function callback");
    // loadSHFEPrice();
    pareProduct("");
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

function pareProduct(value) {
    var productEle = document.getElementById("product")
    productEle.length = 1
    for (var i in productList) {
        var item = productList[i]
        if (item["product_type"] === value) {
            var textNode = document.createTextNode(item["productName"])
            var opEle = document.createElement("option")
            opEle.appendChild(textNode)
            opEle.value = item["productID"]
            productEle.appendChild(opEle)
        }
        productInfoMap.set(item["productID"], item);
    }
}

function changeproducttype(value) {
    pareProduct(value)
    if (value == "futures") {
        // hide table's row
        document.getElementById("strike_tr").style = "display:none;"
        document.getElementById("last_tr").style = "display:none;"
        document.getElementById("coefficient_tr").style = "display:none;"
        document.getElementById("otm_tr").style = "display:none;"
    }
    else {
        // show table's row
        document.getElementById('strike_tr').style = ''
        document.getElementById("last_tr").style = ''
        document.getElementById("otm_tr").style = ''
        if (value == "spotoption") {
            document.getElementById("coefficient_tr").style = ''
        }
    }
    reset()
}

function calcul_margin() {
    var producttypes = document.getElementById("product_type")
    var index = producttypes.selectedIndex;
    var producttype = producttypes[index].value
    if (producttype === "futures") {
        futures_margin()
    }
    else if (producttype === 'options') {
        options_margin()
    }
    else if (producttype === 'spotoption') {
        spotoption_margin()
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
    calcul_margin()
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

function changeproduct(value) {
    if (value === "default") reset()
    if (productInfoMap.has(value) === false) return

    page_clear()

    var item = productInfoMap.get(value)
    document.getElementById("multiplier_value").innerHTML = item["multiplier"]
    document.getElementById("multiplier_type").innerHTML = item["multiplierType"]
    document.getElementById("price_type").innerText = item["priceType"]
    document.getElementById("rate_value").value = item["rateValue"]
    document.getElementById("rate_type").innerText = "%"
    document.getElementById("margin_type").innerText = item["marginType"]
    document.getElementById("price_value").value = ""
    document.getElementById("margin_value").innerText = ""

    document.getElementById("strike_type").innerText = item["strike_type"]
    document.getElementById("last_type").innerText = item["last_type"]

    document.getElementById("coefficient_type").innerText = "%"
    document.getElementById("coefficient_value").value = item["coefficient"]
    document.getElementById("otm_type").innerText = item["otm_type"]
}

function clickInputTextFocus(value) {
    var textEle = document.getElementById(value);
    textEle.style.border = "1px solid #a1a1a1";
}

function clickInputTextBlur(value) {
    var textEle = document.getElementById(value);
    textEle.style.border = "0px solid #a1a1a1";
}

function check_input_value() {
    var tickprice = Number(document.getElementById("price_value").value)
    if (isNaN(tickprice)) {
        alert("请输入有效的行情价格")
        return false
    }

    var multip = Number(document.getElementById("multiplier_value").innerText)
    if (isNaN(multip)) {
        alert("错误的合约乘数")
        return false
    }

    var ratevalue = Number(document.getElementById("rate_value").value)
    if (isNaN(ratevalue)) {
        alert("请输入有效的保证金率")
        return false
    }

    var producttypes = document.getElementById("product_type")
    var index = producttypes.selectedIndex;
    var producttype = producttypes[index].value

    if (producttype === "options") {
        var strikePrice = Number(document.getElementById('strike_price').value)
        if (isNaN(strikePrice)) {
            alert('请输入有效的行权价格')
            return false
        }

        var indexPrice = Number(document.getElementById('last_price').value)
        if (isNaN(indexPrice)) {
            alert('请输入有效的标的物价格')
            return false
        }
    }
    else if (producttype === "spotoption") {
        var coeffRate = Number(document.getElementById('coefficient_value').value)
        if (isNaN(coeffRate)) {
            alert('请输入有效的保障系数')
            return false
        }
    }

    return true
}

function futures_margin() {
    if (check_input_value() === false) return

    var productname = document.getElementById("product")
    var index = productname.selectedIndex;
    var contractname = productname[index].value

    var tickPrice = Number(document.getElementById('price_value').value)
    var multiplierValue = Number(document.getElementById('multiplier_value').innerText)
    var rateValue = Number(document.getElementById('rate_value').value)
    rateValue = rateValue / 100

    var marginValue = num_multi(multiplierValue, tickPrice)
    marginValue = num_multi(marginValue, rateValue)
    if (contractname === "jd") {
        marginValue = num_multi(marginValue, 2)
    }

    document.getElementById("margin_value").innerText = marginValue
}

function options_margin() {
    if (check_input_value() === false) return

    var productname = document.getElementById("product")
    var index = productname.selectedIndex;
    var contractname = productname[index].value
    var item = productInfoMap.get(contractname)

    var tickPrice = Number(document.getElementById('price_value').value)
    var multiplierValue = Number(document.getElementById('multiplier_value').innerText)
    var rateValue = Number(document.getElementById('rate_value').value)
    rateValue = rateValue / 100
    var strikePrice = Number(document.getElementById('strike_price').value)
    var contractPrice = Number(document.getElementById('last_price').value)

    var fuMargin = num_multi(multiplierValue, contractPrice)
    fuMargin = num_multi(fuMargin, rateValue)

    var otmValue = 0
    if (item["options_type"] === "C") {
        otmValue = Math.max((strikePrice - contractPrice), 0)
    }
    else {
        otmValue = Math.max((contractPrice - strikePrice), 0)
    }
    otmValue = num_multi(otmValue, multiplierValue)

    var way1 = num_multi(tickPrice, multiplierValue) + fuMargin - num_multi(otmValue, 0.5)
    var way2 = num_multi(tickPrice, multiplierValue) + num_multi(fuMargin, 0.5)

    var marginValue = Math.max(way1, way2)
    document.getElementById("margin_value").innerText = marginValue
    document.getElementById("otm_value").innerText = otmValue
}

function spotoption_margin() {
    if (check_input_value() === false) return

    var productname = document.getElementById("product")
    var index = productname.selectedIndex;
    var contractname = productname[index].value

    var tickPrice = Number(document.getElementById('price_value').value)
    var multiplierValue = Number(document.getElementById('multiplier_value').innerText)
    var rateValue = Number(document.getElementById('rate_value').value)
    rateValue = rateValue / 100
    var strikePrice = Number(document.getElementById('strike_price').value)
    var indexPrice = Number(document.getElementById('last_price').value)
    var coeffRate = Number(document.getElementById('coefficient_value').value)
    coeffRate = coeffRate / 100

    var marginValue = num_multi(indexPrice, multiplierValue)
    marginValue = num_multi(marginValue, rateValue)

    var aa = num_multi(coeffRate, indexPrice)
    aa = num_multi(aa, multiplierValue)
    aa = num_multi(aa, rateValue)

    var otmValue = multiplierValue
    if (contractname === "IO-P") {
        otmValue = num_multi(Math.max((strikePrice - indexPrice), 0), otmValue)
    }
    else {
        otmValue = num_multi(Math.max((indexPrice - strikePrice), 0), otmValue)
    }

    marginValue = marginValue - otmValue
    marginValue = Math.max(marginValue, aa)
    marginValue = marginValue + num_multi(tickPrice, multiplierValue)

    document.getElementById("margin_value").innerText = marginValue.toFixed(2)
    document.getElementById("otm_value").innerText = otmValue.toFixed(2)
}

function page_clear() {
    document.getElementById('multiplier_value').innerText = '';
    document.getElementById('multiplier_type').innerText = '';
    document.getElementById('price_value').value = '';
    document.getElementById('price_type').innerText = '';
    document.getElementById('rate_value').value = '';
    document.getElementById('rate_type').innerText = '';
    document.getElementById('margin_value').innerText = '';
    document.getElementById('margin_type').innerText = '';
    document.getElementById("strike_price").value = ''
    document.getElementById("strike_type").innerText = ''
    document.getElementById("last_price").value = ''
    document.getElementById("last_type").innerText = ''
    document.getElementById('coefficient_value').value = ''
    document.getElementById('coefficient_type').innerText = ''
    document.getElementById('otm_value').value = ''
    document.getElementById('otm_type').innerText = ''
}

function reset() {
    var productEle = document.getElementById("product");
    productEle[0].selected = true;
    productEle.style.display = "";

    page_clear()
}