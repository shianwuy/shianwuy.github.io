/**
 * 
 */

 !function (window) {
    var height = document.body.offsetHeight;
    var width = document.body.offsetWidth;

    if ((width / height) > 0.58 && width < 600) {
        $('body').addClass('body-index-mini')
    }

    var docWidth = 375;
     
    var doc = window.document,
        docEl = doc.document,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width;

        docEl.style.fontSize = Math.max(Math.min(100 * (clientWidth / docWidth), 112), 85.333) + 'px';

        return refreshRem;
    })();

    if (!doc.addEventListener) return;

    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
 } (windows);