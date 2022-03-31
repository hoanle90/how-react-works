
// Other library, framework also apply bitwise. Here is the link:
// https://github.com/angular/angular/blob/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc/packages/core/src/view/types.ts#L317
// https://github.com/angular/angular/blob/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc/packages/core/src/view/provider.ts#L202
// https://github.com/angular/angular/blob/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc/packages/core/src/view/view.ts

/* Here is example about bitwise
  Because bitwise is easier for computer to understand. The number or string, they have to transform to bit in the end for computer.
  So that why using bitwise is 3x faster then normal compare.
  I write 2 examples below to compare performance bitwise and non-bitwise.

  a |= b  mean a = a | b you want to add condition b into a
  a &= ~b mean a = a & ~b you want to remove condition b from a

  But be careful, doing with bitwise sometime hard to read, debug and maintain.

*/
const bitwise = (role) => {
  const root = 1 // 0000000000001  1<<0
  const user = 2 // 0000000000010  1<<1
  const admin = 4 // 0000000000100  1<<2
  const supervisor = 8 // 0000000001000  1<<3
  const role1 = 16 // 0000000010000  1<<4
  const role2 = 32 // 0000000100000  1<<5
  const role3 = 64 // 0000001000000  1<<6
  const hr = 128 // 0000100000000  1<<7
  const lead = 256 // 0001000000000  1<<8
  const devops = 512 // 0010000000000  1<<9
  const operator = 1024 // 0100000000000  1<<10
  const client = 2048 // 1000000000000  1<<11

  // const allowToDoSomeThing = 343   // 000101010111
  //let allowToDoSomeThing = root | user | admin | role1 | role3 | lead // 000101010111
  // root user admin role1 role3 lead
  // 0000000000001 => ~ => 111111111110
  //allowToDoSomeThing |= role2 // add role
  
  // Why &= -52805  ???
  // let role1 = 16 // 0000000010000  1<<4
  // ~16 === -27 // true
  // ~-27 === 16 // true
  // => ~role1 === -27
  let allowToDoSomeThing = root | user | admin | role1 | role3 | lead // 000101010111
  //allowToDoSomeThing &= ~role1 // remove role
  // similar with allowToDoSomeThing &= -27

  let begin = performance.now()
  for (let i = 0; i < 10000000; i++) {
    isAllow = allowToDoSomeThing & role
  }
  console.log("is role valid in bitwise: ", !!isAllow)
  let end = performance.now()
  console.log("time", end - begin)

  // a|= b => a = a | b
  // a&=b => a = a & b
  // a+=b => a = a + b
}

const noBitwise = (role) => {
  const root = 'root'
  const user = 'user' 
  const admin = 'admin'
  const supervisor = "supervisor"
  const role1 = "role1" 
  const role2 = "role2" 
  const role3 = "role3" 
  const hr = 'hr' 
  const lead = "lead" 
  const devops = "devops" 
  const operator = "operator" 
  const client = "client" 

  // root user admin role1 role3 lead
  let begin = performance.now()
  for (let i = 0; i < 10000000; i++) {
    isAllow = role === root || role === user || role === admin || role === role1 || role === role3 || role === lead
  }
  console.log('=== nobitwise', !!isAllow)
  let end = performance.now()
  console.log("time", end - begin)
}
//  4 is admin, bitwise take 14ms to run
bitwise(4)
// no bitwise do the same thing, but take 41ms to run, You can try yourself
noBitwise("admin")


/*
  does <div>{NaN}</div> update every times because NaN === NaN always false  ??
  No, React use Object.is(a,b) which compare value of a and b
  Object.is(NaN,NaN) => true => no update needed because it the same value
  Object.is(-0 ,0) => false => -0 and 0 is different in Math
*/

const compare = (a,b) => {
   // return Object.is(a,b)
   if(a!==a && b!==b){
     return true
   }
    return a === b
}
let res1 = compare(NaN,NaN) // true 
let res2 = compare(2,2) // true
let res3 = compare('abc','abc') // true
console.log('res1',res1)
console.log('res2',res2)
console.log('res3',res3)
console.log(Object.is(0, -0))

Math.atan2(0, -0)
Math.atan2(0, 0)


/*


jsx

createElement


render 

issue of stack render

introduce fiber

explain fiber

effect tag

hook




useState, userReducer hook

callstack, requestanimationframe, requestidlecallback

symbol

object.is

bitwise


jsx -> React.creatElement -> object -> how to build DOM from this object

1) do recursive for the whole object => performance issue, lagging , blocking others 
2) fiber => split into work => build until finish fiber tree => show in DOM

explain about fiber ( commit root , unit of work, effect tag)

#TIL
bitwise ??
hook ??
compare in react 
symbol ??
garbage collector ?


react compare and do the render DOM
compare -> while , for , recursive => block 

part1


mono repo 
lerna 
bazel 
tool 
find in sourcecode 
create 20 projects with react, angular, vue in 1 repo + config => see how it works

*/