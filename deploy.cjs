const { exec } = require("child_process");
exec("npm run build && scp -r ./dist/* user@192.168.1.59:/var/www/html/pinball-board");
// exec("npm run build && scp -r ./dist/* user@61.222.52.130:/var/www/html/pinball-board",(error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);