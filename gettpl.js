var getTpl = (function () {
    "use strict";
    let cache = {};
    var getCache = function (templateId) {
        return cache[templateId];
    };
    var setCache = function (templateId, html) {
        cache[templateId] = html;
    };

    /**
     *
     * @param {Object} data formed object that match in template {foo:'bar'} will replace {{foo}} with bar
     * @param {String} templateId HTML attribute id
     * @returns {string} HTMl template transformed
     */
    return function gettpl(data, templateId, debug = false) {
        let templateHTML = getCache(templateId);
        if (getCache(templateId)) {
            templateHTML = getCache(templateId);
        }
        else {
            let tpl = document.getElementById(templateId);
            templateHTML = tpl.innerHTML;
            setCache(templateId, templateHTML);
        }
        return templateHTML.replace(/{{ ?([^}]*) ?}}/g, function (search, result) {
            result = result.trim();
            debug && console.info(result, data[result]);
            return data[result] || '';
        });
    };

})();
module.exports = getTpl;

/*
    return templateHTML.replace(/{(?:{|%) ?([^}]*) ?(?:%|})}/g, function (search, result) {
      result = result.trim();
      var itsExp = search.indexOf('{!') === 0;
      // debug && console.info(result, data[result]);
      if (itsExp) {
        return eval('(' + result + ')');
      } else {
        if (result.indexOf('.') > 0) {
          var obj_prop = result.split('.');
          return data[obj_prop[0]][obj_prop[1]];
        } else {
          return data[result] || '';
        }
      }
    });
*/
