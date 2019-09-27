
fifth or so version of my art blog, in gatsby

learning


Content directory will contain projects, such as
`2018-04-11-spring-flowers-exercise/` that has an `index.md` file to
create the body of the entry. Media files (mainly images, I expect)
goes into the subdirectory `_media/`, that is ignored so that large
image files will not end up in the github repo.

**Update**: media files can reside on AWS S3, and using a [plugin](https://github.com/jessestuart/gatsby-source-s3-image) can be accessed in the gatsby repo with graphql - yay :tada: 
- see [Issue #2](https://github.com/tamouse/artblog/issues/2)

run `yarn start` to fire up gatsby in development mode.

run `yarn run build` to create the production build in `public/`.

run `yarn run deploy` to push up the site to S3; it first runs `yarn
run build` to ensure the site is built.
