function cyberReindeer(road, time) {
  let roadArr = []
  let count_Index_S = road.indexOf('S');

  for (let i=0; i<time; i++) {
    road = road.replace('S','.')
    let auxRoad;
    if (i>4) {
      count_Index_S++
      auxRoad = road.replaceAll('|','*').split("")
      auxRoad.splice(count_Index_S, 1, 'S')
      roadArr.push(auxRoad.join(""))
      count_Index_S--
    } 
    else {
      auxRoad = road.split("")
      auxRoad.splice(count_Index_S, 1, 'S')
      roadArr.push(auxRoad.join(""))
    }
    if (auxRoad[count_Index_S + 1] !== '|') count_Index_S++
  }

  return roadArr
}