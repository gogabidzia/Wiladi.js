var Wiladi = function (a, b) {
    var static = arguments.callee;
    this.top = a;
    this.bottom = b;
    this.init = function () {
        var intg = this.makeInt(this.top, this.bottom);
        this.top = intg[0];
        this.bottom = intg[1];
    }
    this.makeInt = function (num1, num2) {
        while (num1 % 1 !== 0 || num2 % 1 !== 0) {
            num1 = num1 * 10;
            num2 = num2 * 10;
        }
        return [num1, num2];
    }

    this.plus = function (wiladi, sign) {
        if (typeof wiladi == 'number') {
            wiladi = new static(wiladi, 1);
            return this.plus(wiladi);
        }
        var a = this.shekveca();
        var b = wiladi.shekveca();

        var bottom = a.bottom * b.bottom;
        if (typeof sign == 'undefined') {
            var top = b.bottom * a.top + a.bottom * b.top;
        } else {
            var top = b.bottom * a.top - a.bottom * b.top;
        }
        return (new static(top, bottom)).shekveca();
    }

    this.minus = function (wiladi) {
        return this.plus(wiladi, false);
    }

    this.multiply = function (wiladi) {
        if (typeof wiladi == 'number') {
            wiladi = new static(wiladi, 1);
            return this.multiply(wiladi);
        }
        var top = this.top * wiladi.top;
        var bottom = this.bottom * wiladi.bottom;
        return (new static(top, bottom)).shekveca();
    }

    this.divide = function (wiladi) {
        return wiladi.multiply(this.inverse());
    }

    this.inverse = function () {
        return (new static(this.bottom, this.top));
    }

    this.shekveca = function () {
        var a, b, temp;
        if (this.top > this.bottom) {
            a = this.top;
            b = this.bottom;
        } else if (this.top < this.bottom) {
            a = this.bottom;
            b = this.top;
        } else {
            return new static(1, 1);
        }
        var usg = this.usg(a, b);
        return new static(this.top / usg, this.bottom / usg);
    }

    this.usg = function (a, b) {
        if (b == 0) {
            return a;
        }
        return this.usg(b, a % b);
    }
    this.echo = function () {
        return a + "/" + b;
    }
    this.toDecimal = function(){
        return this.top/this.bottom;
    }
    this.init();
}
