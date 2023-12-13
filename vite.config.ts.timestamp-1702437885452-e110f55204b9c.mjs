// vite.config.ts
import { defineConfig } from "file:///home/onkar/proj/inspect-copy/node_modules/vite/dist/node/index.js";
import { crx } from "file:///home/onkar/proj/inspect-copy/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import { svelte } from "file:///home/onkar/proj/inspect-copy/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import path from "path";
import sveltePreprocess from "file:///home/onkar/proj/inspect-copy/node_modules/svelte-preprocess/dist/index.js";

// src/manifest.ts
import { defineManifest } from "file:///home/onkar/proj/inspect-copy/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// package.json
var package_default = {
  name: "inspect-copy",
  version: "0.0.0",
  author: "Omkar76",
  description: "",
  type: "module",
  license: "MIT",
  keywords: [
    "chrome-extension",
    "svelte",
    "vite",
    "create-chrome-ext"
  ],
  engines: {
    node: ">=14.18.0"
  },
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
    fmt: "prettier --write '**/*.{svelte,ts,json,css,scss,md}'"
  },
  dependencies: {},
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.19",
    "@types/chrome": "^0.0.246",
    "@sveltejs/vite-plugin-svelte": "2.4.6",
    prettier: "^3.0.3",
    "prettier-plugin-svelte": "^3.0.3",
    svelte: "^4.2.1",
    "svelte-preprocess": "^5.0.4",
    tslib: "^2.6.2",
    typescript: "^5.2.2",
    vite: "^4.4.11"
  }
};

// src/manifest.ts
var manifest_default = defineManifest({
  name: package_default.name,
  description: package_default.description,
  version: package_default.version,
  manifest_version: 3,
  icons: {
    16: "img/logo-16.png",
    32: "img/logo-34.png",
    48: "img/logo-48.png",
    128: "img/logo-128.png"
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png"
  },
  options_page: "options.html",
  devtools_page: "devtools.html",
  background: {
    service_worker: "src/background/index.ts",
    type: "module"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*"],
      js: ["src/contentScript/index.ts"]
    }
  ],
  side_panel: {
    default_path: "sidepanel.html"
  },
  web_accessible_resources: [
    {
      resources: ["img/logo-16.png", "img/logo-34.png", "img/logo-48.png", "img/logo-128.png"],
      matches: []
    }
  ],
  permissions: ["sidePanel", "storage", "clipboardWrite"],
  chrome_url_overrides: {
    newtab: "newtab.html"
  }
});

