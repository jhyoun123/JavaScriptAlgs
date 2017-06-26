function students(arr) {
    for (var student in arr) {
        console.log(arr[student].first_name + " " + arr[student].last_name);
    }
}

var arr = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

students(arr);