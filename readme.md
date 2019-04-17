# Travis CI Template for a NodeJS project running on Docker deployable to AWS Beanstalk, Heroku and DockerHub

It's just a dummy Express Server that is meant to show how we can deploy an app built on top of docker, using Travis CI

## Clone and Install the dependencies
```
git clone  git@github.com:infonl/travis-docker-nodejs.git
```

## Link Travis CI with your Github Repo

* Go to https://travis-ci.org, and sign up with Github.
* You'll find a list of all your repositories, check the one you want to enable TravisCI on
* And you're good to go.

## Edit the .travis.yml file

In this file is where all the magic happens;
* You define on what branches you want to make Travis listen on using the `Branches` property.

* Using the `Install` property you define the things you want to run/make ready, before you start your Test and build phases.

* With the `Script` property, You define what you wanna run before deploying to the adequate environment, in this example where running tests that insure our API works well.

* The `Deploy` prop serves for defining where to deploy our project when everything has been ran correctly, we notice we have 3 entries, one for `elasticbeanstalk`, `heroku` and `dockerhub`.

* Each deployment is tied to a `Branch`, where saying to travis if the merge is occuring on a branch X then trigger the adequat X deployment.


## Environment Variables

You'll notice that you find some variables called like `$IMAGE_NAME`, those are defined on the Travis CI page, hidden variables that we want to keep separate from our code and have them secretly stored from others.

You can add Environment variables on travis:

```
Travis CI dashboard > Select your Repo > Click on "More Options" > Settings
```

## To Test

To test just create the environment variables on Travis CI dashboard as explained above and make some changes to the branch you wanna see deploying.

## Enjoy an easy working Pipeline.

### Author
**Abdelghafour Rakhma** - *Software Engineer at Info.nl* - [Github profile](https://github.com/Sletheren)
