var katzDeli = []

function takeANumber(deliLine, person) {
  deliLine = [...deliLine, person]
  var place = deliLine.length 
  console.log (`Welcome, ${person}. You are number ${place} in line.`)
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
  return `Currently serving ` + katzDeliLine.shift(1) + `.`
}
}

function currentLine(katzDeliLine) {
  var line = []
  for(let i = 0; i <= katzDeliLine.length ; i++)
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else { 
   line = [...line, ` ${i+1}. ${katzDeliLine[i]}`];
   line.pop()
}
return `The line is currently: ${line}`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return  "The line is currently empty.";
  } 
  var line = [];
    for(var i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i+1}. ${line[i]}`);
}
return `The line is currently: ${line}`;
}