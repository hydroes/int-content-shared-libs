jQuery.getJSON('examples/small_content_card/data.json',function (json, status) {
    if (status === 'success') {
         window.bauerSharedLibs.pug.render('small_content_card/small_content_card.pug', json, '.content-card-small')
    }
})