function drawGift(size, symbol) {
  let shape = ""
  let lines = (2*size)-3
  let middle = Math.floor(lines/2)
  
  if(size === 1) {
    return '#\n'
  }
  
  for (let i=0; i<middle; i++) {
    shape+= ' '.repeat(middle-i)+'#'+symbol.repeat(size-2)+'#'+symbol.repeat(i)+'#\n'
  }
  
  shape+= '#'.repeat(size)+symbol.repeat(size-2)+'#\n'
  
  for (let i=middle; i>0; i--) {
    shape+= '#'+symbol.repeat(size-2)+'#'+symbol.repeat(i-1)+'#\n'
  }
  
  return ' '.repeat(size-1)+'#'.repeat(size)+'\n'+shape+'#'.repeat(size)+'\n'
}