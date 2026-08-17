---
# IMPORTANT:
#     This is parsed as Jekyll data even though it's JavaScript!

layout: none
---

// Automatically generate QR codes from text.
import qrCode from 'qrcode-generator';
document.querySelectorAll('.qrcode-container').forEach( function ( x ) {
    var qr = qrCode(0, "M");
    qr.addData(x.dataset.qrdata);
    qr.make();
    var svgHtml = qr.createSvgTag({
        scalable: true
    });
    x.innerHTML = `<a href="${x.dataset.qrdata}">${svgHtml}</a>`;
});
