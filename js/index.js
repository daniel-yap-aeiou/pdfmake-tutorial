var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Regular.ttf',
		italics: 'fonts/Roboto-Regular.ttf',
		bolditalics: 'fonts/Roboto-Regular.ttf'
	},
	PingFangSC: {
     normal: ['fonts/PingFang.ttc', 'PingFangSC-Regular'],
	 bold: ['fonts/PingFang-SC-Semibold.ttf', 'PingFangSC-Bold']
   }
};

//pdfMake.fonts = fonts;

var dd = {
	content: [
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['香港', 'Another one here', 'OK?']
				]
			},
			layout: {
			 fillColor: function(rowIndex, node, columnIndex) {
                return (rowIndex === 0) ? [10, 186, 181] : null;
                },   
			}
			
		},
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15],
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		},
	},
	defaultStyle: {
		// alignment: 'justify'
		font: 'PingFangSC'
	}
	
}

const pdfDocGenerator = pdfMake.createPdf(dd).download();
console.log(pdfDocGenerator);

