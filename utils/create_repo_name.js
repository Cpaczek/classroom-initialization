module.exports = function createRepoName(repoTemplate, teamNumber, section, semester) {
  //csc648-%semester%-%section%-team%number%
  //prepend a 0 to section if it is less than 10
  let formattedSection = parseInt(section) < 10 ? `0${section}` : section;
  let formattedTeamNumber = parseInt(teamNumber) < 10 ? `0${section}` : section;
  //replace the placeholders with the actual values
  let replaceNumber = repoTemplate.replace("%number%", formattedTeamNumber);
  let replaceSection = replaceNumber.replace("%section%", formattedSection);
  let replaceSemester = replaceSection.replace("%semester%", semester);
  return replaceSemester;
};
