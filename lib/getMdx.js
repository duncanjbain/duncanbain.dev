import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import { bundleMDX } from 'mdx-bundler';

const MDX_PATH = 'content/blog';

export const getMdxByPath = async (mdxPath) => {
  const slug = path.basename(mdxPath).replace(path.extname(mdxPath), '');
  const source = fs.readFileSync(path.join(process.cwd(), mdxPath), 'utf8');

  const { code, frontmatter } = await bundleMDX(source);
  return {
    code,
    frontmatter: {
      ...frontmatter,
      slug,
    },
  };
};

export const getMdxBySlug = (slug) => {
  return getMdxByPath(path.join(MDX_PATH, `${slug}.mdx`));
};

export const getAllFrontMatters = async () => {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`]);
  const matters = await Promise.all(
    paths.map(async (filePath) => {
      const source = fs.readFileSync(filePath, 'utf8');
      const { frontmatter } = await bundleMDX(source);

      return {
        ...frontmatter,
        slug: path.basename(filePath).replace('.mdx', ''),
      };
    })
  );
  return matters
    .filter(Boolean)
    .filter((post) => post.isPublished)
    .sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime()
    );
};
