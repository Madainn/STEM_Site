function get_notesOne() {
    var notesOne = new Array;
    var notesOne_str = localStorage.getItem('notesOne');
    if (notesOne_str !== null) {
        notesOne = JSON.parse(notesOne_str);
    }
    return notesOne;
}
function add() {
    var inputOne = document.getElementById('inputOne').value;
    var notesOne = get_notesOne();
    notesOne.push(inputOne);
    localStorage.setItem('notesOne', JSON.stringify(notesOne));
    show();
    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var notesOne = get_notesOne();
    notesOne.splice(id, 1);
    localStorage.setItem('notesOne', JSON.stringify(notesOne));
    show();
    return false;
}
function show() {
    var notesOne = get_notesOne();
    var html = '<p>';
    for(var i=0; i<notesOne.length; i++) {
        html += '<p>' + notesOne[i] + '<button class="remove"' + i  + '">x</button></p>';
    };
    html += '</p>';
    document.getElementById('notesOne').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById('add').addEventListener('click', add);
show();

// $("#notesOne option:selected").removeAttr("selected");
// $('#notesOne').val('');
// $("#notesOne").attr("value", "");
