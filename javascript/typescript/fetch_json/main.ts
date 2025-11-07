import { ApiResponse, Commit } from './types'; // <- importation depuis types.ts

async function fetchData(): Promise<void> {
  const response = await fetch('http://...');
  const data: ApiResponse = await response.json();

  const firstCommit: Commit = data.values[0];
  console.log(firstCommit.message);
}
