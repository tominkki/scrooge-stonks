import httpServer from './server';

httpServer.listen(3000, () => {
  console.log('Upload endpoint ready at localhost:3000/api/upload');
  console.log(`GraphQl server ready at localhost:3000/api/graphql`);
});
