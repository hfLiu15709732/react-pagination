import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
interface Config {
	plugins: PluginOption[][];
	alias: {
		"@": string;
	};
}

// https://vitejs.dev/config/
export default defineConfig<Config>({
	plugins: [react()],
	alias: {
		"@": "/src",
	},
});
