var katzDeli = []

function takeANumber(deliLine, person) {
  deliLine.push(person)
  var place = deliLine.length 
  return `Welcome, ${person}. You are number ${deliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
  return `Currently serving ` + katzDeliLine.shift(1) + `.`
}
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return  "The line is currently empty.";
  } 
  var line = [];
    for(var i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
}
return `The line is currently:${line}`;
}