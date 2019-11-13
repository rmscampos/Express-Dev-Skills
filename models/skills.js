const skills = [
    {skill: 'Front-End Languages', done: true},
    {skill: 'Python', done: false},
    {skill: 'App Development', done: false}
];

module.exports = {
    getAll,
    getOne,
};

function getOne(id) {
    return skills [id];
};

function getAll() {
    return skills;
};