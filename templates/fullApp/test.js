// let date = new Date(Date.now());
// console.log('Given IST datetime: ' + date);

// let usaTime = 
//     date.toLocaleString("en-US", {
//         timeZone: "America/New_York" 
//     });
// console.log('USA datetime: ' + usaTime)

// const str = new Date().toLocaleString
// console.log(str);

// let options = {
//     timeZone: 'America/New_York' ,
//     hour: 'numeric',
//     minute: 'numeric',
//   },
//   formatter = new Intl.DateTimeFormat([], options);

// console.log(formatter.format(new Date(Date.now())));

// var date = new Date(Date.now());
// let result =  date.getHours() + ":" + date.getMinutes();


// var date = new Date().getHours() + ":" + date.getMinutes();
// console.log(date)


// var date = new Date(Date.now());

// console.log(date)


// console.log(date.toString());



// db.start_time = 10
// db.end_time = 12

// // first try
// req.start_time = 9
// req.end_time = 13

// // second try
// req.start_time = 11
// req.end_time = {11:30}

// // if ( db.start_time IsBetween [req.start_time , req.end_time] )

// // if ( db.end_time IsBetween [req.start_time , req.end_time] )

// // if ( db.start_time >= req.start_time && db.end_time <= req.end_time ||  db.start_time >= req.end_time &&  db.end_time <= req.start_time  )

// // if ( db.start_time <= req.start_time && db.end_time >= req.end_time )



// var a = new Date( 10)
// var b = new Date(OTHER_DATE)
// var c = new Date(DATE_TO_CHECK)

// var isBetween = c>=a && c<=b || c>=b && c<=a

const onlineUserArr =  [
    {
        "socket_id": "78R7VjqWJVVfgNTYAAAB",
        "username": "2",
        "game_id": "60c2ff02fad5b5127cf559f9"
    },
    {
        "socket_id": "78R7VjqWJVVfgNTYAAAB",
        "username": "1",
        "game_id": "60c2ff02fad5b5127cf559f9"
    }
]

onlineUserArr.forEach(function (user, index) {
    console.log("user : ===>>> " , user);
    console.log("index : ===>>> " , index);
    // if(user.username == username){
      onlineUserArr.splice(index, 1)[0];
      console.log("onlineUserArr : " , onlineUserArr)
    // }
});