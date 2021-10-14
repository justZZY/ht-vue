<template>
  <div id="topo" class="ht-view"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    init () {
      let dm = new ht.DataModel()
      let g3d = window.g3d = new ht.graph3d.Graph3dView(dm)
      g3d.setGridVisible(true)
      // 通过 json 对象加载
      let model1 = {
        "modelType": "obj",
        "obj": "obj/equipment.obj",
        "mtl": "obj/equipment.mtl",
        "prefix": "obj/"
      };
      let node1 = new ht.Node();
      node1.setAnchor3d([0.5, 0, 0.5]);
      node1.p3(-200, -100, 0);
      node1.s('shape3d', model1);
      dm.add(node1);
      let model2 = {
        "modelType": "obj",
        "obj": "obj/windmill.obj",
        "mtl": "obj/windmill.mtl",
        "prefix": "obj/"
      }
      let node2 = new ht.Node();
      node2.setAnchor3d([0.5, 0, 0.5]);
      node2.p3(200, 0, 0);
      node2.s('shape3d', model2);
      dm.add(node2);
      g3d.addToDOM(document.getElementById("#topo"))
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ht-view {
  position: relative;
  width: 100%;
  height: 1080px;
}
</style>
