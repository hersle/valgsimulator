function parseVotes(file, translate) {
	const votes = {};
	for (const line of file.split('\n')) {
		const cols = line.split(';');
		let district = cols[1];
		let party = cols[6];
		if (district in translate) {
			district = translate[district];
		}
		if (party in translate) {
			party = translate[party];
		}
		if (!(district in votes)) {
			votes[district] = {};
		}
		votes[district][party] = parseInt(cols[12]);
	}
	return votes;
}