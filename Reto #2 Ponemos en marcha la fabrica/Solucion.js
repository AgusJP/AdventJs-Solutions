function manufacture(gifts, materials) {
  let filteredGifts = gifts.filter(gift => {
    let filteredGift = gift.split('').filter(giftLetter => {
      return materials.includes(giftLetter)
    })
    return filteredGift.length === gift.split().length
  })

  return filteredGifts
}