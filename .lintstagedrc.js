module.exports = {
  'packages/src/**/*': ['prettier --write --ignore-unknown', 'git add'],
  'packages/src/**/*.(j|t)s?(x)': 'eslint --cache --fix',
};
