//
// WebGL Helper Functions
//

var GLHelper = { REVISION:'1' };


//
// create WebGL context
// canvas : html canvas object
// return WebGL Context
//
GLHelper.create = function (canvas)
{
    var names = ["webgl", "experimental-webgl"];
    var context = null;
    for (var i = 0; i < names.length; i++)
    {
        try {
            context = canvas.getContext(names[i]);
        } catch (e) {
        }

        if (context)
            break;
    }

    if (context)
    {
        context.viewportWidth = window.innerWidth - 30;
        context.viewportHeight = window.innerHeight - 80;
        canvas.width = window.innerWidth - 30;
        canvas.height = window.innerHeight - 80;
    }
    else
    {
        alert("Failed to create WebGL context!");
    }

    return context;
};

