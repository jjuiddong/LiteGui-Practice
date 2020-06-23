//
// Shader
// Attribute : Position
//

PosShader = {

  vertexShader: [
    "attribute vec3 aVertexPosition;",

    "uniform mat4 mWorld;", // world matrix
    "uniform mat4 mView;", // view matrix
    "uniform mat4 mProj;", // projection matrix
    
    "void main() {",
      "gl_Position = mProj * mView * mWorld * vec4(aVertexPosition, 1.0);",
    "}",

  ].join('\n'),


  fragmentShader : [
    "precision mediump float;",

    "void main() {",
      "gl_FragColor = vec4(1, 1, 1, 1);",
    "}",

  ].join('\n')

};
