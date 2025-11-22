/**
 * vite.config.js (ESM)
 *
 * Переписан в ESM чтобы устранить предупреждения ESLint ("require", "module", "__dirname" не определены)
 * и соблюсти правило biome о явном импорте Node.js builtin модулей через node: протокол.
 *
 * ВАЖНО: для использования ESM в файлах с расширением .js у вас должен быть
 * "type": "module" в package.json — либо переименуйте файл в vite.config.mjs.
 */

import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getHtmlInputs() {
	const pagesDir = resolve(__dirname, "src", "pages");
	const entries = { index: resolve(__dirname, "index.html") };

	if (fs.existsSync(pagesDir)) {
		const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".html"));
		for (const file of files) {
			const name = file.replace(/\.html$/, "");
			// avoid clashing with root 'index' key
			entries[name] = resolve(pagesDir, file);
		}
	}

	return entries;
}

export default defineConfig({
	// Используем относительный base — удобно для локального просмотра и GitHub Pages.
	// Если публикуете в репозитории с путём, замените на '/repo-name/'.
	base: "/linters-and-validators/",

	publicDir: "public",

	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"~": resolve(__dirname, "src"),
		},
	},

	server: {
		port: 3000,
		open: false,
		strictPort: false,
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/abstracts/_all.scss";`,
			},
		},
	},

	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: true,
		rollupOptions: {
			input: getHtmlInputs(),
			output: {
				entryFileNames: "assets/[name]-[hash].js",
				chunkFileNames: "assets/[name]-[hash].js",
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || "";
					if (/\.(png|jpe?g|svg|gif|webp|ico)$/.test(name))
						return "assets/images/[name]-[hash][extname]";
					if (/\.(ttf|woff2?|eot|otf)$/.test(name))
						return "assets/fonts/[name]-[hash][extname]";
					if (/\.css$/.test(name)) return "assets/[name]-[hash][extname]";
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},
});
