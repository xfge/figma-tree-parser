export function kebabize(str: string): string {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter !== ' ' ? letter.toLowerCase() : ''}` : letter
    })
    .join('')
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function smallCamel(str: string): string {
  const clearString = str.replace(/[^a-zA-Z]/g, '')
  return clearString.charAt(0).toLowerCase() + clearString.slice(1)
}

export function kebabToUpperCamel(str: string): string {
  return capitalizeFirstLetter(str.split(/-|_/g).map(capitalizeFirstLetter).join(''))
}
