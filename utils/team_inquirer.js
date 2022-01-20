const axios = require("axios");
const inquirer = require("inquirer");
module.exports = async function teamInquirer(answers){
    let selected_teams;
    let teams
    try{
        teams = await axios.get(`https://api.github.com/orgs/${answers.classroom_name}/teams`,{
            headers: {
                'Authorization': `bearer ${answers.token}`
            }
        })
    }catch(e){
        console.log(e)
    }

    try{
        selected_teams = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'teams',
                message: 'Select the teams that you would like to initialize a repo with',
                choices: teams.data.map(team => team.slug),
            },

        ]);
    }catch (e){
        console.log(e)
    }
    return selected_teams;
}
