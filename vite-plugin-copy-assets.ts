import type { Plugin } from 'vite';
import { copyFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

/**
 * Vite plugin that copies attached_assets to the build output directory
 */
export function copyAssetsPlugin(): Plugin {
  return {
    name: 'vite-plugin-copy-assets',
    async writeBundle() {
      const sourceDir = path.resolve(process.cwd(), 'attached_assets');
      const targetDir = path.resolve(process.cwd(), 'dist/public/attached_assets');

      if (!existsSync(sourceDir)) {
        console.warn('[copy-assets] Source directory not found:', sourceDir);
        return;
      }

      // Create target directory
      await mkdir(targetDir, { recursive: true });

      // Copy all files from attached_assets
      const fs = await import('fs/promises');
      const files = await fs.readdir(sourceDir);

      for (const file of files) {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
          await copyFile(sourcePath, targetPath);
          console.log(`[copy-assets] Copied: ${file}`);
        }
      }
    },
  };
}
