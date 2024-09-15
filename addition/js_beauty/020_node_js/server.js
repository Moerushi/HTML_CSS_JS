const { createServer } = require('http');
const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;
    handler(request)
        .catch(error => {
            if (error.status != null) return error;
        })
        .then(({ body, status = 200, type = 'text/plain' }) => {
            response.writeHead(status, { 'Content-Type': type });
            if (body && body.pipe) body.pipe(response);
            else response.end(body);
        });
}).listen(8000);

async function notAllowed(request) {
    return {
        status: 405,
        body: `Method ${request.method} is not allowed`
    }
}

const { parse } = require('url');
const { resolve, sep } = require('path');

const baseDirectory = process.cwd();

function urlPath(url) {
    let { pathname } = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
        throw { status: 403, body: 'Forbidden' };
    }
    return path;
}

methods.GET = function (path, respond) {
    fs.stat(path, function (error, stats) {
        if (error && error.code == "ENOENT")
            respond(404, "File not found");
        else if (error)
            respond(500, error.toString());
        else if (stats.isDirectory())
            fs.readdir(path, function (error, files) {
                if (error)
                    respond(500, error.toString());
                else
                    respond(200, files.join("\n"));
            });
        else
            respond(200, fs.createReadStream(path),
                require("mime").lookup(path));
    });
};

methods.DELETE = function(path, respond) {
    fs.stat(path, function(error, stats) {
      if (error && error.code == "ENOENT")
        respond(204);
      else if (error)
        respond(500, error.toString());
      else if (stats.isDirectory())
        fs.rmdir(path, respondErrorOrNothing(respond));
      else
        fs.unlink(path, respondErrorOrNothing(respond));
    });
  };

  function respondErrorOrNothing(respond) {
    return function(error) {
      if (error)
        respond(500, error.toString());
      else
        respond(204);
    };
  }

  methods.PUT = function(path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on("error", function(error) {
      respond(500, error.toString());
    });
    outStream.on("finish", function() {
      respond(204);
    });
    request.pipe(outStream);
  };