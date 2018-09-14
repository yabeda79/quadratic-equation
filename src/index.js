module.exports = function solveEquation(equation) {
let solution=[]
let d, x1, x2
equation=equation.split(' ')
if(equation[7]=='-'){
  equation[8]=equation[8]*(-1)
}
d=Math.pow(equation[4], 2)-(4*equation[0]*equation[8])
if(equation[3]=='-'){
  equation[4]=equation[4]*(-1)
}
x1=(-equation[4]+Math.sqrt(d))/(2*equation[0])
x2=(-equation[4]-Math.sqrt(d))/(2*equation[0])
solution.push(Math.round(x1))
solution.push(Math.round(x2))
solution.sort((a, b)=>a-b)
return solution
}
