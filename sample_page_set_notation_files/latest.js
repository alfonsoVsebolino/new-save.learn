function userpilotInitiator() {

  var _userpilotSettings = {
    token: '21ib23t9',
    version: 'v0',
    endpoint: 'api.userpilot.io/socket/',
  }
  
  window.userpilotCallMethods = {
    identify: [],
    locale: [],
    group: [],
    anonymous: [],
    reload: [],
    track: [],
    trigger: [],
    reset: [],
    clean: [],
    getData: [],
    suppress: [],
    on: [],
    off: [],
    once: [],
    log: [],
  };

  window.userpilot = {
    init: function () {

      if (!window.userpilotSettings) {
        window.userpilotSettings = {};
      }

      for (key in _userpilotSettings) {
        if (!window.userpilotSettings.hasOwnProperty(key)) {
          window.userpilotSettings[key] = _userpilotSettings[key];
        }
      }


      var script = document.createElement('script');
      script.src = 'https://js.userpilot.io/sdk/version/v0/app.js';

      document.querySelector('head').appendChild(script);
    },

    identify: function (userid, data) {
      window.userpilotCallMethods.identify.push({ userid: userid, data: data });
    },
    locale: function (data) {
      window.userpilotCallMethods.locale.push({ data: data });
    },
    group: function (companyId, data) {
      window.userpilotCallMethods.group.push({ companyId: companyId, data: data });
    },

    reload: function (events) {
      window.userpilotCallMethods.reload.push({ events: events });
    },

    log: function () {
      window.userpilotCallMethods.log.push({ log: 1 });
    },

    track: function (title, data) {
      window.userpilotCallMethods.track.push({ title: title, meta: data });
    },

    trigger: function (token) {
      window.userpilotCallMethods.trigger.push({ token: token });
    },

    anonymous: function () {
      window.userpilotCallMethods.anonymous.push({ anonymous: 1 });
    },

    reset: function () {
      window.userpilotCallMethods.reset.push({ reset: 1 });
    },

    suppress: function () {
      window.userpilotCallMethods.suppress.push({ suppress: 1 });
    },

    clean: function () {
      window.userpilotCallMethods.clean.push({ clean: 1 });
    },

    on: function (name, fn) {
      window.userpilotCallMethods.on.push({ name: name, fn: fn });
    },

    off: function (name) {
      window.userpilotCallMethods.off.push({ name: name });
    },

    once: function (name, fn) {
      window.userpilotCallMethods.once.push({ name: name, fn: fn });
    }
  }

  return window.userpilot;
};

var userpilotInitiatorSDK = new userpilotInitiator();
userpilotInitiatorSDK.init();
