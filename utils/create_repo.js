//require axios
const axios = require('axios');

module.exports = async function createRepo(repo_name, team_name, token, org) {

    let teams
    try{
        teams = await axios.get(`https://api.github.com/orgs/${org}/teams`,{
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
    }catch(e){
        console.log(e)
    }
    let team_id = null;
    for (let team of teams.data){
        if(team.slug === team_name){
            team_id = team.id
            break;
        }
    }
    if(team_id === null){
        console.log(`Team ${team_name} not found`)
        return
    }
    let repo = await axios.post(`https://api.github.com/orgs/${org}/repos`, {
        name: repo_name,
        team_id: team_id,
        private: true
    }, {
        headers: {
            'Authorization': `token ${token}`
        }
    });
    console.log(repo)
}
