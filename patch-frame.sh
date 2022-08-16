find .next/ -name '*.js' -exec sed -i -e 's/requestAnimationFrame(onFrame),f.ZP.update()/(function onFrame(){requestAnimationFrame(onFrame),f.ZP.update()})()/g' {} \;
