const inquirer = require("inquirer");
module.exports = async function teamNumberInquirer(selected_teams){
    let numbered_teams = [];
    let formatted_teams = [];
    let temp_num;
    try{
        for(let i = 0; i < selected_teams.length; i++){
            temp_num = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'number',
                    message: 'Enter Team Number for ' + selected_teams[i] + ':',
                },
                {
                    type: 'input',
                    name: 'section',
                    message: 'Enter Team Section for ' + selected_teams[i] + ':',
                },


            ]);
            numbered_teams.push({
                number: temp_num.number,
                section: temp_num.section,
            });
        }
    }catch (e){
        console.log(e)
    }
    for(let i = 0; i < numbered_teams.length; i++){
        formatted_teams.push({
            team_number: numbered_teams[i].number,
            team_section: numbered_teams[i].section,
            team_name: selected_teams[i]
        })
    }
    return formatted_teams;
}
