# gh-pages-with-nuxtjs
Demo project for how to create a github-page with Nuxt.js

# HowTo

## Prepare Github-Repository

1. Create a gh-pages branch
    ```bash
    git checkout --orphan gh-pages
    ```
1. Clean them
    ```bash
    git rm -rf .
    ```
1. Push them to remote repo
    ```bash
    git commit --all --allow-empty -m "gh-pages comming soon"
    git push -u origin gh-pages
    ```

## Initialise one folder which includes the gh-pages nuxt-project

1. (optional) install nuxt-cli
    ```bash
    sudo npm install -g npx
    ```
1. Create nuxt.js project
    ```bash
    npx create-nuxt-app gh-pages-demo
    mv gh-pages-demo gh-pages
    rm -rf gh-pages/.git
    ```
1. ... and purge them
    ```bash
    mv gh-pages-demo gh-pages
    rm -rf gh-pages/.git
    ```

## Change some settings for gh-pages purposes
Nuxt.js by default set the base url path to '/'. For the most projects its a good choise. But gh-pages will provide your page under the sub-directory named by your project name. So you have to tell nuxt.js that the base path is different. 

But if you are in development mode you WANT the url base path to '/'. For that reason we have to toggle it depends in which mode you are.

1. open **nuxt.config.js** 
1. add the following snippet above the *module.exports*-line
    ```javascript
    // only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
    const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
        router: {
            base: '/<your-repo-name-here>/'
        }
    } : {}
    ```
1. add the following line direct under the *module.exports*-line
    ```
    ...routerBase,
    ```
1. so thats the file looks like:
    ```javascript
    module.exports = {
        ...routerBase,

        mode: 'universal',
        ...
    }
    ```
1. to use the right base path in gh-page we have to toggle them in our npm-scripts
    1. open the **package.json** file
    1. change *build*-script to
        ```json
        "build": "DEPLOY_ENV=GH_PAGES nuxt build"
        ```
    1. change *generate*-script to
        ```json
        "generate": "DEPLOY_ENV=GH_PAGES nuxt generate"
        ```
    1. so thats the file looks like:
        ```json
        {
            ...
            "scripts": {
                "dev": "nuxt",
                "build": "DEPLOY_ENV=GH_PAGES nuxt build",
                "start": "nuxt start",
                "generate": "DEPLOY_ENV=GH_PAGES nuxt generate"
            },
            ...
        }
        ```

## Pre-Render the pages and deploy them github

1. Trigger PreRendering (generation of static html-content)
    ```bash
    cd gh-pages
    npm run generate
    ```
1. Now you have static content inside the dist-folder
    ```bash
    ls -la dist
    ```
1. To make it easy to override previous gh-pages version we add a helper script
    1. install dependency
        ```bash
        npm i --only=dev push-dir
        ```
    1. open the **package.json** file
    1. add the following line in *scripts*-section
        ```json
        "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
        ```
    1. so thats the file looks like:
        ```json
        {
            ...
            "scripts": {
                "dev": "nuxt",
                "build": "DEPLOY_ENV=GH_PAGES nuxt build",
                "start": "nuxt start",
                "generate": "DEPLOY_ENV=GH_PAGES nuxt generate",
                "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --allow-unclean"
            },
            ...
        }
        ```
1. Push the new version to github
    ```bash
    npm run deploy
    ```
1. Now you can find your gh-page under https://&lt;username&gt;.github.io/&lt;project-name&gt;/
    * For example: https://rainu.github.io/gh-pages-with-nuxtjs/

## (optional) make the app available as PWA

1. [Install nuxtjs-pwa module](https://pwa.nuxtjs.org/setup)
    ```bash
    cd gh-pages
    npm i @nuxtjs/pwa
    ```
1. enable module
    1. open **nuxt.config.js** 
    1. add the following line in *modules*-array
        ```
        '@nuxtjs/pwa'
        ```
    1. so thats the file looks like:
        ```javascript
        /*
        ** Nuxt.js modules
        */
        modules: [
            '@nuxtjs/pwa'
        ],
        ```
