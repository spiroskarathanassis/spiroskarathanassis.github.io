const validateSizes = (w, h) => {
  if (!isFinite(w) && !isFinite(h)) {
    console.log('Width or height is not Finite');
    return false;
  }

  if (isNaN(w) || isNaN(h)) {
    console.log('Given value is not a number');
    return false;
  }

  return true;
}

const setGraphDetails = (data, columns) => {
  let styles = {
    preview: [],
    description: []
  };
  let logger = [];
  let preview = {}, descr = {};

  //background
  if (data.background && data.background.split(' ') !== '') {
    Reflect.set(styles, 'background', data.background);
    logger.push("Background color is " + data.background);
  }

  //baseline
  if (data.baseline?.color && data.baseline?.height) {
    Reflect.set(styles, 'baseline', {
      border: data.baseline.height + 'px solid ' + data.baseline.color,
      background: data.baseline.color
    });
    logger.push("Baseline added with color " + data.baseline.color);
  }

  //column
  if (data.column?.color) {
    preview.background = data.column.color;
    logger.push("Column color setted to " + data.column.color);
  }
  if (data.column?.gap) {
    preview.margin = '0 ' + data.column.gap + 'px';
    descr.margin = '0 ' + data.column.gap + 'px'; 
    logger.push("Column gap setted " + data.column.gap + 'px');
  }
  
  //label
  if (data.labelsColor) {
    descr.color = data.labelsColor;
    logger.push("Label color setted " + data.labelsColor);
  }

  console.table(logger);
 
  for (let col of columns) {
    if (col.size[0] == undefined || col.size[1] == undefined) {
      console.log(`Not a given size for column number ${col.label}`);
      continue;
    }

    if (!validateSizes(col.size[0], col.size[1])) continue;
    if (col.size[1] < 0) col.size[1] = 0;
    if (col.size[1] > 100) col.size[1] = 100;

    const width = parseInt(col.size[0]) + 'px';
    const height = parseInt(col.size[1]) + 'px';
    
    styles.preview.push({ width, height, ...preview });
    console.log(styles.preview);
    styles.description.push({ width, ...descr });
  }
  
  return styles;
}

export default setGraphDetails;