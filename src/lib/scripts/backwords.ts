// * preserveCasing-- position, 'Hello' = 'Olleh'; strict, 'Hello' = 'olleH'; 'lowercase', 'Hello' = 'hello'

type CasingType = 'position' | 'strict' | 'lowercase';

export function backwords(
  text: string,
  casing: CasingType = 'position',
): string {
  //? does that work if no spaces?
  const words = text.split(' ');
  let output = '';
  const numWords = words.length;
  words.forEach((word, j) => {
    output += `${reverseWord(word, casing)}`;
    //*  j starts at 0
    const wordPos = j + 1;
    if (wordPos !== numWords) output += ` `;
  });
  return output;
}

function reverseWord(str: string, casing: CasingType): string {
  let chars: string[] = str.split('');
  let word = '';
  let punct = '';
  const caps: number[] = [];
  chars.forEach((c, i) => {
    // this doesn't need to be i + 1 because everything should be based of the array starting at 0
    if (!isPunctuation(c)) {
      word += c;
      if (/[A-Z]/.test(c)) {
        if (casing === 'position') {
          caps.push(i);
        }
      }
    } else punct += c;
  });
  word = reverseStr(word);

  chars = word.split('');
  let cappedWord = '';
  if (casing === 'position' && caps.length !== 0) {
    chars.forEach((c, i) => {
      if (caps.includes(i)) {
        c = c.toUpperCase();
      } else {
        c = c.toLowerCase();
      }
      cappedWord += c;
    });
    word = cappedWord;
  }

  if (casing === 'lowercase') {
    word = word.toLowerCase();
  }
  return `${word}${punct}`;
}

//* not perfect, doesn't need to be
//* only needs to account for punct that occurs at end of work ig
//! doesn't work with quotes i don't think
function isPunctuation(str: string): boolean {
  const punctuation = ['.', ',', ';', ':', '?', '!'];
  if (punctuation.includes(str)) return true;
  else return false;
}

function reverseStr(str: string): string {
  const strArr = Array.from(str.split(''));
  return [...strArr].reverse().join('');
}
