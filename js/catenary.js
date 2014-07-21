/*
Funciones generales para calcular una catenaria
*/

function catenaria(x,a,c1,c2){

  switch(arguments.length) {
    case 1:
      a = 1;
    case 2:
      c1 = 0;
    case 3:
      c2 = 0;
      break;
  }
  return a*(Math.exp((x-c1)/a) + Math.exp(-(x-c1)/a))/2 + c2;
};

function parabola(x,a,c1,c2){

  switch(arguments.length) {
    case 1:
      a = 1;
    case 2:
      c1 = 0;
    case 3:
      c2 = 0;
      break;
  }
  return a+Math.pow(x-c1,2)/(2*a) + c2;
};


function resuelvaParabola(a,x1,y1,x2,y2) {
  var c1 = a*(y2-y1)/(x1-x2) + (x1+x2)/2;
  var c2 = y1-parabola(x1,a,c1);
  return [c1,c2];
};



function Tramo(referenceSpecs, cableSpecs) {

  this.referenceSpecs = referenceSpecs;
  this.cableSpecs = cableSpecs;

  this.sag = function() {
    return this.referenceSpecs.span*this.referenceSpecs.span*this.referenceSpecs.linearDensity*this.cableSpecs.loadRate*G / (8*this.cableSpecs.tension);
  };

  this.a = function() {
    return this.referenceSpecs.tension/(G*this.referenceSpecs.linearDensity);
  };

};
