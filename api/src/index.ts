import httpServer from './server';

const PORT = 4000 || process.env.PORT;

httpServer.listen(PORT, () => {
  console.log(`Upload endpoint ready at localhost:${PORT}/api/upload`);
  console.log(`GraphQl server ready at localhost:${PORT}/api/graphql`);
});
