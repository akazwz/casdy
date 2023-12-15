/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlWithAuth } from '$lib/github';
import type { PageServerLoad } from './$types';

export type Repository = {
	name: string;
	nameWithOwner: string;
	url: string;
	description: string;
	homepageUrl: string;
	stargazerCount: number;
	forkCount: number;
	primaryLanguage: Language;
	owner: RepositoryOwner;
};

export type Language = {
	color: string;
	id: string;
	name: string;
};

export type RepositoryOwner = {
	login: string;
};

export const load: PageServerLoad = async ({ params }) => {
	try {
		const login = params.login;
		const data = await graphqlWithAuth(`
          {
              user(login: "${login}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      nameWithOwner
                      url
                      description
                      homepageUrl
                      stargazerCount
                      forkCount
                      primaryLanguage {
                          color
                          id
                          name
                      }
                      owner {
                          login
                      }
                    }
                  }
                }
              }
            }
          `);

		const resp = (data as any).user.pinnedItems.nodes as Repository[];
		return {
			repositories: resp
		};
	} catch (e) {
		console.log(e);
		return {
			repositories: []
		};
	}
};
