import { UPSTASH_TOKEN, UPSTASH_URL } from '$env/static/private';
import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: UPSTASH_URL,
	token: UPSTASH_TOKEN
});

export default redis;
