Plotly.d3.csv('diversityranking.csv', function(err, rows){
    
function unpack(rows, key) {
return rows.map(function(row) { 
  return row[key]; 
});
}

var data = [{
type: 'parcoords',
pad: [80,80,80,80],
line: {
  
  color: 'green'
 // colorscale: [[0-100, 'red']]
 
},

dimensions: [{

  range: [0, 100],
  label: '1980',
  values: unpack(rows, '1980')
}, {
  constraintrange: [5, 6],
  range: [0,100],
  label: '1990',
  values: unpack(rows, '1990')
}, {
  label: '2000',
  range: [0, 100],
  values: unpack(rows, '2000')
}, {
  label: '2010',
  range: [0, 100],
  values: unpack(rows, '2010')
}]
}];

var layout = {
width: 800

};

Plotly.plot('graphDiv', data, layout);

});