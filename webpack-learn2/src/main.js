import Greeter from './js/Greeter.js'
import './css/style.css'
import './css/base.styl'

document.querySelector('#root').appendChild(Greeter())
let [a, b, c] = [1, 2, 3];
console.log(a,b,c)
function demo(msg = 'noval') {
    console.log(msg)
}

demo()
demo('hello junxi')