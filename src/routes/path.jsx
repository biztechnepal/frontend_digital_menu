const ROOT = "/"
const BASE_URL = "/menu"

export const PATH_DASHBOARD = {
  root: ROOT,
  home: {
    menu: path(ROOT, '/menu')
  }
}

function path(root, sublink) {
  return `${root}${sublink}`;
}
