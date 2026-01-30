// const crypto=require('crypto');
// const data="Hello";
// const hash=crypto.createHash('sha256')
// .update(data)
// .digest('hex');
// console.log('Hash:',hash);

// -----hashedPassword---
const crypto=require('crypto');
const password="Immu123";
const hashedPassword=crypto.createHash('sha256')
.update(password)
.digest('hex');
console.log('Hashed password :',hashedPassword);