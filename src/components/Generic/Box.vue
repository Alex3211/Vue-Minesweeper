<script>
/* eslint-disable */
const percentWidthToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.width / 100) * percent);
const percentHeightToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.height / 100) * percent);

export default {
  inject: ["provider"],

  props: {
    x1: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },
    x2: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      defualt: 0
    },
    color: {
      type: String,
      default: "#F00"
    },

    "text-size": {
      type: String,
      default: "28"
    },

    debug: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      oldBox: {
        x: null,
        y: null,
        w: null,
        h: null
      }
    };
  },

  computed: {
    calculatedBox() {
      const ctx = this.provider.context;
      const calculated = {
        x: percentWidthToPix(this.x1, ctx),
        y: percentHeightToPix(this.y1, ctx),
        w: percentWidthToPix(this.x2, ctx),
        h: percentHeightToPix(this.y2, ctx)
      };
      this.oldBox = calculated;
      return calculated;
    }
  },

  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const oldBox = this.oldBox;
    const newBox = this.calculatedBox;

    ctx.beginPath();
    ctx.clearRect(oldBox.x, oldBox.y, oldBox.w, oldBox.h);
    ctx.rect(newBox.x, newBox.y, newBox.w, newBox.h);
    ctx.fillStyle = this.color;
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    const textSize = (newBox.w - newBox.x) / 5;
    ctx.fillStyle = "#000";
    ctx.font = `${textSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(
      Math.floor(this.value),
      newBox.w / 2 + newBox.x / 2,
      newBox.h / 2 + newBox.y / 2 - textSize / 2
    );
  }
};
</script>
