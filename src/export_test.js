let default_export_let;
export default default_export_let = "This is default export. you can use whereever you want default_export_let If you import";

// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };
