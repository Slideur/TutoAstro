import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: "Astro Learner | Blog",
		description: "Mon voyage apprentissage Astro",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
	});
}
