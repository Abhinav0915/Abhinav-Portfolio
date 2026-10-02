/** "Source on GitHub" for a repository URL, "GitHub profile" for a bare profile link. */
export function githubLabel(url: string) {
  const path = new URL(url).pathname.split("/").filter(Boolean);
  return path.length >= 2 ? "Source on GitHub" : "GitHub profile";
}
