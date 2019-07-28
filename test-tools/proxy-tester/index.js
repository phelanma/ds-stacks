const Hapi = require('@hapi/hapi');
const uuidV4 = require('uuid/v4')

const init = async () => {
  const uuid = uuidV4();
  const server = Hapi.server({ port: process.env.PORT });

  server.route({
    method: 'GET',
    path:'/hello',
    handler: (request, h) => {
      return `Hello World from ${uuid}!`;
    }
  });

  await server.start();
  console.log(`server started on ${server.info.uri} with uuid ${uuid}`)
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


init();
