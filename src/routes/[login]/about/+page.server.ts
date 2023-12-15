/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlWithAuth, octokit } from '$lib/github';
import type { PageServerLoad } from './$types';

export type TreeEntry = {
	name: string;
	extension: string;
	type: string;
	size: number;
	lineCount: number;
	createdAt: string;
	updatedAt: string;
};

export const load: PageServerLoad = async ({ params }) => {
	try {
		const login = params.login as string;
		const repo = login;
		const data: any = await graphqlWithAuth(`
			{
				repository(owner: "${login}", name: "${repo}") {
				   object(expression: "main:README.md") {
					... on Blob {
					  text
					}
				   }
				}
			}
			`);

		const text = data.repository.object.text;
		const result = await octokit.request('POST /markdown', {
			text: text
		});

		return {
			content: result.data
		};
	} catch (e) {
		return {
			content: 'I am mysterious'
		};
	}
};
