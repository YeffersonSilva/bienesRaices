import bcrypt from 'bcrypt';

const saltRounds = 10;
const myPlaintextPassword = '271592925';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
});
