'use strict';
(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;


  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json'; //ожидаемый тип ответа

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status +
         ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('onerror', function () {
      onError('Произошла ошибка соединения')
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var load = function(onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('onerror', function () {
      onError('Произошла ошибка соединения')
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' +
       xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT_IN_MS;
    xhr.open('GET', URL);
    xhr.send();
  };

  window.backend = {
    load: load,
    save: save
  }
})();

