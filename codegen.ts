import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/graphql/config/schema.graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/lib/types/': {
      schema: 'src/graphql/config/local.schema.graphql',
      preset: 'client',
      plugins: [],
    },
    'graphql.schema.json': {
      schema: 'src/graphql/config/local.schema.graphql',
      plugins: ['introspection'],
    },
  },
};

export default config;
