function Gl(gl) {
    this._gl = gl;

    this._copyConstants();

    this._state = {
        viewport: {},
        clearColor: {},
        enable: {},
        blendFunc: {},
        blendEquationSeparate: {},
        blendFuncSeparate: {}
    };
}

Gl.prototype.viewport = function(x, y, w, h) {
    var state = this._state.viewport;

    if (w === state.w && h === state.h && x === state.x && y === state.y) {
        return;
    }

    state.x = x;
    state.y = y;
    state.w = w;
    state.h = h;

    this._gl.viewport(x, y, w, h);
};

Gl.prototype.clearColor = function(r, g, b, a) {
    var state = this._state.clearColor;

    if (r === state.r && g === state.g && b === state.b && a === state.a) {
        return;
    }

    state.r = r;
    state.g = g;
    state.b = b;
    state.a = a;

    this._gl.clearColor(r, g, b, a);
};

Gl.prototype.clear = function(mask) {
    this._gl.clear(mask);
};

Gl.prototype.clearDepth = function(depth) {
    this._gl.clearDepth(depth);
};

Gl.prototype.clearStencil = function(s) {
    this._gl.clearStencil(s);
};

Gl.prototype.enable = function(cap) {
    if (this._state.enable[cap] !== true) {
        this._state.enable[cap] = true;
        this._gl.enable(cap);
    }
};

Gl.prototype.disable = function(cap) {
    if (this._state.enable[cap] !== false) {
        this._state.enable[cap] = false;
        this._gl.disable(cap);
    }
};

Gl.prototype.depthFunc = function(a) {
    if (this._state.depthFunc !== a) {
        this._state.depthFunc = a;
        this._gl.depthFunc(a);
    }
};

Gl.prototype.frontFace = function(a) {
    if (this._state.frontFace !== a) {
        this._state.frontFace = a;
        this._gl.frontFace(a);
    }
};

Gl.prototype.cullFace = function(a) {
    if (this._state.cullFace !== a) {
        this._state.cullFace = a;
        this._gl.cullFace(a);
    }
};

Gl.prototype.blendEquation = function(a) {
    if (this._state.blendEquation !== a) {
        this._state.blendEquation = a;
        this._gl.blendEquation(a);
    }
};

Gl.prototype.blendFunc = function(a, b) {
    var state = this._state.blendFunc;

    if (state.a === a && state.b === b) {
        return;
    }

    state.a = a;
    state.b = b;

    this._gl.blendFunc(a, b);
};

Gl.prototype.blendEquationSeparate = function(a, b) {
    var state = this._state.blendEquationSeparate;

    if (state.a === a && state.b === b) {
        return;
    }

    state.a = a;
    state.b = b;

    this._gl.blendEquationSeparate(a, b);
};

Gl.prototype.blendFuncSeparate = function(a, b, c, d) {
    var state = this._state.blendFuncSeparate;

    if (a === state.a && b === state.b && c === state.c && d === state.d) {
        return;
    }

    state.a = a;
    state.b = b;
    state.c = c;
    state.d = d;

    this._gl.blendFuncSeparate(a, b, c, d);
};

Gl.prototype.readPixels = function(x, y, w, h, f, t, p) {
    this._gl.readPixels(x, y, w, h, f, t, p);
};

Gl.prototype.createBuffer = function() {
    return this._gl.createBuffer();
};

Gl.prototype.bindBuffer = function(a) {
    if (this._state.bindBuffer !== a) {
        this._state.bindBuffer = a;
        this._gl.bindBuffer(a);
    }
};

Gl.prototype.bufferData = function(t, s, u) {
    this._gl.bufferData(t, s, u);
};

Gl.prototype.bufferSubData = function(t, o, d) {
    this._gl.bufferSubData(t, o, d);
};

Gl.prototype.vertexAttribPointer = function() {};
Gl.prototype.deleteBuffer = function() {};

Gl.prototype.createFramebuffer = function() {
    return {};
};
Gl.prototype.bindFramebuffer = function() {};
Gl.prototype.framebufferTexture2D = function() {};
Gl.prototype.createRenderbuffer = function() {
    return {};
};
Gl.prototype.bindRenderbuffer = function() {};
Gl.prototype.renderbufferStorage = function() {};
Gl.prototype.framebufferRenderbuffer = function() {};
Gl.prototype.checkFramebufferStatus = function() {
    return this.FRAMEBUFFER_COMPLETE;
};

