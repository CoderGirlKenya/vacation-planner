import { render, screen } from '@testing-library/react';
import Vacations from "./Vacations";


    test('on inital render, displays REMOVE ITEM', () => {
        //arrange
        const vacations = {
            id: '',
            destination: '',
            outdoorsActivity: "",
            toursActivity: '',
            foodActivity: '',
        }
    render(<Vacations vacations={vacations}/>)
     //act
     

     const buttonElement = screen.getByText('REMOVE ITEM');
       expect (buttonElement).toBeInTheDocument(); 

    })