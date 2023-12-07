function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return ''

  for (let i = 0; i < (original.length + 1); i++) {
    if (!original.split('')[i]) {
      return modified.split('')[i]
    }
    if (!modified.split('')[i]) {
      return original.split('')[i]
    }
    if (original.split('')[i] != modified.split('')[i]) {
      return (original.length > modified.length) ? original.split('')[i] : modified.split('')[i]
    } 
  }
}