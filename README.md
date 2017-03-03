# Frontend Interview Exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

Below you will find steps to get this starter project up and running. Following will be
the requirements of the exercise.


## Requirements

- Node/npm


## Pre-installed Packages

- Bootstrap 4 Alpha 
    - [Documentation](https://v4-alpha.getbootstrap.com/components)

- ng2-bootstrap
    - [Documentation](http://valor-software.com/ng2-bootstrap/#/)



## Important

You are allowed and __*expected*__ to do __*whatever*__ you want with 
this assignment & project.

Change as much or as little as you like. This was only an attempt 
save setup time; therefor if you do not like something or its not your style... change it! 

This exercise is all about you. Getting to you know you, your skill level, &
your coding style! 

## Exercise Objective & Functionality

- Build a simple todo list.

- Assume there is zero authentication!

- Once finished, push it up to your personal github account & shoot us an email back with the link!

### Todo List Functionality
- View all todo items
- Update todo item status
- Add todo item

#### What makes a todo item
- task
- category
- status

#### Backend API
Obviously you do not currently have an api to actually use. 
However much like real life development you will need to build along side 
others. Assume that is the case now. Build your service 
assuming you have the following endpoints soon to be available.

Included are the required Request Object and Response Object for each.

#### /todos (GET)
`Queries (optional)`
```
/todos?category={categoryToQuery}
```
```
/todos?status={statusToQuery}
```

`Response`
```
[
        {
            "id": "some-id-1",
            "category": "Category-1",
            "task": "Some task I need to complete",
            "statuses": [{
                    "description": "Created",
                    "date": "2017-02-02T18:24:03+00:00"
                },
                {
                    "description": "Completed",
                    "date": "2017-02-02T20:24:03+00:00"
                }
            ]
        },
        {
            "id": "some-id-2",
            "category": "Category-2",
            "task": "Some other task I need to complete",
            "statuses": [{
                "description": "Created",
                "date": "2017-02-04T18:24:03+00:00"
            }]
        }
    ]
```
#### /todos (PUT)
`Request`
```
{
        "category": "Category-2",
        "task": "Some other task I need to complete"
}
```
`Response`
```
{
            "id": "some-id-1",
            "category": "Category-1",
            "task": "Some task I need to complete",
            "statuses": [{
                    "description": "Created",
                    "date": "2017-02-02T18:24:03+00:00"
                },
                {
                    "description": "Completed",
                    "date": "2017-02-02T20:24:03+00:00"
                }
            ]
}
```



#### /todos/status (POST)
`Request`
```
{
        "itemId": "some-item-id",
        "newStatus": "some-status"
}
```

`Response`
```
{
            "id": "some-id-1",
            "category": "Category-1",
            "task": "Some task I need to complete",
            "statuses": [{
                    "description": "Created",
                    "date": "2017-02-02T18:24:03+00:00"
                }
            ]
}
```        
        
        


#### /todos/{itemId} (DELETE)

`Response`
```
SUCCESS
```        
        
        
        
#### /todos/categories (GET)
`Response`
```
[
        "Category-1",
        "Category-2",
        "Category-3"
 ]
```
#### /todos/status (GET)
`Response`
```
[
        "Created",
        "Completed"
]
```




## Exercise Bonuses

These are not required but if you suits you then, have at them!

- Test coverage
- Sorting todos by status
- Updating status

## Extra Bonus

Think we forgot something or left it out? We probably did, we are not above it!

Submit a pull request for it, seriously!


## Development server

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding / generation of components

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
