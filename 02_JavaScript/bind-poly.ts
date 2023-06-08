/**
var F = function() {
  console.log('foo is', this.foo);
}
var F1 = F.bind({ foo: 'bar' })

F()               // foo is undefined
F1()              // foo is bar

var f = new F()   // foo is undefined
var f1 = new F1() // foo is bar

console.log(f instanceof F)    // true
console.log(f1 instanceof F)   // false
*/

// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
Function.prototype.bind = function(ctx: unknown) {
    const boundArgs = [].slice.call(arguments, 1);
     const func = this;
 
     return function() {
         const callArgs = boundArgs.concat([].slice.call(arguments))
         return func.apply(ctx, callArgs)
     }
 }
 
 export default Function.prototype.bind