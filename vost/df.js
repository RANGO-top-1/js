let masiv = [8, 52, 1488, 42, 67, 228, 993];

function start() {
  for (let j = masiv.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (masiv[i] > masiv[i + 1]) {
        let temp = masiv[i];
        masiv[i] = masiv[i + 1];
        masiv[i + 1] = temp;
        console.log(masiv)
      }
    }
  }
}
start()

