export const regExps = {
  allSpace: /\s/g,
  allNumber: /\d/g,
  allKorean: /[ㄱ-ㅎㅏ-ㅣ가-힣]/g,
  emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  specialChar: /[{}[\]/?.,;:|~`!^_+<>@#$%='"]/g,
  allSpecialChar: /[{}[\]/?.,;:|*~`!^_+<>@#$%='"-*&()]/g,
  notNumber: /[^0-9]/g,
  addHyphen: /^(\d{0,3})(\d{0,4})(\d{0,4})$/g,
  plusHyphen: /(-{1,2})$/g,
  onlyNumEng: { replace: /[^a-zA-Z0-9\s]/g, pattern: /^[a-zA-Z0-9\s]*$/ },
  telReg: { replace: /[^0-9-]/g, pattern: /^[0-9-]*$/ },
  numReg: { replace: /[^0-9]/g, pattern: /^[0-9]*$/ },
  onlyKorEng: /[^a-zA-Zㄱ-ㅎ가-힣]/g,
  detailAddr: /[^ㄱ-ㅎ가-힣0-9-&*()\s]/g,
}

export const TelReplace = (str: string, maxLength: number) =>
  str
    .replaceAll(regExps.telReg.replace, '')
    .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`)
    .slice(0, maxLength)

export const NumReplace = (str: string, maxLength: number) =>
  str
    .replaceAll(regExps.numReg.replace, '')
    .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`)
    .slice(0, maxLength)
