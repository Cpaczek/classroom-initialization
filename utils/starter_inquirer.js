const inquirer = require("inquirer");
module.exports = async function starterInquirer(){
    let answers
    try{
        answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'token',
                message: 'Enter your Github Token:',
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter your Github Username:',
            },
            {
                type:'input',
                name:'semester',
                message:'Enter the semester name:',
                default: 'sp22'
            },
            {
                type:'input',
                name:'section',
                message:'Enter the semester name:',
                default: '01',
            },
            {
                type: 'input',
                name: "classroom_name",
                message: 'Name of Github Classroom Org:',
                default: 'CSC-648-SFSU'
            },
            {
                type: 'input',
                name: 'repo_name_template',
                message: 'Enter the name of the repository template',
                default: 'csc648-%semester%-%section%-team%increment%',
            },
            {
                type: 'input',
                name: 'template_repo',
                message: 'Enter the name of the repository template',
                default: 'csc648-%semester%-%section%-team%number%',
            },

        ]);
    }catch (e){
        console.log(e)
    }
    return answers;
}
