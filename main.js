

const point1 = new Point(1, 1);
const point2 = new Point(4, 5);

console.log(point1);
console.log(point2);

const segment1 = new Segment(point1, point2);

const segment2 = Segment.fromPointsCoordinates(0, 1, 3, 5);

console.log(segment1);
console.log(segment2);

console.log(segment1.calculateLength());