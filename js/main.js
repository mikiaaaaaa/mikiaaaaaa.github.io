console.log('読み込みました')

function click_event() {
    console.log('クリックされました');
}
$('#menu').on('click', click_event);