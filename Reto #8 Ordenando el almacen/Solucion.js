function organizeGifts(gifts) {
  let letters = []
  let separatedGifts = []
  let organizeGifts = ""
  
  gifts.split("").forEach(g => {
    if (Number(g) || Number(g) === 0) {
      separatedGifts.push(Number(g))
    } else {
      separatedGifts.push(" ")
      letters.push(g)
    }
  })
  
 separatedGifts = separatedGifts.join("").split(" ")

  for (let i=0; i<letters.length; i++) {
    let auxboxes = Math.floor(Number((separatedGifts[i])/10))
    let pales = Math.floor(auxboxes/5)
    let boxes = auxboxes%5
    let bags = Number((separatedGifts[i])%10)

    organizeGifts+= `[${letters[i]}]`.repeat(pales)+
      `{${letters[i]}}`.repeat(boxes)

    if (bags !== 0) organizeGifts+= `(`+`${letters[i]}`.repeat(bags)+`)`
  }
  
  return organizeGifts
}