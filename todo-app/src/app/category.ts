export class Category {
	id: number;
	title: string = '';

	constructor(values: Object = {}){
		Object.assign(this, values);
	}
}

let Home = new Category({
	title: 'Household Chores',
});
