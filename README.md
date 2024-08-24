### Bootstrap is a popular front-end framework that provides a collection of CSS and JavaScript components for building responsive and mobile-first web applications. Integrating Bootstrap with Laravel, a powerful PHP web framework, can streamline the development process and enhance the user experience of your web applications. In this article, we’ll guide you through the steps to install and configure Bootstrap 5 with Laravel 9/10/11.

## Prerequisites
Before we begin, ensure that you have the following prerequisites installed on your system:

- Laravel 9/10/11 project set up
- Node.js and npm (Node Package Manager) installed

## Step 1: Install Bootstrap via npm

Open your terminal or command prompt, navigate to the root directory of your Laravel project, and run the following command to install Bootstrap 5:

```
npm install -D bootstrap@5.3.3
```

This command installs Bootstrap 5.3.3 as a development dependency for your project.

## Step 2: Install Sass

Since we will use Sass for styling, we need to install the Sass compiler. Run the following command:

```
npm install -D sass
```

## Step 3: Install Dependencies

After installing Bootstrap and Sass, you need to install the project’s remaining dependencies. Run the following command:

```
npm install
```

## Step 4: Configure Vite

Laravel 9/10/11 uses Vite as the default bundler for compiling assets. We need to configure Vite to include our Sass and JavaScript files.

1. Create a new Sass file named `app.scss` or whatever.scssin the `resources/sass` directory.
2. Open the `vite.config.js` file in the root directory of your project and update it with the following code:

```
npm install -D sass
```

## Open vite.config.js and add ``  'resources/sass/app.scss' `` in the input section

```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss', // Our new line you can change app.scss to whatever.scss
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
```

This configuration tells Vite to include the `app.scss` and `app.js` files during the build process.

## Step 5: Import Bootstrap

Open the `resources/js/app.js` file and import Bootstrap by adding the following line to it:

```
import 'bootstrap';
```

Paul Phillips: Not sure if this is specific to Laravel 11 but `resources/js/app.js already had import ‘./bootstrap’; which was initially confusing until I spotted the difference and ended up with:

```
import ‘bootstrap’; // Bootstrap Framework

import ‘./bootstrap’; // Laravel axios
```

From versions 5.7 to 8.x, the syntax was `require(‘./bootstrap’);`. Starting from version 9.x, the `app.js` file contains that line.

The file should now look like the one below.

```
import './bootstrap';
import 'bootstrap';
```


## 2. Open the `resources/sass/app.scss` file and import the Bootstrap Sass files by adding the following line at the top of the file:

```
@import 'bootstrap/scss/bootstrap';
```

## Step 6: Include Styles and Scripts in Your Layout

In your main layout file (e.g., `app.blade.php`), add the following line just before the closing `</head>` tag to include the compiled CSS and JavaScript files:

```
@vite(['resources/sass/app.scss', 'resources/js/app.js'])
```

## Step 7: Compile Assets

Finally, run the following commands to compile your assets:

```
npm run dev
```

This command will compile your Sass and JavaScript files, including the Bootstrap assets.

Congratulations! You have successfully installed and configured Bootstrap 5 with Laravel 9/10/11. You can now start using Bootstrap components and utilities in your Laravel application.

# Install vue js in laravel project

Introduction to Vue.js in Laravel
Vue.js is a JavaScript framework for building user interfaces.

While it’s flexible enough to be integrated into any web project (Rails, Symfony, WordPress, etc.), it’s one of the preferred choices of Laravel developers, especially when coupled to Inertia.js.

That being said, figuring out how to set up your bundling process while using a major JavaScript framework is insanely complicated.

Therefore, I decided to write this short guide that walks you through adding Vue.js to your Laravel project.

## Install Vue.js in Laravel via NPM
## First, add Vue and the plugin that will enable a seemless integration with Vite (the default bundler used by Laravel).

```
npm install vue @vitejs/plugin-vue
```

Configure Vite for Vue.js in Laravel
In the previous step, we added a crucial plugin that enables support for Vue in Vite. We now must make use of it.

In vite.config.js, make the following modifications:

```
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
})
```

Important: The alias from vue to vue.esm-bundler.js instructs Vite to use a version of Vue.js that also bundles the compiler which will allow us to write HTML instead of render() functions (thankfully!).

## Initialize Vue.js
Inside resources/js/app.js, initialize Vue by adding the following:

```
import { createApp } from 'vue'

const app = createApp()

app.mount('#app')
```

We import Vue and create a variable for the createApp() function.
Then, we instantiate Vue by calling the function and store it in a constant called app (you will see later why).
Finally, we mount our Vue.js application inside a #app element that we will create.
Now, do not forget to include your JavaScript using the @vite directive and create a <div> tag with an “app” ID in your HTML.

```
<!DOCTYPE html>
<html>
	<head>
		…
		
		@vite(['resources/js/app.js'])
	</head>
	<body>
		<div id="app">
			<!-- Vue.js components will be processed here. -->
		</div>
	</body>
</html>
```

## Make sure Vue.js is operational
## Create a component called Counter in resources/js/components/Counter.vue:

```
<script setup>
    import { ref } from 'vue'

    const count = ref(0)
</script>

<template>
    {{ count }}

    <button @click="count++">
        Add
    </button>
</template>
```

## Register Counter.vue to let Vue know of its existence:

```
import { createApp } from 'vue'
import Counter from './components/Counter.vue'

const app = createApp()

app.component('counter', Counter)

app.mount('#app')
```

### Then, call it in the div#app we set up earlier:

```
<div id="app">
    <counter />
</div>
```

### Compile your code
The only step left if to compile your code and preview the result in your browser.

Run the following command:

npm run dev
That’s all there is to it! Check your browser and it all should be working.

You’ve successfully added Vue.js to your Laravel project and you can now start having fun by building something amazing!


