class Point{
    constructor(x=0.0,y=0.0){
        this.x = x;
        this.y = y;
    }
}

class Mtx3{
    constructor(){
        this.matrix = [
            1,0,0,
            0,1,0,
            0,0,1
        ];
    }
    multiply(m){
        var output = new Mtx3();
        output.matrix = [
            this.matrix[Mtx3.m00] * m.matrix[Mtx3.m00] + this.matrix[Mtx3.m10] * m.matrix[Mtx3.m01] + this.matrix[Mtx3.m20] * m.matrix[Mtx3.m02],
            this.matrix[Mtx3.m01] * m.matrix[Mtx3.m00] + this.matrix[Mtx3.m11] * m.matrix[Mtx3.m01] + this.matrix[Mtx3.m21] * m.matrix[Mtx3.m02],
            this.matrix[Mtx3.m02] * m.matrix[Mtx3.m00] + this.matrix[Mtx3.m12] * m.matrix[Mtx3.m01] + this.matrix[Mtx3.m22] * m.matrix[Mtx3.m02],

            this.matrix[Mtx3.m00] * m.matrix[Mtx3.m10] + this.matrix[Mtx3.m10] * m.matrix[Mtx3.m11] + this.matrix[Mtx3.m20] * m.matrix[Mtx3.m12],
            this.matrix[Mtx3.m01] * m.matrix[Mtx3.m10] + this.matrix[Mtx3.m11] * m.matrix[Mtx3.m11] + this.matrix[Mtx3.m21] * m.matrix[Mtx3.m12],
            this.matrix[Mtx3.m02] * m.matrix[Mtx3.m10] + this.matrix[Mtx3.m12] * m.matrix[Mtx3.m11] + this.matrix[Mtx3.m22] * m.matrix[Mtx3.m12],

            this.matrix[Mtx3.m00] * m.matrix[Mtx3.m20] + this.matrix[Mtx3.m10] * m.matrix[Mtx3.m21] + this.matrix[Mtx3.m20] * m.matrix[Mtx3.m22],
            this.matrix[Mtx3.m01] * m.matrix[Mtx3.m20] + this.matrix[Mtx3.m11] * m.matrix[Mtx3.m21] + this.matrix[Mtx3.m21] * m.matrix[Mtx3.m22],
            this.matrix[Mtx3.m02] * m.matrix[Mtx3.m20] + this.matrix[Mtx3.m12] * m.matrix[Mtx3.m21] + this.matrix[Mtx3.m22] * m.matrix[Mtx3.m22],
        ];
        return output;
    }
    transition(x,y){
        var output = new Mtx3();
        output.matrix = [
            this.matrix[Mtx3.m00],
            this.matrix[Mtx3.m01],
            this.matrix[Mtx3.m02],

            this.matrix[Mtx3.m10],
            this.matrix[Mtx3.m11],
            this.matrix[Mtx3.m12],

            x * this.matrix[Mtx3.m00] + y * this.matrix[Mtx3.m10] + this.matrix[Mtx3.m20],
            x * this.matrix[Mtx3.m01] + y * this.matrix[Mtx3.m11] + this.matrix[Mtx3.m21],
            x * this.matrix[Mtx3.m02] + y * this.matrix[Mtx3.m12] + this.matrix[Mtx3.m22]
        ];
        return output;
    }
    scale(x,y){
        var output = new Mtx3();
        output.matrix = [
            this.matrix[Mtx3.m00] * x,
            this.matrix[Mtx3.m01] * x,
            this.matrix[Mtx3.m02] * x,

            this.matrix[Mtx3.m10] * y,
            this.matrix[Mtx3.m11] * y,
            this.matrix[Mtx3.m12] * y,

            this.matrix[Mtx3.m20],
            this.matrix[Mtx3.m21],
            this.matrix[Mtx3.m22]

        ];
        return output;
    }
    getFloatArray(){
        return new Float32Array(this.matrix);
    }
}
Mtx3.m00 = 0;
Mtx3.m01 = 1;
Mtx3.m02 = 2;
Mtx3.m10 = 3;
Mtx3.m11 = 4;
Mtx3.m12 = 5;
Mtx3.m20 = 6;
Mtx3.m21 = 7;
Mtx3.m22 = 8;

