<template>
  <div id="topo" className="ht-view"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      bladeRotation: 0
    }
  },
  methods: {
    init() {
      let dm = new ht.DataModel()
      let g3d = window.g3d = new ht.graph3d.Graph3dView(dm)
      g3d.setEye(500, 800, 4500);
      g3d.setGridVisible(true)
      g3d.setEditable(true)
      g3d.getView().style.background = '#4C7BBB';
      g3d.addToDOM(document.getElementById("#topo"))
      // 通过 json 对象加载
      let model1 = {
        "modelType": "obj",
        "obj": "obj/equipment.obj",
        "mtl": "obj/equipment.mtl",
        "prefix": "obj/"
      };
      let node1 = new ht.Node();
      node1.setAnchor3d([0.5, 0, 0.5]);
      node1.p3(-300, 0, 0);
      node1.s('shape3d', model1);
      dm.add(node1);

      ht.Default.loadObj("obj/windmill.obj", "obj/windmill.mtl", {
        part: true,
        finishFunc: (modelMap, array, rawS3) => {
          if (modelMap) {
            modelMap.center_wire_255255255.t3 = [0, -1422, 0]
            modelMap.blade_wire_b_255255255.t3 = [0, -1422, 0]
            modelMap.blade_wire_b_255255255.r3 = {
              func: function (data) {
                return [0, 0, -data.a('blade')]
              }
            }
            ht.Default.setShape3dModel("windmill", array.slice(0, 3))
            let windmill = new ht.Node()
            windmill.s3(rawS3)
            windmill.p3(0, 0, 300)
            windmill.s({
              'shape3d': 'windmill',
              'shape3d.scaleable': false
            })
            dm.add(windmill)
            ht.Default.setShape3dModel("windmill_blade", array.slice(3, array.length))
            let windmillBlade = new ht.Node()
            windmillBlade.s3(rawS3)
            windmillBlade.p3(0, 0, 300)
            windmillBlade.s({
              'shape3d': 'windmill_blade',
              'shape3d.scaleable': false
            })
            windmillBlade.a("speed", 0)
            windmillBlade.setPosition3d(0, 1422, 300)
            windmillBlade.setRotation3d(0, 0, this.bladeRotation)
            dm.add(windmillBlade)

            // 创建面板
            this.createFormPane(windmillBlade)

            // 启动扇叶定时器
            window.setInterval(() => {
              let speed = windmillBlade.a("speed")
              this.bladeRotation -= speed
              windmillBlade.setRotation3d(0, 0, this.bladeRotation)
            }, 40)
          }
        }
      })
    },
    createFormPane (bladeNode) {
      let formPane = new ht.widget.FormPane();
      formPane.setWidth(200);
      formPane.setHeight(40);
      formPane.getView().className = 'formpane';
      formPane.addToDOM(document.getElementById("#topo"))

      formPane.addRow(['转速',
        {
          id: 'speed',
          slider: {
            min: 0,
            max: 1,
            step: 0.1,
            value: 0,
            onValueChanged: function(){
              let value = this.getValue()
              bladeNode.a('speed', value)
            }
          }
        }
      ], [60, 0.1])
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
.formpane {
  top: 20px;
  right: 20px;
  background: rgba(230, 230, 230, 0.5);
}
</style>
