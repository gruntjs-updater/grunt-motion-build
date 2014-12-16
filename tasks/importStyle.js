var importStyle = (function(){
  var RE_NON_WORD = /\W/g
  var doc = document
  var head = document.getElementsByTagName('head')[0] ||
      document.documentElement
  var styleNode
  /**
   * import css string to docuemnt
   * @param  {[type]} cssText [description]
   * @param  {[type]} id      [description]
   * @return {[type]}         [description]
   */
  return function(cssText, id) {
    if (id) {
      // Convert id to valid string
      id = id.replace(RE_NON_WORD, '-')

      // Don't add multiple times
      if (doc.getElementById(id)) return
    }

    var element

    // Don't share styleNode when id is spectied
    if (!styleNode || id) {
      element = doc.createElement('style')
      id && (element.id = id)

      // Adds to DOM first to avoid the css hack invalid
      head.appendChild(element)
    } else {
      element = styleNode
    }

   
    element.appendChild(doc.createTextNode(cssText))

    if (!id) {
      styleNode = element
    }
  }
});
exports.importStyle = 'var importStyle = ' + importStyle.toString() + '()';