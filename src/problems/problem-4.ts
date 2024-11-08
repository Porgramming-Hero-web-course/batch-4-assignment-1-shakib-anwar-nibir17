type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const isCircle = (shape: Shape): shape is Circle => "radius" in shape;
const isRectangle = (shape: Shape): shape is Rectangle =>
  "width" in shape && "height" in shape;

const calculateShapeArea = (shape: Shape): number => {
  if (isCircle(shape)) {
    return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
  } else if (isRectangle(shape)) {
    return parseFloat((shape.width * shape.height).toFixed(2));
  }
  throw new Error("Unrecognized shape");
};

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log({ circleArea, rectangleArea });
