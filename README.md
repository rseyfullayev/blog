# Marginalia

A dark, structured personal blog built for GitHub Pages and Jekyll. Posts are ordinary Markdown files; the reading shelf is managed in one small data file.

## Write a new post

Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```md
---
layout: post
title: Your title
category: Field note
excerpt: A short description for the notes index.
---

Write your Markdown here.
```

## Add a book and cover

1. Upload a cover image to `assets/books/`.
2. Add an entry to `_data/books.yml` and set `cover` to its path, for example `"/assets/books/the-book.jpg"`.
3. Write the title, author, shelf status, and a short hover note.

The GitHub Pages configuration uses the `/blog` path automatically.
