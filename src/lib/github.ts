/* eslint-disable @typescript-eslint/no-explicit-any */
import { GITHUB_ACCESS_TOKEN } from '$env/static/private';
import { graphql } from '@octokit/graphql';
import { Octokit } from '@octokit/rest';

export const graphqlWithAuth = graphql.defaults({
	headers: {
		authorization: `bearer ${GITHUB_ACCESS_TOKEN}`
	}
});

export const octokit = new Octokit({
	auth: GITHUB_ACCESS_TOKEN
});
