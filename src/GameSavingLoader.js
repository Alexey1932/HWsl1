import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
	static load() {
		return read()
			.then((data) => json(data))
			.then((jsonData) => {
				const parsedData = JSON.parse(jsonData);
				return new GameSaving(parsedData);
			})
			.catch((error) => {
				throw new Error('Error loading game saving data', error);
			});
	}
}