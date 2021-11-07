function getAnagram(words) {
  const dictionary = {}
  for (let i = 0; i < words.length; i += 1) {
    const sortedWord = words[i].split('').sort().join('')
      if (dictionary[sortedWord]) {
        dictionary[sortedWord] = [...dictionary[sortedWord], words[i]]
      } else {
        dictionary[sortedWord] = [words[i]]
      }
  }
  
  return (Object.values(dictionary))
}

const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
const result = getAnagram(words)
console.log(result)