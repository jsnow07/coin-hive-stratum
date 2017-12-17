const Proxy = require('coin-hive-stratum');

const proxy = new Proxy({
	host: 'pool.supportxmr.com',
	port: 3333,
	user: '45jYsVGEP1kQzF3cQG8Qqa99mtpTewYXaDKRb6osuQ1NWHjUnkJ45CVfHeRNFDFze1NFeupC9UwaLP7ryUeXWuQc6xm7T7g',
	pass: 'ZZZ',
	maxMinersPerConnection: 10,
});

proxy.listen(8892);
