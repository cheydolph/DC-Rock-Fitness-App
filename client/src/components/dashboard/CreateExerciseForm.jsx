import React from React;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function CreateExerciseForm() {
    return (
        <Form>
            <Form.Group controlId='exerciseFormName'>
                <Form.Label>Exercise Name</Form.Label>
                <Form.Control type='text' placeholder='Pushups, situps, etc...' />
            </Form.Group>

            <Form.Group controlId='exerciseFormNumReps'>
                <Form.Label>Number of reps</Form.Label>
                <Form.Control type='number' placeholder='Number of reps' />
            </Form.Group>

            <Form.Group controlId='exerciseFormVideoUrl'>
                <Form.Label>Video URL</Form.Label>
                <Form.Control type='text' placeholder='Enter reference video URL' />
            </Form.Group>

            <Form.Group controlId='exerciseFormNotes'>
                <Form.Label>Notes</Form.Label>
                <Form.Control as='textarea' rows='3' placeholder='Give users specific instructions here' />
            </Form.Group>

            <Button variant='primary' type='submit'>Add Exercise</Button>
        </Form>
    );
}