// watch mode
// to compile typescript file automatically use the below command
//tsc filename.ts -w
// this only words for single file typically not applicable for larger projects

// for large files
// tsc --init it will gnereate the typescropt config json file. So navigate to project and run tsc -w to compile all typrscript files

//tsconfig.json
// ADDING "exlude" attay will not compile those files. By default node_modules will be excluded
// additionally to exclude all files in all folders that end with .dev.ts we can write like "**/*.dev.ts"

//setting a compilation target
//you can set typescript to run in all browsers
//target: es5 indicates it runs in all browsers that supports es5 eventhough we use let and const in typescript
// you can see the compiled js file holds var which is es5 format

//typescript core libs
//so how typescript knows all browser methods queryselector and document object
// so it's based on libs[] in tsconfig, if it is not set it depends on target.in target we have set es6 so it
//includes all the functionalities available in es6

//sourcemaps
//helps debugging
// if you want to see ts files in browser debugging sources we can set this to true
//it will generate a map file.

//outdir
//the compiled js files always gets stored in the same place where ts files are created
// to change that we can enable outdir and specify folder name where our compiled js files has to move

//stop emiiting files on errpr
//in tsconfig we have new option "noEmitOnError"
// eventhough we have error on ts file when we compile it generates js file. to stop it we can set this to true

//strict
//no
// NoImplicitAny - It makes clear about the parameters and value types we use in our code

//nounusedLocals - throws error if value is declared and not used - inside a function
//nounusedParams - for function parameters used.
//noImplicitReturns - function has to return something
//