Gl.prototype.useProgram = function() {};
Gl.prototype.enableVertexAttribArray = function() {};
Gl.prototype.createShader = function() {
    return {};
};
Gl.prototype.shaderSource = function() {};
Gl.prototype.compileShader = function() {};
Gl.prototype.getShaderParameter = function() {
    return true;
};
Gl.prototype.getShaderInfoLog = function() {};
Gl.prototype.createProgram = function() {
    return {};
};
Gl.prototype.attachShader = function() {};
Gl.prototype.linkProgram = function() {};
Gl.prototype.getProgramParameter = function() {
    return true;
};
Gl.prototype.disableVertexAttribArray = function() {};

var attribCount = 0;
Gl.prototype.getAttribLocation = function() {
    return attribCount++;
};

var uniformCount = 0;
Gl.prototype.getUniformLocation = function() {
    return uniformCount++;
};

Gl.prototype.uniformMatrix4fv = function() {};
Gl.prototype.uniform1f = function() {};
Gl.prototype.uniform2f = function() {};
Gl.prototype.uniform3f = function() {};
Gl.prototype.uniform1i = function() {};
Gl.prototype.uniform2i = function() {};
Gl.prototype.uniform3i = function() {};
Gl.prototype.uniform3fv = function() {};

Gl.prototype.drawArrays = function() {};
Gl.prototype.drawElements = function() {};

Gl.prototype.createTexture = function() {
    return {};
};
Gl.prototype.bindTexture = function() {};
Gl.prototype.activeTexture = function() {};
Gl.prototype.pixelStorei = function() {};
Gl.prototype.texImage2D = function() {};
Gl.prototype.texParameteri = function() {};
Gl.prototype.generateMipmap = function() {};

Gl.prototype._copyConstants = function() {
    var gl = this._gl;

    this.ARRAY_BUFFER = gl.ARRAY_BUFFER;
    this.ELEMENT_ARRAY_BUFFER = gl.ELEMENT_ARRAY_BUFFER;
    this.FLOAT = gl.FLOAT;
    this.STATIC_DRAW = gl.STATIC_DRAW;

    this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
    this.COMPILE_STATUS = gl.COMPILE_STATUS;
    this.VERTEX_SHADER = gl.VERTEX_SHADER;
    this.LINK_STATUS = gl.LINK_STATUS;

    this.TRIANGLES = gl.TRIANGLES;

    this.TEXTURE_2D = gl.TEXTURE_2D;
    this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
    this.RGBA = gl.RGBA;
    this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
    this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
    this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
    this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
    this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
    this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
    this.NEAREST = gl.NEAREST;
    this.NEAREST_MIPMAP_NEAREST = gl.NEAREST_MIPMAP_NEAREST;
    this.NEAREST_MIPMAP_LINEAR = gl.NEAREST_MIPMAP_LINEAR;
    this.LINEAR = gl.LINEAR;
    this.LINEAR_MIPMAP_NEAREST = gl.LINEAR_MIPMAP_NEAREST;
    this.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR;

    this.COLOR_BUFFER_BIT = gl.COLOR_BUFFER_BIT;
    this.DEPTH_BUFFER_BIT = gl.DEPTH_BUFFER_BIT;
    this.DEPTH_TEST = gl.DEPTH_TEST;
    this.LEQUAL = gl.LEQUAL;
    this.CCW = gl.CCW;
    this.BACK = gl.BACK;
    this.CULL_FACE = gl.CULL_FACE;
    this.BLEND = gl.BLEND;

    this.FRAMEBUFFER = gl.FRAMEBUFFER;
    this.RENDERBUFFER = gl.RENDERBUFFER;
    this.DEPTH_COMPONENT16 = gl.DEPTH_COMPONENT16
    this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
    this.DEPTH_ATTACHMENT = gl.DEPTH_ATTACHMENT;
    this.FRAMEBUFFER_COMPLETE = gl.FRAMEBUFFER_COMPLETE;
    this.FRAMEBUFFER_UNSUPPORTED = gl.FRAMEBUFFER_UNSUPPORTED;
    this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
    this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
    this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
};

module.exports = Gl;
/* eslint-enable no-var */
