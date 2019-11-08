const checkCompletion = arr => {
    const result = arr.map(obj => {
        return {
            ...obj,
            project_completed: !!Number(obj.project_completed)
        };
    });
    return result;
};

const checkTasksCompletion = arr => {
    const result = arr.map(obj => {
        return {
            ...obj,
            task_completed: !!Number(obj.task_completed)
        };
    });
    return result;
};

module.exports = { checkCompletion, checkTasksCompletion };