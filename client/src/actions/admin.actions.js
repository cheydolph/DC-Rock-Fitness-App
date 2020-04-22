import axios from 'axios';
import moment from 'moment';

export const getAllClients = () => {
    return fetch('/admin/clients', { method: 'GET' })
        .then(response => {
            return response.json()
        }).catch(err => {
            console.log(err);
        });
}

export async function createWorkout(workout) {
    // Create exercise entries for all exercises
    // and populate workout object with their ids
    // TODO: Make this nicer with insertMany()
    var exerciseIds = [];
    for (let exercise of workout.exercises) {
        if (exercise.hasOwnProperty('isPast')) {
            exerciseIds.push(exercise._id);
        } else {
            let result = await axios.post("/admin/exercise", exercise)
            exerciseIds.push(result.data._id);
        }
    }
    workout.date = moment(workout.date).format("YYYY-MM-DD");
    workout.exercises = exerciseIds;
    axios
        .post("/admin/workout", workout)
        .catch(err => {
            console.log(err);
        });

}

export async function getPastWorkouts(id) {
    return fetch('/admin/workouts/' + id, { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};