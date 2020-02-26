## How to do it
Hi Angelswing team members, just in case it's your first time writing the post, I will write a short intro to how wto do it.

1. install nvm 

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

# after install, put this into ~/.profile or your favorite shell's config

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

2. install node lts (right now 12)

```bash
nvm install --lts

# check: should be 12.x.x
node --version
```

3. Write your post 

Just make another .md in `/content` and fill out the 'front matter' section:

```
title: "멍청한 리액트 똑똑하게 만들기"
cover: ""
category: "frontend"
date: "2020-02-23"
author: "Hyeokjoo"
slug: "멍청한-리액트-똑똑하게-만들기" <-- This is going to be appended to the url  -->
tags:
    - react
    - performance
    - optimization
```

And then write your post using markdown.

4. Deploy
now, just run 

```
npm run build:gh
```

Then this is just going to deploy and update [angelswing-team.github.io](https://angelswing-team.github.io) for you. Check it out.

## Misc notes

- Personally I think it's ok to just post things in English as well. I actually wanted to install i18n for the blog as well, but I wanted to deploy the blog as soon as possible.
- You are deploying from `dev` branch. Don't touch anything in `master` branch, because `master` branch is just used for the hosting of the website.
