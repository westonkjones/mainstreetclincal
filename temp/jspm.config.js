SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.14.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.16.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0'
    },
    'packages': {
      'npm:babel-plugin-transform-flow-strip-types@6.14.0': {
        'map': {
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.16.0': {
        'map': {
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.16.0'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.16.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-generator@6.16.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.16.2',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'detect-indent': 'npm:detect-indent@3.0.1',
          'jsesc': 'npm:jsesc@1.3.0',
          'babel-types': 'npm:babel-types@6.16.0',
          'source-map': 'npm:source-map@0.5.6'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.16.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0',
          'babel-types': 'npm:babel-types@6.16.0',
          'babel-traverse': 'npm:babel-traverse@6.16.0'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
        }
      },
      'npm:babel-template@6.16.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.16.2',
          'babel-types': 'npm:babel-types@6.16.0',
          'babel-traverse': 'npm:babel-traverse@6.16.0',
          'babylon': 'npm:babylon@6.11.2'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.16.0'
        }
      },
      'npm:babel-types@6.16.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.16.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:babel-traverse@6.16.0': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.16.0',
          'debug': 'npm:debug@2.2.0',
          'lodash': 'npm:lodash@4.16.2',
          'babylon': 'npm:babylon@6.11.2',
          'invariant': 'npm:invariant@2.2.1',
          'babel-code-frame': 'npm:babel-code-frame@6.16.0',
          'globals': 'npm:globals@8.18.0'
        }
      },
      'npm:detect-indent@3.0.1': {
        'map': {
          'repeating': 'npm:repeating@1.1.3',
          'get-stdin': 'npm:get-stdin@4.0.1',
          'minimist': 'npm:minimist@1.2.0'
        }
      },
      'npm:babel-code-frame@6.16.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@2.0.0'
        }
      },
      'npm:repeating@1.1.3': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.1'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    },
    'typings': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.1',
    '@angular/compiler': 'npm:@angular/compiler@2.0.1',
    '@angular/core': 'npm:@angular/core@2.0.1',
    '@angular/http': 'npm:@angular/http@2.0.1',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.1',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.1',
    '@angular/router': 'npm:@angular/router@3.0.1',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'cluster': 'github:jspm/nodelibs-cluster@0.2.0-alpha',
    'compression': 'npm:compression@1.6.2',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.4.1',
    'cors': 'npm:cors@2.8.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'dgram': 'github:jspm/nodelibs-dgram@0.2.0-alpha',
    'dns': 'github:jspm/nodelibs-dns@0.2.0-alpha',
    'domain': 'github:jspm/nodelibs-domain@0.2.0-alpha',
    'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'helmet': 'npm:helmet@1.3.0',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'jodid25519': 'npm:jodid25519@1.0.2',
    'jsbn': 'npm:jsbn@0.1.0',
    'loopback': 'npm:loopback@2.34.1',
    'loopback-boot': 'npm:loopback-boot@2.22.0',
    'loopback-component-explorer': 'npm:loopback-component-explorer@2.6.0',
    'loopback-datasource-juggler': 'npm:loopback-datasource-juggler@2.51.0',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'punycode': 'github:jspm/nodelibs-punycode@0.2.0-alpha',
    'querystring': 'github:jspm/nodelibs-querystring@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.8',
    'rxjs': 'npm:rxjs@5.0.0-beta.12',
    'serve-favicon': 'npm:serve-favicon@2.3.0',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'strong-error-handler': 'npm:strong-error-handler@1.1.0',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'tls': 'github:jspm/nodelibs-tls@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@5.1.2',
    'tty': 'github:jspm/nodelibs-tty@0.2.0-alpha',
    'tweetnacl': 'npm:tweetnacl@0.14.3',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.25'
  },
  packages: {
    'npm:loopback-component-explorer@2.6.0': {
      'map': {
        'cors': 'npm:cors@2.8.1',
        'loopback-swagger': 'npm:loopback-swagger@2.7.0',
        'strong-swagger-ui': 'npm:strong-swagger-ui@21.0.2',
        'lodash': 'npm:lodash@3.10.1',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:loopback@2.34.1': {
      'map': {
        'serve-favicon': 'npm:serve-favicon@2.3.0',
        'loopback-context': 'npm:loopback-context@1.0.0',
        'canonical-json': 'npm:canonical-json@0.0.4',
        'loopback-connector-remote': 'npm:loopback-connector-remote@1.3.3',
        'depd': 'npm:depd@1.1.0',
        'cookie-parser': 'npm:cookie-parser@1.4.3',
        'errorhandler': 'npm:errorhandler@1.4.3',
        'inflection': 'npm:inflection@1.10.0',
        'nodemailer-stub-transport': 'npm:nodemailer-stub-transport@1.1.0',
        'isemail': 'npm:isemail@1.2.0',
        'underscore.string': 'npm:underscore.string@3.3.4',
        'async': 'npm:async@2.0.1',
        'uid2': 'npm:uid2@0.0.3',
        'loopback-phase': 'npm:loopback-phase@1.4.0',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'bcryptjs': 'npm:bcryptjs@2.3.0',
        'stable': 'npm:stable@0.1.5',
        'strong-remoting': 'npm:strong-remoting@2.31.0',
        'debug': 'npm:debug@2.2.0',
        'ejs': 'npm:ejs@2.5.2',
        'body-parser': 'npm:body-parser@1.15.2',
        'nodemailer': 'npm:nodemailer@2.6.4',
        'express': 'npm:express@4.14.0',
        'node-express': 'npm:express@4.14.0',
        'node-nodemailer': 'npm:nodemailer@2.6.4',
        'node-depd': 'npm:depd@1.1.0'
      }
    },
    'npm:helmet@1.3.0': {
      'map': {
        'x-xss-protection': 'npm:x-xss-protection@1.0.0',
        'hide-powered-by': 'npm:hide-powered-by@1.0.0',
        'dont-sniff-mimetype': 'npm:dont-sniff-mimetype@1.0.0',
        'hpkp': 'npm:hpkp@1.1.0',
        'nocache': 'npm:nocache@1.0.0',
        'dns-prefetch-control': 'npm:dns-prefetch-control@0.1.0',
        'hsts': 'npm:hsts@1.0.0',
        'frameguard': 'npm:frameguard@1.1.0',
        'helmet-csp': 'npm:helmet-csp@1.1.0',
        'ienoopen': 'npm:ienoopen@1.0.0',
        'connect': 'npm:connect@3.4.1'
      }
    },
    'npm:compression@1.6.2': {
      'map': {
        'bytes': 'npm:bytes@2.3.0',
        'vary': 'npm:vary@1.1.0',
        'compressible': 'npm:compressible@2.0.8',
        'on-headers': 'npm:on-headers@1.0.1',
        'debug': 'npm:debug@2.2.0',
        'accepts': 'npm:accepts@1.3.3'
      }
    },
    'npm:loopback-boot@2.22.0': {
      'map': {
        'commondir': 'npm:commondir@0.0.1',
        'toposort': 'npm:toposort@0.2.12',
        'semver': 'npm:semver@4.3.6',
        'async': 'npm:async@0.9.2',
        'lodash': 'npm:lodash@3.10.1',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:rxjs@5.0.0-beta.12': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.2'
      }
    },
    'npm:serve-favicon@2.3.0': {
      'map': {
        'fresh': 'npm:fresh@0.3.0',
        'ms': 'npm:ms@0.7.1',
        'etag': 'npm:etag@1.7.0',
        'parseurl': 'npm:parseurl@1.3.1'
      }
    },
    'npm:loopback-datasource-juggler@2.51.0': {
      'map': {
        'loopback-connector': 'npm:loopback-connector@2.4.0',
        'depd': 'npm:depd@1.1.0',
        'node-uuid': 'npm:node-uuid@1.4.7',
        'inflection': 'npm:inflection@1.10.0',
        'minimatch': 'npm:minimatch@3.0.3',
        'async': 'npm:async@1.0.0',
        'qs': 'npm:qs@3.1.0',
        'traverse': 'npm:traverse@0.6.6',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0',
        'node-depd': 'npm:depd@1.1.0'
      }
    },
    'npm:cors@2.8.1': {
      'map': {
        'vary': 'npm:vary@1.1.0'
      }
    },
    'npm:strong-error-handler@1.1.0': {
      'map': {
        'http-status': 'npm:http-status@0.2.3',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0',
        'accepts': 'npm:accepts@1.3.3',
        'ejs': 'npm:ejs@2.5.2'
      }
    },
    'npm:loopback-connector-remote@1.3.3': {
      'map': {
        'loopback-datasource-juggler': 'npm:loopback-datasource-juggler@2.51.0',
        'strong-remoting': 'npm:strong-remoting@2.31.0'
      }
    },
    'npm:loopback-swagger@2.7.0': {
      'map': {
        'underscore.string': 'npm:underscore.string@2.3.3',
        'async': 'npm:async@1.5.2',
        'lodash': 'npm:lodash@3.10.1',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0',
        'ejs': 'npm:ejs@1.0.0'
      }
    },
    'npm:loopback-connector@2.4.0': {
      'map': {
        'async': 'npm:async@1.5.2',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:async@2.0.1': {
      'map': {
        'lodash': 'npm:lodash@4.16.2'
      }
    },
    'npm:hsts@1.0.0': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2'
      }
    },
    'npm:loopback-phase@1.4.0': {
      'map': {
        'async': 'npm:async@0.9.2',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:frameguard@1.1.0': {
      'map': {
        'lodash.isstring': 'npm:lodash.isstring@4.0.1'
      }
    },
    'npm:helmet-csp@1.1.0': {
      'map': {
        'camelize': 'npm:camelize@1.0.0',
        'content-security-policy-builder': 'npm:content-security-policy-builder@1.0.0',
        'lodash.isfunction': 'npm:lodash.isfunction@3.0.8',
        'platform': 'npm:platform@1.3.1',
        'lodash.assign': 'npm:lodash.assign@4.0.4',
        'lodash.reduce': 'npm:lodash.reduce@4.2.0',
        'lodash.some': 'npm:lodash.some@4.2.0'
      }
    },
    'npm:errorhandler@1.4.3': {
      'map': {
        'accepts': 'npm:accepts@1.3.3',
        'escape-html': 'npm:escape-html@1.0.3'
      }
    },
    'npm:strong-globalize@2.8.0': {
      'map': {
        'async': 'npm:async@1.5.2',
        'debug': 'npm:debug@2.2.0',
        'lodash': 'npm:lodash@4.16.2',
        'md5': 'npm:md5@2.2.1',
        'fs-sync': 'npm:fs-sync@1.0.2',
        'mktmpdir': 'npm:mktmpdir@0.1.1',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'optional': 'npm:optional@0.1.3',
        'estraverse': 'npm:estraverse@4.2.0',
        'yamljs': 'npm:yamljs@0.2.8',
        'word-count': 'npm:word-count@0.2.2',
        'esprima': 'npm:esprima@2.7.3',
        'g11n-pipeline': 'npm:g11n-pipeline@1.2.3',
        'htmlparser2': 'npm:htmlparser2@3.9.1',
        'os-locale': 'npm:os-locale@1.4.0',
        'posix-getopt': 'npm:posix-getopt@1.2.0',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:loopback-context@1.0.0': {
      'map': {
        'continuation-local-storage': 'npm:continuation-local-storage@3.2.0'
      }
    },
    'npm:strong-remoting@2.31.0': {
      'map': {
        'qs': 'npm:qs@6.2.1',
        'async': 'npm:async@2.0.1',
        'cors': 'npm:cors@2.8.1',
        'debug': 'npm:debug@2.2.0',
        'depd': 'npm:depd@1.1.0',
        'inflection': 'npm:inflection@1.10.0',
        'loopback-phase': 'npm:loopback-phase@1.4.0',
        'strong-globalize': 'npm:strong-globalize@2.8.0',
        'traverse': 'npm:traverse@0.6.6',
        'body-parser': 'npm:body-parser@1.15.2',
        'sse': 'npm:sse@0.0.6',
        'js2xmlparser': 'npm:js2xmlparser@1.0.0',
        'mux-demux': 'npm:mux-demux@3.7.9',
        'eventemitter2': 'npm:eventemitter2@2.1.3',
        'jayson': 'npm:jayson@1.2.2',
        'express': 'npm:express@4.14.0',
        'xml2js': 'npm:xml2js@0.4.17',
        'request': 'npm:request@2.75.0',
        'node-express': 'npm:express@4.14.0',
        'node-body-parser': 'npm:body-parser@1.15.2',
        'node-cors': 'npm:cors@2.8.1',
        'node-js2xmlparser': 'npm:js2xmlparser@1.0.0'
      }
    },
    'npm:cookie-parser@1.4.3': {
      'map': {
        'cookie-signature': 'npm:cookie-signature@1.0.6',
        'cookie': 'npm:cookie@0.3.1'
      }
    },
    'npm:underscore.string@3.3.4': {
      'map': {
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'sprintf-js': 'npm:sprintf-js@1.0.3'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:compressible@2.0.8': {
      'map': {
        'mime-db': 'npm:mime-db@1.24.0'
      }
    },
    'npm:connect@3.4.1': {
      'map': {
        'debug': 'npm:debug@2.2.0',
        'parseurl': 'npm:parseurl@1.3.1',
        'utils-merge': 'npm:utils-merge@1.0.0',
        'finalhandler': 'npm:finalhandler@0.4.1'
      }
    },
    'npm:body-parser@1.15.2': {
      'map': {
        'bytes': 'npm:bytes@2.4.0',
        'qs': 'npm:qs@6.2.0',
        'debug': 'npm:debug@2.2.0',
        'depd': 'npm:depd@1.1.0',
        'content-type': 'npm:content-type@1.0.2',
        'on-finished': 'npm:on-finished@2.3.0',
        'http-errors': 'npm:http-errors@1.5.0',
        'type-is': 'npm:type-is@1.6.13',
        'raw-body': 'npm:raw-body@2.1.7',
        'iconv-lite': 'npm:iconv-lite@0.4.13'
      }
    },
    'npm:content-security-policy-builder@1.0.0': {
      'map': {
        'dashify': 'npm:dashify@0.2.2'
      }
    },
    'npm:fs-sync@1.0.2': {
      'map': {
        'mkdirp': 'npm:mkdirp@0.3.5',
        'lodash': 'npm:lodash@4.16.2',
        'iconv-lite': 'npm:iconv-lite@0.2.11',
        'rimraf': 'npm:rimraf@2.5.4',
        'glob': 'npm:glob@4.5.3'
      }
    },
    'npm:lodash.reduce@4.2.0': {
      'map': {
        'lodash._basereduce': 'npm:lodash._basereduce@3.0.2',
        'lodash._baseiteratee': 'npm:lodash._baseiteratee@4.7.0',
        'lodash._baseeach': 'npm:lodash._baseeach@4.1.3'
      }
    },
    'npm:continuation-local-storage@3.2.0': {
      'map': {
        'emitter-listener': 'npm:emitter-listener@1.0.1',
        'async-listener': 'npm:async-listener@0.6.3'
      }
    },
    'npm:lodash.some@4.2.0': {
      'map': {
        'lodash._baseiteratee': 'npm:lodash._baseiteratee@4.7.0',
        'lodash._baseeach': 'npm:lodash._baseeach@4.1.3'
      }
    },
    'npm:accepts@1.3.3': {
      'map': {
        'mime-types': 'npm:mime-types@2.1.12',
        'negotiator': 'npm:negotiator@0.6.1'
      }
    },
    'npm:lodash.assign@4.0.4': {
      'map': {
        'lodash.keys': 'npm:lodash.keys@4.2.0',
        'lodash.rest': 'npm:lodash.rest@4.0.5'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:mux-demux@3.7.9': {
      'map': {
        'xtend': 'npm:xtend@1.0.3',
        'stream-combiner': 'npm:stream-combiner@0.0.2',
        'json-buffer': 'npm:json-buffer@2.0.11',
        'stream-serializer': 'npm:stream-serializer@1.1.2',
        'duplex': 'npm:duplex@1.0.0',
        'through': 'npm:through@2.3.8',
        'msgpack-stream': 'npm:msgpack-stream@0.0.12'
      }
    },
    'npm:mime-types@2.1.12': {
      'map': {
        'mime-db': 'npm:mime-db@1.24.0'
      }
    },
    'npm:jayson@1.2.2': {
      'map': {
        'lodash': 'npm:lodash@3.6.0',
        'eyes': 'npm:eyes@0.1.8',
        'JSONStream': 'npm:JSONStream@1.0.3',
        'commander': 'npm:commander@1.3.2'
      }
    },
    'npm:finalhandler@0.4.1': {
      'map': {
        'debug': 'npm:debug@2.2.0',
        'escape-html': 'npm:escape-html@1.0.3',
        'on-finished': 'npm:on-finished@2.3.0',
        'unpipe': 'npm:unpipe@1.0.0'
      }
    },
    'npm:express@4.14.0': {
      'map': {
        'finalhandler': 'npm:finalhandler@0.5.0',
        'accepts': 'npm:accepts@1.3.3',
        'content-type': 'npm:content-type@1.0.2',
        'cookie': 'npm:cookie@0.3.1',
        'cookie-signature': 'npm:cookie-signature@1.0.6',
        'debug': 'npm:debug@2.2.0',
        'depd': 'npm:depd@1.1.0',
        'escape-html': 'npm:escape-html@1.0.3',
        'etag': 'npm:etag@1.7.0',
        'fresh': 'npm:fresh@0.3.0',
        'on-finished': 'npm:on-finished@2.3.0',
        'parseurl': 'npm:parseurl@1.3.1',
        'qs': 'npm:qs@6.2.0',
        'type-is': 'npm:type-is@1.6.13',
        'utils-merge': 'npm:utils-merge@1.0.0',
        'vary': 'npm:vary@1.1.0',
        'merge-descriptors': 'npm:merge-descriptors@1.0.1',
        'methods': 'npm:methods@1.1.2',
        'range-parser': 'npm:range-parser@1.2.0',
        'array-flatten': 'npm:array-flatten@1.1.1',
        'proxy-addr': 'npm:proxy-addr@1.1.2',
        'encodeurl': 'npm:encodeurl@1.0.1',
        'send': 'npm:send@0.14.1',
        'serve-static': 'npm:serve-static@1.11.1',
        'path-to-regexp': 'npm:path-to-regexp@0.1.7',
        'content-disposition': 'npm:content-disposition@0.5.1'
      }
    },
    'npm:md5@2.2.1': {
      'map': {
        'charenc': 'npm:charenc@0.0.1',
        'crypt': 'npm:crypt@0.0.1',
        'is-buffer': 'npm:is-buffer@1.1.4'
      }
    },
    'npm:type-is@1.6.13': {
      'map': {
        'mime-types': 'npm:mime-types@2.1.12',
        'media-typer': 'npm:media-typer@0.3.0'
      }
    },
    'npm:raw-body@2.1.7': {
      'map': {
        'bytes': 'npm:bytes@2.4.0',
        'iconv-lite': 'npm:iconv-lite@0.4.13',
        'unpipe': 'npm:unpipe@1.0.0'
      }
    },
    'npm:nodemailer@2.6.4': {
      'map': {
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'socks': 'npm:socks@1.1.9',
        'libmime': 'npm:libmime@2.1.0',
        'nodemailer-direct-transport': 'npm:nodemailer-direct-transport@3.3.2',
        'nodemailer-smtp-pool': 'npm:nodemailer-smtp-pool@2.8.2',
        'nodemailer-smtp-transport': 'npm:nodemailer-smtp-transport@2.7.2',
        'mailcomposer': 'npm:mailcomposer@3.12.0'
      }
    },
    'npm:finalhandler@0.5.0': {
      'map': {
        'debug': 'npm:debug@2.2.0',
        'escape-html': 'npm:escape-html@1.0.3',
        'on-finished': 'npm:on-finished@2.3.0',
        'unpipe': 'npm:unpipe@1.0.0',
        'statuses': 'npm:statuses@1.3.0'
      }
    },
    'npm:sse@0.0.6': {
      'map': {
        'options': 'npm:options@0.0.6'
      }
    },
    'npm:mktmpdir@0.1.1': {
      'map': {
        'rimraf': 'npm:rimraf@2.2.8'
      }
    },
    'npm:lodash._baseiteratee@4.7.0': {
      'map': {
        'lodash._stringtopath': 'npm:lodash._stringtopath@4.8.0'
      }
    },
    'npm:emitter-listener@1.0.1': {
      'map': {
        'shimmer': 'npm:shimmer@1.0.0'
      }
    },
    'npm:async-listener@0.6.3': {
      'map': {
        'shimmer': 'npm:shimmer@1.0.0'
      }
    },
    'npm:htmlparser2@3.9.1': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0',
        'entities': 'npm:entities@1.1.1',
        'domhandler': 'npm:domhandler@2.3.0',
        'inherits': 'npm:inherits@2.0.3',
        'domutils': 'npm:domutils@1.5.1',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'node-readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'npm:yamljs@0.2.8': {
      'map': {
        'argparse': 'npm:argparse@1.0.7',
        'glob': 'npm:glob@7.1.0'
      }
    },
    'npm:http-errors@1.5.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'setprototypeof': 'npm:setprototypeof@1.0.1',
        'statuses': 'npm:statuses@1.3.0'
      }
    },
    'npm:os-locale@1.4.0': {
      'map': {
        'lcid': 'npm:lcid@1.0.0'
      }
    },
    'npm:libmime@2.1.0': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.13',
        'libbase64': 'npm:libbase64@0.1.0',
        'libqp': 'npm:libqp@1.1.0'
      }
    },
    'npm:nodemailer-direct-transport@3.3.2': {
      'map': {
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'smtp-connection': 'npm:smtp-connection@2.12.0'
      }
    },
    'npm:argparse@1.0.7': {
      'map': {
        'sprintf-js': 'npm:sprintf-js@1.0.3'
      }
    },
    'npm:domhandler@2.3.0': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0'
      }
    },
    'npm:domutils@1.5.1': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.3.0',
        'dom-serializer': 'npm:dom-serializer@0.1.0'
      }
    },
    'npm:nodemailer-smtp-transport@2.7.2': {
      'map': {
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'nodemailer-wellknown': 'npm:nodemailer-wellknown@0.1.10',
        'smtp-connection': 'npm:smtp-connection@2.12.0'
      }
    },
    'npm:nodemailer-smtp-pool@2.8.2': {
      'map': {
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'nodemailer-wellknown': 'npm:nodemailer-wellknown@0.1.10',
        'smtp-connection': 'npm:smtp-connection@2.12.0'
      }
    },
    'npm:rimraf@2.5.4': {
      'map': {
        'glob': 'npm:glob@7.1.0'
      }
    },
    'npm:on-finished@2.3.0': {
      'map': {
        'ee-first': 'npm:ee-first@1.1.1'
      }
    },
    'npm:msgpack-stream@0.0.12': {
      'map': {
        'through': 'npm:through@2.3.4',
        'msgpack-js': 'npm:msgpack-js@0.3.0',
        'bops': 'npm:bops@0.0.6'
      }
    },
    'npm:request@2.75.0': {
      'map': {
        'mime-types': 'npm:mime-types@2.1.12',
        'node-uuid': 'npm:node-uuid@1.4.7',
        'qs': 'npm:qs@6.2.1',
        'forever-agent': 'npm:forever-agent@0.6.1',
        'aws-sign2': 'npm:aws-sign2@0.6.0',
        'extend': 'npm:extend@3.0.0',
        'tunnel-agent': 'npm:tunnel-agent@0.4.3',
        'isstream': 'npm:isstream@0.1.2',
        'is-typedarray': 'npm:is-typedarray@1.0.0',
        'json-stringify-safe': 'npm:json-stringify-safe@5.0.1',
        'oauth-sign': 'npm:oauth-sign@0.8.2',
        'stringstream': 'npm:stringstream@0.0.5',
        'http-signature': 'npm:http-signature@1.1.1',
        'caseless': 'npm:caseless@0.11.0',
        'form-data': 'npm:form-data@2.0.0',
        'combined-stream': 'npm:combined-stream@1.0.5',
        'har-validator': 'npm:har-validator@2.0.6',
        'bl': 'npm:bl@1.1.2',
        'aws4': 'npm:aws4@1.4.1',
        'tough-cookie': 'npm:tough-cookie@2.3.1',
        'hawk': 'npm:hawk@3.1.3'
      }
    },
    'npm:glob@4.5.3': {
      'map': {
        'minimatch': 'npm:minimatch@2.0.10',
        'inherits': 'npm:inherits@2.0.3',
        'inflight': 'npm:inflight@1.0.5',
        'once': 'npm:once@1.4.0'
      }
    },
    'npm:glob@7.1.0': {
      'map': {
        'minimatch': 'npm:minimatch@3.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'fs.realpath': 'npm:fs.realpath@1.0.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'inflight': 'npm:inflight@1.0.5',
        'once': 'npm:once@1.4.0'
      }
    },
    'npm:mailcomposer@3.12.0': {
      'map': {
        'libmime': 'npm:libmime@2.1.0',
        'buildmail': 'npm:buildmail@3.10.0'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:JSONStream@1.0.3': {
      'map': {
        'through': 'npm:through@2.3.8',
        'jsonparse': 'npm:jsonparse@1.0.0'
      }
    },
    'npm:xml2js@0.4.17': {
      'map': {
        'sax': 'npm:sax@1.2.1',
        'xmlbuilder': 'npm:xmlbuilder@4.2.1'
      }
    },
    'npm:g11n-pipeline@1.2.3': {
      'map': {
        'swagger-client': 'npm:swagger-client@2.1.21'
      }
    },
    'npm:nodemailer-shared@1.1.0': {
      'map': {
        'nodemailer-fetch': 'npm:nodemailer-fetch@1.6.0'
      }
    },
    'npm:minimatch@2.0.10': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:lodash._stringtopath@4.8.0': {
      'map': {
        'lodash._basetostring': 'npm:lodash._basetostring@4.12.0'
      }
    },
    'npm:stream-combiner@0.0.2': {
      'map': {
        'duplexer': 'npm:duplexer@0.0.4'
      }
    },
    'npm:send@0.14.1': {
      'map': {
        'etag': 'npm:etag@1.7.0',
        'fresh': 'npm:fresh@0.3.0',
        'ms': 'npm:ms@0.7.1',
        'debug': 'npm:debug@2.2.0',
        'depd': 'npm:depd@1.1.0',
        'encodeurl': 'npm:encodeurl@1.0.1',
        'escape-html': 'npm:escape-html@1.0.3',
        'http-errors': 'npm:http-errors@1.5.0',
        'on-finished': 'npm:on-finished@2.3.0',
        'range-parser': 'npm:range-parser@1.2.0',
        'statuses': 'npm:statuses@1.3.0',
        'destroy': 'npm:destroy@1.0.4',
        'mime': 'npm:mime@1.3.4'
      }
    },
    'npm:serve-static@1.11.1': {
      'map': {
        'encodeurl': 'npm:encodeurl@1.0.1',
        'escape-html': 'npm:escape-html@1.0.3',
        'parseurl': 'npm:parseurl@1.3.1',
        'send': 'npm:send@0.14.1'
      }
    },
    'npm:socks@1.1.9': {
      'map': {
        'ip': 'npm:ip@1.1.3',
        'smart-buffer': 'npm:smart-buffer@1.0.11'
      }
    },
    'github:frankwallis/plugin-typescript@5.1.2': {
      'map': {
        'typescript': 'npm:typescript@2.0.3'
      }
    },
    'npm:lcid@1.0.0': {
      'map': {
        'invert-kv': 'npm:invert-kv@1.0.0'
      }
    },
    'npm:xmlbuilder@4.2.1': {
      'map': {
        'lodash': 'npm:lodash@4.16.2'
      }
    },
    'npm:dom-serializer@0.1.0': {
      'map': {
        'domelementtype': 'npm:domelementtype@1.1.3',
        'entities': 'npm:entities@1.1.1'
      }
    },
    'npm:msgpack-js@0.3.0': {
      'map': {
        'bops': 'npm:bops@0.0.6'
      }
    },
    'npm:proxy-addr@1.1.2': {
      'map': {
        'forwarded': 'npm:forwarded@0.1.0',
        'ipaddr.js': 'npm:ipaddr.js@1.1.1'
      }
    },
    'npm:form-data@2.0.0': {
      'map': {
        'combined-stream': 'npm:combined-stream@1.0.5',
        'mime-types': 'npm:mime-types@2.1.12',
        'asynckit': 'npm:asynckit@0.4.0'
      }
    },
    'npm:har-validator@2.0.6': {
      'map': {
        'commander': 'npm:commander@2.9.0',
        'chalk': 'npm:chalk@1.1.3',
        'pinkie-promise': 'npm:pinkie-promise@2.0.1',
        'is-my-json-valid': 'npm:is-my-json-valid@2.14.0'
      }
    },
    'npm:smtp-connection@2.12.0': {
      'map': {
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'httpntlm': 'npm:httpntlm@1.6.1'
      }
    },
    'npm:inflight@1.0.5': {
      'map': {
        'once': 'npm:once@1.4.0',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:commander@1.3.2': {
      'map': {
        'keypress': 'npm:keypress@0.1.0'
      }
    },
    'npm:bl@1.1.2': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.0.6'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'has-ansi': 'npm:has-ansi@2.0.0',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:swagger-client@2.1.21': {
      'map': {
        'btoa': 'npm:btoa@1.1.2',
        'cookiejar': 'npm:cookiejar@2.1.0',
        'lodash-compat': 'npm:lodash-compat@3.10.2',
        'js-yaml': 'npm:js-yaml@3.6.1',
        'superagent': 'npm:superagent@2.3.0',
        'q': 'npm:q@1.4.1'
      }
    },
    'npm:readable-stream@2.0.6': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:buildmail@3.10.0': {
      'map': {
        'libbase64': 'npm:libbase64@0.1.0',
        'libmime': 'npm:libmime@2.1.0',
        'libqp': 'npm:libqp@1.1.0',
        'nodemailer-fetch': 'npm:nodemailer-fetch@1.6.0',
        'nodemailer-shared': 'npm:nodemailer-shared@1.1.0',
        'addressparser': 'npm:addressparser@1.0.1'
      }
    },
    'npm:bops@0.0.6': {
      'map': {
        'to-utf8': 'npm:to-utf8@0.0.1',
        'base64-js': 'npm:base64-js@0.0.2'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0',
        'ieee754': 'npm:ieee754@1.1.6'
      }
    },
    'npm:http-signature@1.1.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@0.2.0',
        'jsprim': 'npm:jsprim@1.3.1',
        'sshpk': 'npm:sshpk@1.10.1'
      }
    },
    'npm:combined-stream@1.0.5': {
      'map': {
        'delayed-stream': 'npm:delayed-stream@1.0.0'
      }
    },
    'npm:once@1.4.0': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:js-yaml@3.6.1': {
      'map': {
        'argparse': 'npm:argparse@1.0.7',
        'esprima': 'npm:esprima@2.7.3'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:commander@2.9.0': {
      'map': {
        'graceful-readlink': 'npm:graceful-readlink@1.0.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:superagent@2.3.0': {
      'map': {
        'form-data': 'npm:form-data@1.0.0-rc4',
        'qs': 'npm:qs@6.2.1',
        'mime': 'npm:mime@1.3.4',
        'methods': 'npm:methods@1.1.2',
        'cookiejar': 'npm:cookiejar@2.1.0',
        'debug': 'npm:debug@2.2.0',
        'extend': 'npm:extend@3.0.0',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'component-emitter': 'npm:component-emitter@1.2.1',
        'formidable': 'npm:formidable@1.0.17'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.8',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2'
      }
    },
    'npm:sshpk@1.10.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0',
        'getpass': 'npm:getpass@0.1.6',
        'asn1': 'npm:asn1@0.2.3',
        'dashdash': 'npm:dashdash@1.14.0'
      }
    },
    'npm:is-my-json-valid@2.14.0': {
      'map': {
        'xtend': 'npm:xtend@4.0.1',
        'generate-function': 'npm:generate-function@2.0.0',
        'generate-object-property': 'npm:generate-object-property@1.2.0',
        'jsonpointer': 'npm:jsonpointer@2.0.0'
      }
    },
    'npm:hawk@3.1.3': {
      'map': {
        'cryptiles': 'npm:cryptiles@2.0.5',
        'sntp': 'npm:sntp@1.0.9',
        'boom': 'npm:boom@2.10.1',
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:form-data@1.0.0-rc4': {
      'map': {
        'async': 'npm:async@1.5.2',
        'mime-types': 'npm:mime-types@2.1.12',
        'combined-stream': 'npm:combined-stream@1.0.5'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:cryptiles@2.0.5': {
      'map': {
        'boom': 'npm:boom@2.10.1'
      }
    },
    'npm:pinkie-promise@2.0.1': {
      'map': {
        'pinkie': 'npm:pinkie@2.0.4'
      }
    },
    'npm:jsprim@1.3.1': {
      'map': {
        'json-schema': 'npm:json-schema@0.2.3',
        'extsprintf': 'npm:extsprintf@1.0.2',
        'verror': 'npm:verror@1.3.6'
      }
    },
    'npm:sntp@1.0.9': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:boom@2.10.1': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:httpntlm@1.6.1': {
      'map': {
        'underscore': 'npm:underscore@1.7.0',
        'httpreq': 'npm:httpreq@0.4.22'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:verror@1.3.6': {
      'map': {
        'extsprintf': 'npm:extsprintf@1.0.2'
      }
    },
    'npm:pbkdf2@3.0.8': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:ecc-jsbn@0.1.1': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.0'
      }
    },
    'npm:getpass@0.1.6': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:jodid25519@1.0.2': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.0'
      }
    },
    'npm:bcrypt-pbkdf@1.0.0': {
      'map': {
        'tweetnacl': 'npm:tweetnacl@0.14.3'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'npm:dashdash@1.14.0': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:generate-object-property@1.2.0': {
      'map': {
        'is-property': 'npm:is-property@1.0.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.8',
        'asn1.js': 'npm:asn1.js@4.8.1'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.4.0'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:asn1.js@4.8.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:stream-http@2.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'xtend': 'npm:xtend@4.0.1',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.5',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'github:jspm/nodelibs-punycode@0.2.0-alpha': {
      'map': {
        'punycode-browserify': 'npm:punycode@1.3.2'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'github:jspm/nodelibs-domain@0.2.0-alpha': {
      'map': {
        'domain-browserify': 'npm:domain-browser@1.1.7'
      }
    }
  }
});
