export class Todo {
	id: number;
	title: string = '';
	category: string = '';
	complete: boolean = false;

	constructor(values: Object = {}){
		Object.assign(this, values);
	}
}

let todo = new Todo({
	title: 'Read SitePoint article',
	complete: false
});
