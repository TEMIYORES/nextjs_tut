import Link from "next/link";
import React from "react";
async function fetchDirs(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/TEMIYORES/${name}/contents`
  );
  const repo = await response.json();
  return repo;
}
const RepoDirs = async ({ name }) => {
  const contents = await fetchDirs(name);
  const dirs = contents.filter((content) => content.type == "dir");
  return (
    <>
      <h3>Directories</h3>
      <ul className="mx-5">
        {dirs.map((dir) => {
          return (
            <li key={dir.path}>
              <Link href={`/code/repo/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RepoDirs;
