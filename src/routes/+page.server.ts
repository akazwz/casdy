import redis from '$lib/redis';
import { redirect, type Actions, type RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const login = formData.get('login');
		await redis.sadd('logins', login);
		console.log(login);
		throw redirect(302, `/${login}`);
	}
};
