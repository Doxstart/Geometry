class Triangle {

    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;

    }

    static TriangleFromCoordinates(xA, yA, xB, yB, xC, yC) {
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        const pointC = new Point(xC, yC);
        return new Triangle(pointA, pointB, pointC);
    }

    get perimeter() {
        const segment1 = new Segment(this.pointA, this.pointB);
        const segment2 = new Segment(this.pointB, this.pointC);
        const segment3 = new Segment(this.pointC, this.pointA);
        let perimeter = segment1.length + segment2.length + segment3.length;
        return Math.floor(perimeter)
    }

    get area() {
        const segment1 = new Segment(this.pointA, this.pointB).length;
        const segment2 = new Segment(this.pointB, this.pointC).length;
        const segment3 = new Segment(this.pointC, this.pointA).length;
        const semiPerimeter = (segment1 + segment2 + segment3) / 2;
        const area = Math.sqrt(semiPerimeter * ((semiPerimeter - segment1) * (semiPerimeter - segment2) * (semiPerimeter - segment3)))
        return Math.floor(area);
    }

}