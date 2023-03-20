import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  // https://divotion.com/blog/how-to-configure-import-aliases-in-vite-typescript-and-jest
  /*resolve: {
    alias: {
      // https://preactjs.com/guide/v10/getting-started/#aliasing-in-webpack
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",     // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime"
    }
  }*/
})

/* also
https://preactjs.com/guide/v10/getting-started/#aliasing-in-webpack
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src"]
    }
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src"]
    }
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src"]
    }
  }
}
*/