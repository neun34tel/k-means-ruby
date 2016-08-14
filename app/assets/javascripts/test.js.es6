$( function () {

    var connection = new WebSocket('ws://localhost:3000/websockets', 'json');

    // When the connection is open, send some data to the server
    connection.onopen = function () {
        connection.send('Ping'); // Send the message 'Ping' to the server
        console.log('Sent some data.');
    };

    // Log errors
    connection.onerror = function (error) {
        console.log('WebSocket Error ' + error);
    };

    // Log messages from the server
    connection.onmessage = function (e) {
        console.log('Server: ' + e.data);
    };

    // let es6a = (...all) => {
    //     let sum = 0;
    //     for ( let digit in all ) {
    //         console.log( typeof digit, all[digit] );
    //         sum += parseInt(all[digit]);
    //     }
    //     return sum;
    // };
    //
    // let es6b = (...all) => {
    //     let sum = 0;
    //     for ( let digit = 0; digit < all.length; digit++ ) {
    //         sum += all[digit];
    //     }
    //     return sum;
    // };
    //
    // console.log( es6a(1, 2, 3, 4, 5, 6, 7, 8, 9) );
    // console.log( es6b(1, 2, 3, 4, 5, 6, 7, 8, 9) );
} );