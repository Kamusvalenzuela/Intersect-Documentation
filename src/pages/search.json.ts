import { getCollection } from 'astro:content';
import { getLangCode } from '../i18n';
import { SITE } from '../site';
import { resolveSlug } from '../slugs';
import {
	VersionKey,
	VersionedLookup,
	getVersion
} from '../versioning';

export type IndexedDocument = {
	// body: string;
	description?: string;
	// dir: string;
	pathname: string;
	// lang: string;
	ogLocale: string | undefined;
	title: string;
};

// export type SearchIndex = Record<;

// function index(entry: CollectionEntry<'docs'>) {

// }

export async function get() {
	const docs = await getCollection('docs');

	const docsByLocale = docs
		.reduce((versionedLocaleMap, {
			body,
			data: {
				description,
				// lang,
				ogLocale,
				title
			},
			id,
			slug
		}) => {
			const langCode = getLangCode(id);
			const version: VersionKey = getVersion(id) ?? 'latest';
			const site = SITE[langCode];

			if (site.disabled === true) {
				return versionedLocaleMap;
			}

			const trimmedBody = body?.trim();
			if (!trimmedBody) {
				return versionedLocaleMap;
			}

			const doc: IndexedDocument = {
				// body: trimmedBody,
				// lang,
				ogLocale,
				pathname: resolveSlug(langCode, slug).slice(langCode.length + 1),
				title
			};

			if (description && description !== site.description) {
				doc.description = description;
			}

			if (!(version in versionedLocaleMap)) {
				versionedLocaleMap[version] = {} as any;
			}

			const localeMap = versionedLocaleMap[version];

			if (!localeMap) {
				throw new Error('Unreachable! Theoretically...');
			}

			if (!(langCode in localeMap)) {
				localeMap[langCode] = [];
			}

			localeMap[langCode].push(doc);

			return versionedLocaleMap;
		}, <VersionedLookup<IndexedDocument[]>>{});

	return { body: JSON.stringify(docsByLocale) };
}
