function getRandomHexCode() {
  const letters = "0123456789ABCDEF";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += letters[Math.floor(Math.random() * 16)];
  }
  return code.toLowerCase();
}

const randomHexCode = getRandomHexCode();

if (require.main === module) {  
  console.log(`Random HexCode is: ${randomHexCode}`);
} 

module.exports = getRandomHexCode;
