//
// shader load helper
//

var ShaderHelper = {REVISION: '1'};


//
// load shader, compile, attach shaderProgram, link
// 
// gl: opengl context
// shaderProgram: gl.createProgram() object
// shaderCode: shader source code, vertex, fragment shader code
//
ShaderHelper.loadShader = function (gl, shaderProgram, shaderCode)
{

    if (shaderCode.vertexShader)
    {
        var shader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(shader, shaderCode.vertexShader);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
            !gl.isContextLost())
        {
            alert(gl.getShaderInfoLog(shader));
        }
        else
        {
            gl.attachShader(shaderProgram, shader);
        }
    }

    if (shaderCode.fragmentShader)
    {
        var shader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(shader, shaderCode.fragmentShader);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
            !gl.isContextLost())
        {
            alert(gl.getShaderInfoLog(shader));
        }
        else
        {
            gl.attachShader(shaderProgram, shader);
        }
    }

    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS) &&
        !gl.isContextLost())
    {
        alert("Failed to link shaders: " + gl.getProgramInfoLog(shaderProgram));
    }
};


