/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlWithAuth } from '$lib/github';
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

export const load: PageServerLoad = async () => {
	const login = 'akazwz';
	const repo = 'portfolio';
	const data: any = await graphqlWithAuth(`
        {
            repository(owner: "${login}", name: "${repo}") {
               object(expression: "main:blog") {
                ... on Tree {
                  entries {
                    name
                    extension
                    type
                    size
                    lineCount
                    object {
                        commitUrl
                    }
                  }
                }
               }
            }
        }
        `);
	const markdownFiles = data.repository.object.entries.filter(
		(entry: any) => entry.type === 'blob' && entry.extension === '.md'
	) as TreeEntry[];

	// const withTime = markdownFiles.map(async(file) => {
	//     const result = await octokit.rest.repos.listCommits({
	//         owner: login,
	//         repo: repo,
	//         path: `blog/${file.name}`
	//     })
	//     const updatedAtCommit = result.data.shift()
	//     const createdAtCommit = result.data.pop()
	//     if (updatedAtCommit) {
	//         const updatedAt = updatedAtCommit.commit.committer?.date
	//         file.updatedAt = updatedAt || file.updatedAt
	//     }
	//     if (createdAtCommit) {
	//         const createdAt = createdAtCommit.commit.committer?.date
	//         file.createdAt = createdAt || file.createdAt
	//     }
	//     if (!file.createdAt) {
	//         file.createdAt = file.updatedAt
	//     }
	//     if (!file.updatedAt) {
	//         file.updatedAt = file.createdAt
	//     }
	//     return file
	// })

	return {
		blogs: markdownFiles
	};
};
