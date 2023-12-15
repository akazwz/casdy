/* eslint-disable @typescript-eslint/no-explicit-any */
import redis from '$lib/redis';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export type NavLink = {
	name: string;
	href: string;
	active: boolean;
};

export const load: LayoutServerLoad = async ({ params, url }) => {
	const login = params.login as string;
	const isValid = await redis.sismember('logins', login);
	if (isValid === 0) {
		throw redirect(302, '/');
	}
	const pathname = url.pathname;
	const navLinks: NavLink[] = [
		{
			name: 'Home',
			href: `/${login}`,
			active: pathname === `/${login}`
		},
		{
			name: 'Projects',
			href: `/${login}/projects`,
			active: pathname === `/${login}/projects`
		},
		{
			name: 'About',
			href: `/${login}/about`,
			active: pathname === `/${login}/about`
		}
	];

	return {
		navLinks: navLinks
	};
};
