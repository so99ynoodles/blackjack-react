const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const imageResize = require("gulp-image-resize");

gulp.task("sprite", () => {
  let spriteData = gulp.src("./assets/img/card/*.png")
    .pipe(imageResize({
      width: 100,
      height: 150,
      crop: true,
      upscale: false
    }))
    .pipe(spritesmith({
      imgName: "sprite.png",
      cssName: "sprite.css",
      imgPath: "../../assets/img/sprite.png",
      cssFormat: "css",
      cssVarMap: (sprite) => {
        sprite.name = "sprite-" + sprite.name;
      }
    }));
  spriteData.img
    .pipe(gulp.dest("./assets/img"));
  return spriteData.css
    .pipe(gulp.dest("./src/common"));
})
gulp.task("default", gulp.task("sprite"));