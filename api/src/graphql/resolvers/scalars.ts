import { GraphQLScalarType } from 'graphql';

export const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date',
  serialize (value: Date) {
    return value.toISOString();
  }
});
