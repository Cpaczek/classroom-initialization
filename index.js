const pushToRepo = require("./utils/push_to_repo");
const teamInquirer = require("./utils/team_inquirer");
const starterInquirer = require("./utils/starter_inquirer");
const createRepo = require("./utils/create_repo");
const teamNumberInquirer = require("./utils/team_number_inquirer");
const createRepoName = require("./utils/create_repo_name");

async function index() {
    let answers
    answers = await starterInquirer();
    let selected_teams;
    selected_teams = await teamInquirer(answers)
    let numbered_teams = await teamNumberInquirer(selected_teams.teams);
    for (let team of numbered_teams){
        let repo_name = createRepoName(answers.repo_name_template, team.team_number, team.team_section, answers.semester);
        console.log(repo_name)
        await createRepo(repo_name, team.team_name, answers.token, answers.classroom_name)
        await pushToRepo(answers.username, answers.token, `github.com/${answers.classroom_name}/${repo_name}.git`)
    }


    return 0;
}

index().then(r => console.log(r)).catch(e => console.log(e));




