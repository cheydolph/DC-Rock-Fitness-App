import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export function CreateWorkoutForm({ users }) {
    return (
        <ListGroup variant='flush'>
            {
                users && users.map(user => {
                    return (
                        <ListGroup.Item>
                            user.name
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    );
}