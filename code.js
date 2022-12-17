//@return Base Url
function getUrl() {
  return ScriptApp.getService().getUrl()
}
//@return Html page raw content string
function getHtml(hash) {
  return HtmlService.createHtmlOutputFromFile(hash).getContent()
}

//@return provided page in the urlquery '?page=[PAGEID]' or main index page
function doGet(e) {
  var page = e.parameter.page
  return HtmlService.createHtmlOutputFromFile(page || 'index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('App Demo')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
