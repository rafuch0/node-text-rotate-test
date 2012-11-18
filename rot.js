#!/usr/bin/env node

var util = require('util');
var fs = require('fs');

var theData;
if(process['argv'].length == 2) 
{
	theData = fs.readFileSync('/dev/stdin').toString().split("\n");
}
else if(process['argv'].length == 3)
{
	theData = fs.readFileSync(process['argv'][2]).toString().split("\n");
}
else
{
	console.error('Usage: filename or used as pipe');
	process.exit();
}	
	
var rotData = [];
var maxLineLength = -1;

for(var i = 0, maxi = theData.length; i < maxi; i++) rotData.push([]);

for(var i = 0, maxi = theData.length; i < maxi; i++)
{
	for(var j = 0, maxj = theData[i].length; j < maxj; j++)
	{
		rotData[theData.length - i - 1][theData[i].length - j - 1] = theData[i][j];

		if(maxLineLength < maxj) maxLineLength = maxj;
	}
}

for(var j = maxLineLength; j >= 0; j--)
{
	for(var i = rotData.length - 1; i >= 0; i--)
	{
		if(rotData[i][j]) util.print(rotData[i][j]);
		else util.print(' ');
	}

	util.print("\n");
}
