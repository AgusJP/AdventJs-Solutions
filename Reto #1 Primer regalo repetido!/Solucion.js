function findFirstRepeated(gifts) {
  const auxObj = {}

  for (let i = 0; i < gifts.length; i++) {
    if (!auxObj.hasOwnProperty(gifts[i])) {
      auxObj[gifts[i]] = i
    } else {
      return gifts[i]
    }
  }
  return -1
}