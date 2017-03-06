export class Todo {
	id: number;
	title: string = '';
	category: string ='';
	complete: boolean = false;

	constructor(values: Object = {}){
		Object.assign(this, values);
	}
}

// Build the object
let todo = new Todo({
	title: 'Read SitePoint article',
	category: 'Household',
	complete: false
});
