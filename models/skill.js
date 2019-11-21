const skills = [
    {skill: 'Front-End Languages', achieved: true},
    {skill: 'Python', achieved: false},
    {skill: 'App Development', achieved: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};


function deleteOne(id) {
    skills.splice(id, 1);
};

function getOne(id) {
    return skills[id];
};

function create(skill) {
    skills.push(skill);
};

function getAll() {
    return skills;
};