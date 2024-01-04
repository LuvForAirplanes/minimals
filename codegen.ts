
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/lib/graphql/schema.graphql",
  documents: "src/**/*.ts",
  generates: {
    'src/lib/types/': {
      schema: 'src/lib/graphql/local.schema.graphql',
      preset: "client",
      plugins: [],
    },
    "graphql.schema.json": {
      schema: 'src/lib/graphql/local.schema.graphql',
      plugins: ["introspection"]
    }
  }
};

export default config;