// vite.config.ts
var __vite_injected_original_dirname = "/home/onkar/proj/inspect-copy";
var vite_config_default = defineConfig(({ mode }) => {
  const production = mode === "production";
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [
      crx({ manifest: manifest_default }),
      svelte({
        compilerOptions: {
          dev: !production
        },
        preprocess: sveltePreprocess()
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL29ua2FyL3Byb2ovaW5zcGVjdC1jb3B5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9vbmthci9wcm9qL2luc3BlY3QtY29weS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9vbmthci9wcm9qL2luc3BlY3QtY29weS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzdmVsdGVQcmVwcm9jZXNzIGZyb20gJ3N2ZWx0ZS1wcmVwcm9jZXNzJ1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4vc3JjL21hbmlmZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3Rpb24gPSBtb2RlID09PSAncHJvZHVjdGlvbidcblxuICByZXR1cm4ge1xuICAgIGJ1aWxkOiB7XG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICAgIG91dERpcjogJ2J1aWxkJyxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvY2h1bmstW2hhc2hdLmpzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBjcngoeyBtYW5pZmVzdCB9KSxcbiAgICAgIHN2ZWx0ZSh7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGRldjogIXByb2R1Y3Rpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHByZXByb2Nlc3M6IHN2ZWx0ZVByZXByb2Nlc3MoKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL29ua2FyL3Byb2ovaW5zcGVjdC1jb3B5L3NyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvb25rYXIvcHJvai9pbnNwZWN0LWNvcHkvc3JjL21hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL29ua2FyL3Byb2ovaW5zcGVjdC1jb3B5L3NyYy9tYW5pZmVzdC50c1wiO2ltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IHBhY2thZ2VEYXRhIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lTWFuaWZlc3Qoe1xuICBuYW1lOiBwYWNrYWdlRGF0YS5uYW1lLFxuICBkZXNjcmlwdGlvbjogcGFja2FnZURhdGEuZGVzY3JpcHRpb24sXG4gIHZlcnNpb246IHBhY2thZ2VEYXRhLnZlcnNpb24sXG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIGljb25zOiB7XG4gICAgMTY6ICdpbWcvbG9nby0xNi5wbmcnLFxuICAgIDMyOiAnaW1nL2xvZ28tMzQucG5nJyxcbiAgICA0ODogJ2ltZy9sb2dvLTQ4LnBuZycsXG4gICAgMTI4OiAnaW1nL2xvZ28tMTI4LnBuZycsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGRlZmF1bHRfcG9wdXA6ICdwb3B1cC5odG1sJyxcbiAgICBkZWZhdWx0X2ljb246ICdpbWcvbG9nby00OC5wbmcnLFxuICB9LFxuICBvcHRpb25zX3BhZ2U6ICdvcHRpb25zLmh0bWwnLFxuICBkZXZ0b29sc19wYWdlOiAnZGV2dG9vbHMuaHRtbCcsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBzZXJ2aWNlX3dvcmtlcjogJ3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzJyxcbiAgICB0eXBlOiAnbW9kdWxlJyxcbiAgfSxcbiAgY29udGVudF9zY3JpcHRzOiBbXG4gICAge1xuICAgICAgbWF0Y2hlczogWydodHRwOi8vKi8qJywgJ2h0dHBzOi8vKi8qJ10sXG4gICAgICBqczogWydzcmMvY29udGVudFNjcmlwdC9pbmRleC50cyddLFxuICAgIH0sXG4gIF0sXG4gIHNpZGVfcGFuZWw6IHtcbiAgICBkZWZhdWx0X3BhdGg6ICdzaWRlcGFuZWwuaHRtbCcsXG4gIH0sXG4gIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xuICAgIHtcbiAgICAgIHJlc291cmNlczogWydpbWcvbG9nby0xNi5wbmcnLCAnaW1nL2xvZ28tMzQucG5nJywgJ2ltZy9sb2dvLTQ4LnBuZycsICdpbWcvbG9nby0xMjgucG5nJ10sXG4gICAgICBtYXRjaGVzOiBbXSxcbiAgICB9LFxuICBdLFxuICBwZXJtaXNzaW9uczogWydzaWRlUGFuZWwnLCAnc3RvcmFnZScsICdjbGlwYm9hcmRXcml0ZSddLFxuICBjaHJvbWVfdXJsX292ZXJyaWRlczoge1xuICAgIG5ld3RhYjogJ25ld3RhYi5odG1sJyxcbiAgfSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJpbnNwZWN0LWNvcHlcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgXCJhdXRob3JcIjogXCJPbWthcjc2XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImNocm9tZS1leHRlbnNpb25cIixcbiAgICBcInN2ZWx0ZVwiLFxuICAgIFwidml0ZVwiLFxuICAgIFwiY3JlYXRlLWNocm9tZS1leHRcIlxuICBdLFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MTQuMTguMFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgJyoqLyoue3N2ZWx0ZSx0cyxqc29uLGNzcyxzY3NzLG1kfSdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI6IFwiXjIuMC4wLWJldGEuMTlcIixcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjI0NlwiLFxuICAgIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiOiBcIjIuNC42XCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjAuM1wiLFxuICAgIFwicHJldHRpZXItcGx1Z2luLXN2ZWx0ZVwiOiBcIl4zLjAuM1wiLFxuICAgIFwic3ZlbHRlXCI6IFwiXjQuMi4xXCIsXG4gICAgXCJzdmVsdGUtcHJlcHJvY2Vzc1wiOiBcIl41LjAuNFwiLFxuICAgIFwidHNsaWJcIjogXCJeMi42LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4yLjJcIixcbiAgICBcInZpdGVcIjogXCJeNC40LjExXCJcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxv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
