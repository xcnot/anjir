
   const fs = require('fs');
   const JSConfuser = require('js-confuser');
   const inputCode = fs.readFileSync('input.js', 'utf-8');

   JSConfuser.obfuscate(inputCode, { target: 'node' }).then(obfuscatedCode => {
     fs.writeFileSync('output.js', obfuscatedCode);
     console.log('Code has been obfuscated and saved to output.js');
   });
  
  