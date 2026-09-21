function simplifyPath(path: string): string {
  if (path.length <= 1) return path;

  const pathSection = path.split("/");
  const res = [];

  for (let i = 0; i < pathSection.length; i++) {
    if (pathSection[i].length < 1) continue;

    switch (pathSection[i]) {
      case ".":
        continue;
      case "..":
        res.pop();
        continue;
      default:
        res.push(pathSection[i]);
    }
  }

  return `/${res.join("/")}`;
}

export { simplifyPath };
