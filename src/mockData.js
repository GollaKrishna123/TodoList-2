import { v4 as uuid } from "uuid";
const mockData = [
  {
    title: "Need to visit Shop",
    description : "Go by 11AM",
    id: uuid(),
    checked : false,
    points : 30
  },
  {
    title: "Take Bath",
    description : "Go by 9AM",
    id: uuid(),
    checked : false,
    points : 10
  },
  {
    title: "Wash Clothes",
    description : "Go by 10AM",
    id: uuid(),
    checked : false,
    points : 25
  },
  {
    title: "Hair Wash",
    description : "Go by 10.30AM",
    id: uuid(),
    checked : false,
    points : 20
  },
];
export default mockData;
