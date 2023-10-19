import { type CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "https://iwish.demo.malevichstudio.com/graphql",
  documents: ["./gql/schema/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/types/": {
      preset: "client"
    }
  }
}

export default config
