function refresh() {
    $.get('/todos', (data) => {// Sending Get request from the URL to the Server and recive response as data in data variable.
        $('#lst').html("");
        for (let item of data) {
            $('#lst').append(`<li>${item}</li>`)
        }
    })
}

refresh();
$('#btn').click(function () {//when button is called
    console.log('button clicked');
    const data = $('#inp').val();//value inside input box is taken
    // console.log(data);
    event.preventDefault();//stop the data on screen
    $.post('/todos', {data}, (items) => {//sending post request to add new todo in the List.
        console.log(items);
        refresh();//printing the list.
    })
})
