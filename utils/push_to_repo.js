const simpleGit = require('simple-git');
const fs = require('fs');

module.exports = async function pushToRepo(user, pass, repo){
    // Set up git
    const remote = `https://${ user }:${ pass }@${ repo }`;
    const dir = process.cwd() + '/template'
    const git = simpleGit({
        baseDir: dir,
        binary: 'git',
        maxConcurrentProcesses: 1
    });

    git.clean(simpleGit.CleanOptions.FORCE);
    await git.init()
    await git.addRemote('origin', remote)
    await git.add('./*')
    await git.commit('Initial commit')
    await git.push('origin', 'master')
    // remove .git folder
    fs.rmdir(dir + "/.git", { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
}
