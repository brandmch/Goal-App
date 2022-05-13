const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
};

const postGoals = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
};

const putGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
};

const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
};


module.exports = { getGoals, postGoals, putGoals, deleteGoals } 