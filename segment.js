class Segment{

    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }

    static fromPointsCoordinates(xA, yA, xB, yB){
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        return new Segment(pointA, pointB);
    }

    calculateLength() {
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;
        const squareDX = deltaX ** 2;
        const squareDY = deltaY ** 2;
        const squareSum = squareDX + squareDY;
        const length = Math.sqrt(squareSum);
        return length;
    }

}