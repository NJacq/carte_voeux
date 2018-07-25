var element = SVG.get('logo')
element.animate(6000, '>', 10).attr({
    fill: '#343434'
})

var crochet = SVG.get('crochetG')
crochet.animate(5000, '>', 10).attr({
    fill: '#FFFFFF'
}).reverse(true)

var crochet = SVG.get('crochetD')
crochet.animate(5000, '>', 10).attr({
    fill: '#FFFFFF'
}).reverse(true)

var rect = SVG.get('rect')
rect.animate(3000, '>', 10).translate(400, 0).opacity(0).reverse(true).after(function () {
    this.animate(900, '>', 10).opacity(0).loop(10).reverse(true)
})

var code = SVG.get('code1')
code.animate(3000, '>', 0).flip(100).rotate(360).reverse(true)
var code = SVG.get('code2')
code.animate(3000, '>', 0).flip(200).rotate(360).reverse(true)
var code = SVG.get('code3')
code.animate(3000, '>', 0).flip(300).rotate(360).reverse(true)
var code = SVG.get('code4')
code.animate(3000, '>', 0).flip(400).rotate(360).reverse(true)

var svg = SVG.get('svg')
var access = SVG.get('access')
var lettreB1 = SVG.get('lettreB1')
var lettreB2 = SVG.get('lettreB2')
var lettreB3 = SVG.get('lettreB3')
var lettreB4 = SVG.get('lettreB4')
var lettreB5 = SVG.get('lettreB5')
var lettreB6 = SVG.get('lettreB6')
var line = SVG.get('line')
var text = SVG.get('text')
var flocons = SVG.get('flocons')
var flocon1 = SVG.get('flocon1')
var flocon2 = SVG.get('flocon2')
var flocon3 = SVG.get('flocon3')
var flocon4 = SVG.get('flocon4')
var flocon5 = SVG.get('flocon5')
var flocon6 = SVG.get('flocon6')
var flocon7 = SVG.get('flocon7')
var flocon8 = SVG.get('flocon8')
var flocon9 = SVG.get('flocon9')
var flocon10 = SVG.get('flocon10')
var flocon11 = SVG.get('flocon11')
var flocon12 = SVG.get('flocon12')
var flocon13 = SVG.get('flocon13')
var flocon14 = SVG.get('flocon14')
var flocon15 = SVG.get('flocon15')
var flocon16 = SVG.get('flocon16')
var flocon17 = SVG.get('flocon17')
var flocon18 = SVG.get('flocon18')
var line2 = SVG.get('line2')
lettreB1.hide()
lettreB2.hide()
lettreB3.hide()
lettreB4.hide()
lettreB5.hide()
lettreB6.hide()
access.hide()
line.hide()
text.hide()
flocon1.hide()
flocon2.hide()
flocon3.hide()
flocon4.hide()
flocon5.hide()
flocon6.hide()
flocon7.hide()
flocon8.hide()
flocon9.hide()
flocon10.hide()
flocon11.hide()
flocon12.hide()
flocon13.hide()
flocon14.hide()
flocon15.hide()
flocon16.hide()
flocon17.hide()
flocon18.hide()



rect.click(function showAccess() {
    line.show().animate(3000, '>', 0).translate(-1000, 0).reverse(true)
    access.show().animate(3000, '>', 0).translate(0, -400).reverse(true).after(function () {

        lettreB1.animate(0, '>', 0).reverse(true).after(function () {
            this.show().animate(5000, '>', 0).translate(0, 80).rotate(360).size(null, 200).reverse(true)
        })

        lettreB2.animate(0, '>', 0).reverse(true).after(function () {
            this.show().animate(5000, '>', 0).translate(0, 180).rotate(360).size(null, 200).reverse(true)
        })

        lettreB3.animate(0, '>', 0).reverse(true).after(function () {
            this.show().animate(5000, '>', 0).translate(0, 280).rotate(360).size(null, 200).reverse(true)
        })

        lettreB4.animate(0, '>', 0).reverse(true)
            .after(function () {
                this.show().animate(5000, '>', 0).translate(0, 380).rotate(360).size(null, 200).reverse(true)
            })

        lettreB5.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(0, 480).rotate(360).size(null, 200).reverse(true)
        })

        lettreB6.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(0, 580).rotate(360).size(null, 200).reverse(true)
        })

        text.size(70).animate(0).after(function () {
            this.size(70).show().animate(6000).translate(0, 100).scale(0.1, 0).reverse(true)
        })
        flocon1.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(500, -10000).rotate(180).reverse(false).loop()
        })
        flocon2.animate(0, '>', 0).after(function () {
            this.show().animate(3000, '>', 0).translate(-600, -10000).rotate(180).reverse(false).loop()
        })
        flocon3.animate(0, '>', 0).after(function () {
            this.show().animate(4000, '>', 0).translate(700, -10000).rotate(180).reverse(false).loop()
        })
        flocon4.animate(0, '>', 0).after(function () {
            this.show().animate(6000, '>', 0).translate(500, -10000).rotate(180).reverse(false).loop()
        })
        flocon5.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(-800, -10000).rotate(180).reverse(false).loop()
        })
        flocon6.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(900, -10000).rotate(180).reverse(false).loop()
        })
        flocon7.animate(0, '>', 0).after(function () {
            this.show().animate(4000, '>', 0).translate(-1000, -10000).rotate(180).reverse(false).loop()
        })
        flocon8.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(700, -10000).rotate(180).reverse(false).loop()
        })
        flocon9.animate(0, '>', 0).after(function () {
            this.show().animate(6000, '>', 0).translate(-1100, -10000).rotate(180).reverse(false).loop()
        })
        flocon10.animate(0, '>', 0).after(function () {
            this.show().animate(7000, '>', 0).translate(900, -10000).rotate(180).reverse(false).loop()
        })
        flocon11.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 1500).translate(-1200, -10000).rotate(180).reverse(false).loop()
        })
        flocon12.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(1300, -10000).rotate(180).reverse(false).loop()
        })
        flocon13.animate(0, '>', 0).after(function () {
            this.show().animate(4000, '>', 0).translate(-1500, -10000).rotate(180).reverse(false).loop()
        })
        flocon14.animate(0, '>', 0).after(function () {
            this.show().animate(4000, '>', 0).translate(1600, -10000).rotate(180).reverse(false).loop()
        })
        flocon15.animate(0, '>', 0).after(function () {
            this.show().animate(3000, '>', 0).translate(-1600, -10000).rotate(180).reverse(false).loop()
        })
        flocon16.animate(0, '>', 0).after(function () {
            this.show().animate(4000, '>', 0).translate(-1700, -10000).rotate(180).reverse(false).loop()
        })
        flocon17.animate(0, '>', 0).after(function () {
            this.show().animate(3000, '>', 0).translate(100, -10000).rotate(180).reverse(false).loop()
        })
        flocon18.animate(0, '>', 0).after(function () {
            this.show().animate(5000, '>', 0).translate(-100, -10000).rotate(180).reverse(false).loop()
        })
        line2.animate(5000).translate(0, -150).reverse(false).after(function () {
            this.animate(5000).translate(0, -300).reverse(false).after(function () {
                this.animate(5000).translate(0, -450).reverse(false).after(function () {
                    this.animate(5000).translate(0, -600).reverse(false).after(function () {
                        this.animate(5000).translate(0, -750).reverse(false).after(function () {
                            this.animate(5000).translate(0, -900).reverse(false).after(function () {
                                this.animate(5000).translate(0, -1000).reverse(false).after(function () {
                                    line2.hide();
                                    text.hide();
                                    flocons.hide()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})