import { backwords } from './backwords';

function testSentence(input: string, expected: string): boolean {
  console.log(`input: ${input}`);
  console.log(`expected: ${expected}`);
  const backwardsOutput = backwords(input);
  console.log(`output: ${backwardsOutput}`);
  if (backwardsOutput === expected) {
    console.log('success');
    return true;
  } else {
    console.log('failure');
    return false;
  }
}

testSentence('hello', 'olleh');
testSentence('hello hi', 'olleh ih');
