const fs = require('fs');

function isYarnBerry() {
	const yarnrcPath = './.yarnrc.yml'
	
	return fs.existsSync(yarnrcPath)
}

module.exports = isYarnBerry;