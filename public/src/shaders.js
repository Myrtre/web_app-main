// Vertex shader program
const vsSource = `
    attribute vec2 a_position;
    attribute vec2 a_texcoord;

    uniform mat3 u_world;
    uniform mat3 u_object;
    uniform vec2 u_frame;

    varying vec2 v_texCoord;

    void main(void) {
      gl_Position = vec4( u_world * u_object * vec3(a_position, 1 ) , 1 );
      v_texCoord = a_texcoord + u_frame;
    }
  `;

// Fragment shader program
const fsSource = `
    precision mediump float;
    uniform sampler2D u_image;
    varying vec2 v_texCoord;

    void main(void) {
      gl_FragColor = texture2D(u_image, v_texCoord);
    }
  `;