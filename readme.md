## Docs

### Variable declaration.
```js
var fraction1 = new Wiladi(1,5); // @params (top, bottom);
var fraction2 = new Wiladi(2,5); 
```
### Add, Subtract, Multiply, Divide.

```js
var add = fraction1.plus(fraction2); // returns Wiladi Object {top:3, bottom:5}
var subtract = fraction1.minus(fraction2); // returns Wiladi Object {top:-1, bottom:5}
var multiply = fraction1.multiply(fraction2); // returns Wiladi Object {top:2, bottom:5}
var divide = fraction1.divide(fraction2); // returns Wiladi Object {top:1, bottom:2}

var decimal = sum.toDecimal(); // returns 0.6
```

### Reduce fractions.

```js
  var fraction = new Wiladi(10, 75);
  var reduced = fraction.shekveca(); // returns Wiladi Object {top:2, bottom:15}
```

### Choose your own formatting.

```js
var formated = sum.format(function(top, bottom){
  return top + "/" + bottom;
}); // returns `3/5`;
```

#### Expression parsing

Coming soon... 
