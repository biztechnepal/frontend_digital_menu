const ROOT = "/"
const BASE_URL = "/menu"

export const PATH_DASHBOARD = {
  root: ROOT,
  home: {
    menu: path(ROOT, '/menu'),
    company: path(ROOT, '/company'),
    error: path(ROOT, '/error'),
  }
}

function path(root, sublink) {
  return `${root}${sublink}`;
}
