const filePath = '{folder}/{file}' 
const templateLocation = {
    folder:'small_content_card',
    pug: 'small_content_card.pug',
    data: 'data.json'
}

var folderPath = filePath.replace('{folder}', templateLocation.folder),
dataPath = 'examples/'+folderPath.replace('{file}',templateLocation.data),
pugTemplateUrl = folderPath.replace('{file}',templateLocation.pug)


jQuery.getJSON(dataPath,function (json, status) {
    if (status === 'success') {
         window.bauerSharedLibs.pug.render(pugTemplateUrl, json, 'content-card-small-test')
    }
})