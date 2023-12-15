import type { Handle } from '@sveltejs/kit';
export const handle: Handle = ({ event, resolve }) => {
	console.log(event.url.pathname);
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', 'en') });
};
