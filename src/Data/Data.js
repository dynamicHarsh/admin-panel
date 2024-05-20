// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilChart,
  UilBus,
  UilPaypal,
  UilTruck,
  UilBriefcase
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,

  },
  {
    icon: UilClipboardAlt,
  },
  
 
  {
    icon: UilChart,
   
  },
  {
    icon: UilBus
  },
  {
    icon: UilPaypal
  },
  {
    icon: UilTruck
  },
  {
    icon: UilBriefcase
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    labels: ['In Transit', 'Delivered', 'Pending', 'Cancelled'],
    datasets: [{
      label: 'Shipment Status',
      data: [45, 35, 15, 5],
      backgroundColor: [
        'rgb(54, 162, 235)', // Blue
        'rgb(75, 192, 192)', // Green
        'rgb(255, 205, 86)', // Yellow
        'rgb(255, 99, 132)'  // Red
      ],
      hoverOffset: 4
    }]
  },
  {
    labels: ['Air', 'Sea', 'Land', 'Rail'],
    datasets: [{
      label: 'Transportation Methods',
      data: [25, 30, 35, 10],
      backgroundColor: [
        'rgb(255, 159, 64)',  // Orange
        'rgb(54, 162, 235)',  // Blue
        'rgb(75, 192, 192)',  // Green
        'rgb(153, 102, 255)'  // Purple
      ],
      hoverOffset: 4
    }]
  },

  {
    labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
    datasets: [{
      label: 'Regional Distribution',
      data: [40, 20, 25, 10, 5],
      backgroundColor: [
        'rgb(255, 205, 86)',  // Yellow
        'rgb(54, 162, 235)',  // Blue
        'rgb(75, 192, 192)',  // Green
        'rgb(255, 159, 64)',  // Orange
        'rgb(153, 102, 255)'  // Purple
      ],
      hoverOffset: 4
    }]
  }
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Gurpreet Singh (Dispatch team)",
    noti: "has created Load No. 1-1-AAA-1325",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Aman (Driver)",
    noti: "Picked Up goods at Location_Name for Load No. XXX",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Harsh (Dispatch team)",
    noti: "has created Load No. 1-1-AAA-1325",
    time: "2 hours ago",
  },
];
