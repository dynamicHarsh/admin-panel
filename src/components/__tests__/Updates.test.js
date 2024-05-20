import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import Updates from '../Updates/Updates';




test('testing Card component',()=>{
    render(<Updates />);
   const UpdatesElement=screen.getByTestId('updates-1');
   expect(UpdatesElement).toBeInTheDocument();
})