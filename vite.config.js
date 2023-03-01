import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    // https://github.com/vitejs/vite/issues/1973
    define: {
        // "process.env": process.env,
        // // By default, Vite doesn't include shims for NodeJS/
        // // necessary for segment analytics lib to work
        "global": {},
        'process.env': {}
    },
    resolve: {
      alias: {
        process: "process/browser/",
        buffer: "buffer/",
        crypto: "crypto-browserify/",
        stream: "stream-browserify/",
        assert: "assert/",
        http: "stream-http/",
        https: "https-browserify/",
        os: "os-browserify",
        url: "url",
        util: "util/",
      },
    },
    plugins: [react()]
})
