Set up webpack/typescript to write webpage from scratch withouth using any JS framework/library

1. Install nodejs (this will also install npm)

2. Install typescript. npm install -g typescript

3. Initialise typescript inside your project. So go to project foler -> command -> tsc init. This will create tsconfig.json.
    Change target to es6, module -> es2020

4. Now create package.json file to manage dependecies. So to do that, command -> npm init. This creates package.json file that keeps track of our packages. 

5. To install dependecies, eg web-pack tools, command -> npm install/i webpack webpack-cli ts-loader -D (this means, these are dev dependecies, 
    which makes sense as we wouldn't want webpack js files on our live set). "ts-loader" will guide webpack to compile ts to js. Doing this also 
    updates package.json file. Remember this is not -g / global So will require package.json file before running this command inside the project folder.

6. We also need to install typescript locally(within the project foler) for webpack to work. Remember before we passed in -g flag to the command, 
    which will install typescript globally. So to install it again locally, command -> npm i typescript -D(rember live server doesn't need this, 
    as it only get's js compiled file anyway)

7. Create a folder called "src" where we will write our code, so the src code will always live here. Now, when the src code gets compiled we want it 
    to store in another folder so let's called it "public"/"dist", since it is for public and will uploaded to the server where our site runs.

8. All the ts src code goes into "src" folder, so let's create our first ts file called index.ts. And in the "public"/"dist", create our html file called "index.htm".
    By doing this, webpack will compile all the ts files from  "src" folder to the js bundle which will then be referenced by "index.htm" file. That's simple.
    So inside the index.html file, at the end of the body, add <script src="bundle.js"></script>

9. So now we need to tell webpack on how to bundle and compile, and where to output. To do that, let's create a webpack config file called, 
    "webpack.config.js" (it has to be this name so that webpack knows which config to load)

10. Inside the webpack.config.js let's define the configuration that webpack understands and export as an module, so it get run by the nodejs. 

        const path = require('path');  //this brings in files from nodejs that calcutes the current absolute path, and assign it to a const variable called 'path'.

        module.exports = { // export so that nodejs can run this file
            entry: './src/index.ts', // entry point, this is relative path.
            module:{
                rules:[ //rules that determines how the web-pack should compile ts to js
                    {
                        test: /\.ts/, // before compiling make sure this passes the test. So here, any files ending with .ts will get compiled into js
                        use: 'ts-loader', // use ts-loader to comiple ts to js
                        include: [path.resolve(__dirname, 'src')] // and only compile ts files within the src folder.
                    }
                ]
            },
            output:{
                filename : 'bundle.js', // this could be anything but let's give it a sense.
                path: path.resolve(__dirname, './public') // this is absolute path, so we need to use path.resolve(), adn __dirname is a global variable predefined by node
            }
        }

11. And lastly, define a command in package.json that will run webpack command, which will then comiple ts to js based on the webpack.config.js settings
    After defining that command, packages.json will look like this:

        {
            "name": "mysite",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "build-my-site": "webpack" // new guy here..... :-), so when we run npm run build-my-site(script name), it will run webpack 
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
                "ts-loader": "^8.0.17",
                "typescript": "^4.2.2",
                "webpack": "^5.24.2",
                "webpack-cli": "^4.5.0"
            }
        }

12. Now all we have to do is, run this command -> npm run build-my-site. This will create bundle.js file under the public folder. 

So, let now automactically build the ts files as soon as we save any ts file, so that we don't have to run build command again and again

1. Okay, let's get the dependecies! So command -> npm i webpack-dev-server -D (rember this is only for development so -D)

2. Now let's define a script command in the package.json again. So it would look like:

    {
        "name": "mysite",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build-my-site": "webpack",
            "serve-my-site" :"webpack serve" , 
            // New guy!!!!, this runs webpack dev server (which then runs webpack to build the ts files) which listens for any changes and run webpack again.
            // For webpack < 4 sei it to "webpack-dev-server" 
            // Now we don't have to run npm run build-my-site, as npm run serve-my-site will also do that before serving the browser. But if you just want to 
            // build the files, it can still be useful
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "ts-loader": "^8.0.17",
            "typescript": "^4.2.2",
            "webpack": "^5.24.2",
            "webpack-cli": "^4.5.0",
            "webpack-dev-server": "^3.11.2"
        }
    }

3. Run command npm run serve-my-site, and go to https://localhost:8080 to see the page.

That's it mate. Happy coding