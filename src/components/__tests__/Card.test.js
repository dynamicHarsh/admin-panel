import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import Card from "../Card/Card";


const labels = ["Label1", "Label2", "Label3"];
const datasets = [
  {
    label: 'Label',
      data: [25, 30, 35, 10],
      backgroundColor: [
        'rgb(255, 159, 64)',  // Orange
        'rgb(54, 162, 235)',  // Blue
        'rgb(75, 192, 192)',  // Green
        'rgb(153, 102, 255)'  // Purple
      ],
      hoverOffset: 4
  }
];

afterEach(cleanup);


test('testing Card component',()=>{
    render(<Card labels={labels} datasets={datasets} />);
   const cardElement=screen.getByTestId('cd-1');
   expect(cardElement).toBeInTheDocument();
})