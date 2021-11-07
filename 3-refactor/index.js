function findFirstStringInBracket (str) {
    const indexFirstBracketFound = str.indexOf('(')
    const indexClosingBracketFound = str.indexOf(')')
  
    if (indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0 && indexClosingBracketFound >= indexFirstBracketFound) {
      return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound)
    }
  
    return ''
  }
  

  let result = findFirstStringInBracket('ri)(aku')
  console.log(result)
  result = findFirstStringInBracket('ri(aku)')
  console.log(result)
  result = findFirstStringInBracket('aku)')
  console.log(result)
  