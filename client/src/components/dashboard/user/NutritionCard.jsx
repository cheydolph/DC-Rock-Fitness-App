import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

const NutritionCard = ({dailyNutritionAdvice}) => {    
    return (
        <Card style={{width: '30rem'}}
              className='shadow-sm'>
            <Card.Body>
                <Card.Title>Nutrition</Card.Title>    
            </Card.Body>        
                <ListGroup variant='flush'>
                    <ListGroup.Item>{dailyNutritionAdvice.gramsCarbs}g Carbs</ListGroup.Item>
                    <ListGroup.Item>{dailyNutritionAdvice.gramsProtein}g Protein</ListGroup.Item>
                    <ListGroup.Item>{dailyNutritionAdvice.gramsFat}g Fat</ListGroup.Item>                
                </ListGroup>
            <Card.Body>
                <Card.Link>More information</Card.Link>
            </Card.Body>            
        </Card>
    );
}

export default NutritionCard;