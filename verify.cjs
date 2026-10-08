const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const references = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]).filter(ref => !ref.startsWith('#') && !ref.startsWith('tel:'));
for (const ref of references) if (!fs.existsSync('dist/' + ref)) throw new Error('Missing asset: ' + ref);
for (const anchor of [...html.matchAll(/href="#([^"]+)"/g)]) if (!html.includes('id="' + anchor[1] + '"')) throw new Error('Missing section: ' + anchor[1]);
if (!html.includes('tel:+61487179236')) throw new Error('Missing phone link');
console.log('Passed: assets, navigation destinations and enquiry phone link.');
