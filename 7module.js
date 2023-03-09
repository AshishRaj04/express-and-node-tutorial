//npm is a code store . node package manager - npm
//npm enables us to do three things
// 1. reuse our own code in other projects
// 2. use code writeen by other developers
// 3. share our own solution with other developers as well
//resuable code is a package -> folder of js code . modules and dependencies are other names

//npm --version . to check version of npm
//npm - global command ,  comes with node

//local dependencies - use it only in this particular project
//npm i <package name>

//global dependencies - use  it in any project
//npm install -g <package name> or npm i -g <package name>

// package.json is a manifest file that stores important info about projects/package
//manual approach creates package.json in the root , creat properties etc
//npm init (step by step ,press enter to skip)
//npm init -y (everything default)

//we don't add node modules folder to github because its size will be very large . We put this folder in .gitignore file .
// node modules folder will be created when you install any npm package .
//after pushing the project to git hub ,  if someone clone it and open it in their editor and run the command npm install
//the required node modules will get installed with all the npm packages that are there in the package.json folder .
//that is another benifit of package.json folder . because in dependencies section it has all the used packages written .
