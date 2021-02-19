import httpServer from './server';

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Upload endpoint ready at localhost:${PORT}/api/upload`);
  console.log(`GraphQl server ready at localhost:${PORT}/api/graphql`);
});
