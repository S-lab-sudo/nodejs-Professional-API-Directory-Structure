// MODULES
const {
    execSync
} = require('child_process');
const fs = require('fs')

// USER VALUES
const modules = process.argv.slice(3)
const directoryName = process.argv[2]

// CREATING AND CHANGING DIRECTORY
fs.mkdirSync(directoryName)
process.chdir(`./${directoryName}`) // === ./ IS COMPULSARY

// CREATING PACKAGE.JSON
execSync('npm init -y', (err, stdout, stderr) => {
    // IF ERROR OCCURES
    if (err) {
        return console.error(err);
    }
    // IF NO ERROR
    if (stdout) {
        return console.log(`Created package.json\nnpm output =`, stdout);
    }
})

// LOOPING THROUGH NPM MODULES ONLINE
for (let i = 0; i < modules.length; i++) {
    // INSTALLING NPM MODULES
    execSync(`npm install ${modules[i]}`, (err, stdout, stderr) => {
        // IF ERROR OCCURES
        if (err) {
            console.error(err);
            return ;
        }
        // IF SUCCESS
        if (stdout) {
            console.log(`Installed module ${module[i]}\nnpm output =`, stdout);
            return;
        }
    });
}

// MAKING FILES DIRECTORIES
execSync('mkdir routeHandeling routes && touch .env server.js routeHandeling/routeHandle1.js routeHandeling/routeHandel2.js routes/getRoutes.js routes/postRoutes.js', (err, stdout, stderr) => {
    // IF ERROR OCCURES
    if (err) {
        console.error(err);
        return;
    }
    // IF SUCCESS
    if (stdout) {
        console.log(`Installed module ${module[i]}\nnpm output =`, stdout);
        return;
    }
})