//const assert = require('assert');
// uses Node.js's built-in require function to import the assert module 
// it to the constant assert

// the assert module provides a way to write tests for your code

//const { LinkedList, Node} = require('./llPrac.mjs');
// this line uses Node.js's built-in require function 
//to import the LinkedList class from the llPrac.js file

//the require keyword is a built-in Node.js function that imports 
// modules into the current file. When you call the require function, with a path 
// of a file as its arg, Node.js will import the file and evaluate it, then returns
// the exports object from the file.


//UPDATE: using ES6 modules instead of CommonJS
import { LinkedList, Node } from './llPrac.mjs';
import assert from 'assert';

const linkedList = new LinkedList();

// add some nodes to the list
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);

// test removeAt method
let removedNode = linkedList.removeAt(1);
assert.strictEqual(removedNode.data, 10);
assert.strictEqual(linkedList.size(), 2);

removedNode = linkedList.removeAt(0);
assert.strictEqual(removedNode.data, 5);
assert.strictEqual(linkedList.size(), 1);

removedNode = linkedList.removeAt(0);
assert.strictEqual(removedNode.data, 15);
assert.strictEqual(linkedList.size(), 0);

//test remove method from an empty linked list
removedNode = linkedList.removeAt(0);
assert.strictEqual(removedNode, null);

console.log('All tests pass!');
//if all assertions pass, the console will log 'All tests pass!' to the console
// if any of the assertions fail, the program will throw an error and stop executing
