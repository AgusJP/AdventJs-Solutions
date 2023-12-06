function findFirstRepeated(gifts) {
  const auxObj = {}
  for (let i = 0; i < gifts.length; i++) {
    if (auxObj.hasOwnProperty(gifts[i])) return gifts[i]  
    auxObj[gifts[i]] = i
  }
  return -1
}
