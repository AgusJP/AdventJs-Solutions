function maxDistance(movements) {
  let maxDistance = 0
  const auxMovements = { '<': 0, '>': 0, '*': 0 }
  movements.split('').forEach(c => auxMovements[c]++)
    
  if (auxMovements['<'] > auxMovements['>']) {
    maxDistance+= (auxMovements['<'] + auxMovements['*']) - auxMovements['>']
  } else {
    maxDistance+= (auxMovements['>'] + auxMovements['*']) - auxMovements['<']
  }
  return maxDistance
}