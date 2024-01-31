function extractNumbersFromString(stringText: string) {
  const regex = /[^0-9]/g
  return stringText.replace(regex, '')
}

export { extractNumbersFromString }
