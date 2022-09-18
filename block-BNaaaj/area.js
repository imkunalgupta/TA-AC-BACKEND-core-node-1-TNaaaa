function areaSquare(a) {
  return a * a;
}

function areaRectangle(l, w) {
  return l * w;
}

function areaCircle(r) {
  return (22 / 7) * r * r;
}

module.exports = {
  areaSquare: areaSquare,
  areaRectangle: areaRectangle,
  areaCircle: areaCircle,
};
