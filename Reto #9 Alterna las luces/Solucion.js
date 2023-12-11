function adjustLights(lights) {
  let changes = 0
  let changesReverse = 0  
  let reverseLights = [...lights].reverse() 
  
  for (let i = 1; i < lights.length; i++) {
    if (lights[i] === lights[i - 1]) {
      changes++;
      lights[i] = (lights[i] === '🟢') ? '🔴' : '🟢'
    }
    if (reverseLights[i] === reverseLights[i - 1]) {
      changesReverse++;
      reverseLights[i] = (reverseLights[i] === '🟢') ? '🔴' : '🟢'
    }
  }
  return changes > changesReverse ? changesReverse : changes
}