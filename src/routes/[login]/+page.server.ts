/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlWithAuth } from '$lib/github';
import * as emmoji from 'node-emoji';
import type { PageServerLoad } from './$types';

export type User = {
	avatarUrl: string;
	login: string;
	name: string;
	bio: string;
	company: string;
	email: string;
	location: string;
	status: UserStatus;
	twitterUsername: string;
	url: string;
	isHireable: boolean;
};

export type UserStatus = {
	emoji: string;
	message: string;
};

export const load: PageServerLoad = async ({ params }) => {
	const login = params.login as string;
	const data: any = await graphqlWithAuth(`
        {
            user(login: "${login}") {
				avatarUrl
				login
				name
				bio
				company
				email
				location
				status {
					emoji
					message
				}
				twitterUsername
				url
				isHireable
            }
          }
        `);

	const user = data.user as User;
	user.status.emoji = emmoji.get(user.status.emoji) || user.status.emoji;
	const res = await fetch(user.avatarUrl);
	const contentType = res.headers.get('content-type');
	const avatarArrayBuffer = await res.arrayBuffer();
	const avatar = `data:${contentType};base64,${Buffer.from(avatarArrayBuffer).toString('base64')}`;
	user.avatarUrl = avatar;
	return {
		user: user
	};
};
