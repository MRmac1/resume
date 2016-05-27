/*! This file is created by tracyzhou */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/javascripts/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(2);
	__webpack_require__(11);
	__webpack_require__(16);
	__webpack_require__(17);

	$.scrollify({
	    section: ".wrap",
	    scrollbars: true,
	    easing: "easeOutExpo"
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./bootstrap.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./bootstrap.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url(" + __webpack_require__(5) + ");src:url(" + __webpack_require__(5) + "?#iefix) format('embedded-opentype'),url(" + __webpack_require__(6) + ") format('woff2'),url(" + __webpack_require__(7) + ") format('woff'),url(" + __webpack_require__(8) + ") format('truetype'),url(" + __webpack_require__(9) + "#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before{content:\"\\E227\"}.glyphicon-btc:before{content:\"\\E227\"}.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-jpy:before{content:\"\\A5\"}.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-rub:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\A0   \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;-o-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\A0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:application/octet-stream;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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JbwmFCZ+JuYnUCe8J/goNChwKKwpoCnMKiYqSiqEKworeiwILGgsuizsLRwtiC30LiguZi6iLtgvDi9GL34vsi/4MD4whDDSMRIxYDGuMegyJDJeMpoy3jMiMz4zaDO2NBg0YDSoNNI1LDWeNeg2PjZ8Ntw3GjdON5I31DgQOEI4hjjIOQo5SjmIOcw6HDpsOpo63jugO9w8GDxQPKI8+D0yPew+Oj6MPtQ/KD9uP6o/+kBIQIBAxkECQX5CGEKoQu5DGENCQ3ZDoEPKRBBEYESuRPZFWkW2RgZGdEa0RvZHNkd2R7ZH9kgWSDJITkhqSIZIzEkSSThJXkmESapKAkouSlIAAQAAARcApwARAAAAAAACAAAAAQABAAAAQAAuAAAAAAAAABAAxgABAAAAAAATABIAAAADAAEECQAAAGoAEgADAAEECQABACgAfAADAAEECQACAA4ApAADAAEECQADAEwAsgADAAEECQAEADgA/gADAAEECQAFAHgBNgADAAEECQAGADYBrgADAAEECQAIABYB5AADAAEECQAJABYB+gADAAEECQALACQCEAADAAEECQAMACQCNAADAAEECQATACQCWAADAAEECQDIABYCfAADAAEECQDJADACkgADAAEECdkDABoCwnd3dy5nbHlwaGljb25zLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQA0ACAAYgB5ACAASgBhAG4AIABLAG8AdgBhAHIAaQBrAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARwBMAFkAUABIAEkAQwBPAE4AUwAgAEgAYQBsAGYAbABpAG4AZwBzAFIAZQBnAHUAbABhAHIAMQAuADAAMAA5ADsAVQBLAFcATgA7AEcATABZAFAASABJAEMATwBOAFMASABhAGwAZgBsAGkAbgBnAHMALQBSAGUAZwB1AGwAYQByAEcATABZAFAASABJAEMATwBOAFMAIABIAGEAbABmAGwAaQBuAGcAcwAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAOQA7AFAAUwAgADAAMAAxAC4AMAAwADkAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA3ADAAOwBtAGEAawBlAG8AdABmAC4AbABpAGIAMgAuADUALgA1ADgAMwAyADkARwBMAFkAUABIAEkAQwBPAE4AUwBIAGEAbABmAGwAaQBuAGcAcwAtAFIAZQBnAHUAbABhAHIASgBhAG4AIABLAG8AdgBhAHIAaQBrAEoAYQBuACAASwBvAHYAYQByAGkAawB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQBXAGUAYgBmAG8AbgB0ACAAMQAuADAAVwBlAGQAIABPAGMAdAAgADIAOQAgADAANgA6ADMANgA6ADAANwAgADIAMAAxADQARgBvAG4AdAAgAFMAcQB1AGkAcgByAGUAbAAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABFwAAAQIBAwADAA0ADgEEAJYBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMA7wEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgZnbHlwaDEGZ2x5cGgyB3VuaTAwQTAHdW5pMjAwMAd1bmkyMDAxB3VuaTIwMDIHdW5pMjAwMwd1bmkyMDA0B3VuaTIwMDUHdW5pMjAwNgd1bmkyMDA3B3VuaTIwMDgHdW5pMjAwOQd1bmkyMDBBB3VuaTIwMkYHdW5pMjA1RgRFdXJvB3VuaTIwQkQHdW5pMjMxQgd1bmkyNUZDB3VuaTI2MDEHdW5pMjZGQQd1bmkyNzA5B3VuaTI3MEYHdW5pRTAwMQd1bmlFMDAyB3VuaUUwMDMHdW5pRTAwNQd1bmlFMDA2B3VuaUUwMDcHdW5pRTAwOAd1bmlFMDA5B3VuaUUwMTAHdW5pRTAxMQd1bmlFMDEyB3VuaUUwMTMHdW5pRTAxNAd1bmlFMDE1B3VuaUUwMTYHdW5pRTAxNwd1bmlFMDE4B3VuaUUwMTkHdW5pRTAyMAd1bmlFMDIxB3VuaUUwMjIHdW5pRTAyMwd1bmlFMDI0B3VuaUUwMjUHdW5pRTAyNgd1bmlFMDI3B3VuaUUwMjgHdW5pRTAyOQd1bmlFMDMwB3VuaUUwMzEHdW5pRTAzMgd1bmlFMDMzB3VuaUUwMzQHdW5pRTAzNQd1bmlFMDM2B3VuaUUwMzcHdW5pRTAzOAd1bmlFMDM5B3VuaUUwNDAHdW5pRTA0MQd1bmlFMDQyB3VuaUUwNDMHdW5pRTA0NAd1bmlFMDQ1B3VuaUUwNDYHdW5pRTA0Nwd1bmlFMDQ4B3VuaUUwNDkHdW5pRTA1MAd1bmlFMDUxB3VuaUUwNTIHdW5pRTA1Mwd1bmlFMDU0B3VuaUUwNTUHdW5pRTA1Ngd1bmlFMDU3B3VuaUUwNTgHdW5pRTA1OQd1bmlFMDYwB3VuaUUwNjIHdW5pRTA2Mwd1bmlFMDY0B3VuaUUwNjUHdW5pRTA2Ngd1bmlFMDY3B3VuaUUwNjgHdW5pRTA2OQd1bmlFMDcwB3VuaUUwNzEHdW5pRTA3Mgd1bmlFMDczB3VuaUUwNzQHdW5pRTA3NQd1bmlFMDc2B3VuaUUwNzcHdW5pRTA3OAd1bmlFMDc5B3VuaUUwODAHdW5pRTA4MQd1bmlFMDgyB3VuaUUwODMHdW5pRTA4NAd1bmlFMDg1B3VuaUUwODYHdW5pRTA4Nwd1bmlFMDg4B3VuaUUwODkHdW5pRTA5MAd1bmlFMDkxB3VuaUUwOTIHdW5pRTA5Mwd1bmlFMDk0B3VuaUUwOTUHdW5pRTA5Ngd1bmlFMDk3B3VuaUUxMDEHdW5pRTEwMgd1bmlFMTAzB3VuaUUxMDQHdW5pRTEwNQd1bmlFMTA2B3VuaUUxMDcHdW5pRTEwOAd1bmlFMTA5B3VuaUUxMTAHdW5pRTExMQd1bmlFMTEyB3VuaUUxMTMHdW5pRTExNAd1bmlFMTE1B3VuaUUxMTYHdW5pRTExNwd1bmlFMTE4B3VuaUUxMTkHdW5pRTEyMAd1bmlFMTIxB3VuaUUxMjIHdW5pRTEyMwd1bmlFMTI0B3VuaUUxMjUHdW5pRTEyNgd1bmlFMTI3B3VuaUUxMjgHdW5pRTEyOQd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMTMzB3VuaUUxMzQHdW5pRTEzNQd1bmlFMTM2B3VuaUUxMzcHdW5pRTEzOAd1bmlFMTM5B3VuaUUxNDAHdW5pRTE0MQd1bmlFMTQyB3VuaUUxNDMHdW5pRTE0NAd1bmlFMTQ1B3VuaUUxNDYHdW5pRTE0OAd1bmlFMTQ5B3VuaUUxNTAHdW5pRTE1MQd1bmlFMTUyB3VuaUUxNTMHdW5pRTE1NAd1bmlFMTU1B3VuaUUxNTYHdW5pRTE1Nwd1bmlFMTU4B3VuaUUxNTkHdW5pRTE2MAd1bmlFMTYxB3VuaUUxNjIHdW5pRTE2Mwd1bmlFMTY0B3VuaUUxNjUHdW5pRTE2Ngd1bmlFMTY3B3VuaUUxNjgHdW5pRTE2OQd1bmlFMTcwB3VuaUUxNzEHdW5pRTE3Mgd1bmlFMTczB3VuaUUxNzQHdW5pRTE3NQd1bmlFMTc2B3VuaUUxNzcHdW5pRTE3OAd1bmlFMTc5B3VuaUUxODAHdW5pRTE4MQd1bmlFMTgyB3VuaUUxODMHdW5pRTE4NAd1bmlFMTg1B3VuaUUxODYHdW5pRTE4Nwd1bmlFMTg4B3VuaUUxODkHdW5pRTE5MAd1bmlFMTkxB3VuaUUxOTIHdW5pRTE5Mwd1bmlFMTk0B3VuaUUxOTUHdW5pRTE5Nwd1bmlFMTk4B3VuaUUxOTkHdW5pRTIwMAd1bmlFMjAxB3VuaUUyMDIHdW5pRTIwMwd1bmlFMjA0B3VuaUUyMDUHdW5pRTIwNgd1bmlFMjA5B3VuaUUyMTAHdW5pRTIxMQd1bmlFMjEyB3VuaUUyMTMHdW5pRTIxNAd1bmlFMjE1B3VuaUUyMTYHdW5pRTIxOAd1bmlFMjE5B3VuaUUyMjEHdW5pRTIyMwd1bmlFMjI0B3VuaUUyMjUHdW5pRTIyNgd1bmlFMjI3B3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTIzNAd1bmlFMjM1B3VuaUUyMzYHdW5pRTIzNwd1bmlFMjM4B3VuaUUyMzkHdW5pRTI0MAd1bmlFMjQxB3VuaUUyNDIHdW5pRTI0Mwd1bmlFMjQ0B3VuaUUyNDUHdW5pRTI0Ngd1bmlFMjQ3B3VuaUUyNDgHdW5pRTI0OQd1bmlFMjUwB3VuaUUyNTEHdW5pRTI1Mgd1bmlFMjUzB3VuaUUyNTQHdW5pRTI1NQd1bmlFMjU2B3VuaUUyNTcHdW5pRTI1OAd1bmlFMjU5B3VuaUUyNjAHdW5pRjhGRgZ1MUY1MTEGdTFGNkFBAAAAAAFUUMMXAAA="

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./resume.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./resume.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n    font-family: snell; /*这里是说明调用来的字体名字*/\n    src: url(" + __webpack_require__(13) + ");\n    src: url(" + __webpack_require__(13) + ") format('truetype'),\n         url(" + __webpack_require__(14) + ") format('opentype');\n}\n\n#Homepage {\n    background-color: #F7F7F7;\n}\n\n#basicInformation {\n    background-color: #C1A075;\n}\n\n/*下面是通用的*/\n.wrap {\n    height:100%;\n    margin-left:auto;\n    margin-right:auto;\n    position:relative;\n    font-family: \"Helvetica Neue\", Helvetica, \"Hiragino Sans GB\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n\nheader {\n    padding-top: 40px;\n    margin: 0 auto;\n    text-align: center;\n    width: 35%;\n}\n\n.chapter {\n    position: relative;\n    font-family: snell, \"Helvetica Neue\", sans-serif;\n    font-size: 5rem;\n}\n\n.chapterName {\n    margin-top: 0;\n    text-transform:capitalize; /*首字母大写*/\n    color: RGBA(133, 133, 133, 1.00);\n}\n\n.chapterName::first-letter {\n    font-size: 40px;\n}\n\n.chapter::before{\n    position: absolute;\n    left: 0;\n    margin-left: -180px;\n    content: url(" + __webpack_require__(15) + ")\n}\n\n.chapter::after{\n    position: absolute;\n    left: 0;\n    margin-left: 56px;\n    content: url(" + __webpack_require__(15) + ")\n}\n\n.card {\n    margin: 40px auto;\n    text-align: center;\n}\n\n.card > img {\n    width: 200px;\n    height: 200px;\n    clear: both;\n    display: block;\n    margin: 40px auto;\n}\n\n.card > blockquote {\n    margin: 30px auto;\n}\n\n.name {\n    font-size: 25px;\n    color: #333333;\n    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(RGBA(169, 190, 211, 1.00)), to(RGBA(23, 44, 97, 1.00)));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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AKEAAAAAAAAAqAAAAAAAAAAAAKkA2AAAAJ0AnwCeAJwAAACbAJgAmgCZAJcAlgCTAJUAlACSAI8AkQCQAI4AjQCLAIwAiACKAIkAhwDZAAAA9ACGAPMA8gAAAM0A8QCFAO8A7gCEAO0A7ADrAOoA6QDoAOYAgwCCAMwAgQDLAIAA5QDnBy5ub3RkZWYFc3BhY2UHbmJzcGFjZQZleGNsYW0IcXVvdGVkYmwKbnVtYmVyc2lnbgZkb2xsYXIHcGVyY2VudAlhbXBlcnNhbmQKcXVvdGVyaWdodAlwYXJlbmxlZnQKcGFyZW5yaWdodAhhc3RlcmlzawRwbHVzBWNvbW1hBmh5cGhlbglzZnRoeXBoZW4GcGVyaW9kBXNsYXNoBHplcm8Db25lA3R3bwV0aHJlZQRmb3VyBGZpdmUDc2l4BXNldmVuBWVpZ2h0BG5pbmUFY29sb24Jc2VtaWNvbG9uBGxlc3MFZXF1YWwHZ3JlYXRlcghxdWVzdGlvbgJhdAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoLYnJhY2tldGxlZnQJYmFja3NsYXNoDGJyYWNrZXRyaWdodAthc2NpaWNpcmN1bQp1bmRlcnNjb3JlCXF1b3RlbGVmdAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoJYnJhY2VsZWZ0A2JhcgpicmFjZXJpZ2h0CmFzY2lpdGlsZGUKZXhjbGFtZG93bgRjZW50CHN0ZXJsaW5nCGZyYWN0aW9uA3llbgZmbG9yaW4Hc2VjdGlvbghjdXJyZW5jeQtxdW90ZXNpbmdsZQxxdW90ZWRibGxlZnQNZ3VpbGxlbW90bGVmdA1ndWlsc2luZ2xsZWZ0Dmd1aWxzaW5nbHJpZ2h0AmZpAmZsBmVuZGFzaAZkYWdnZXIJZGFnZ2VyZGJsDnBlcmlvZGNlbnRlcmVkCXBhcmFncmFwaAZidWxsZXQOcXVvdGVzaW5nbGJhc2UMcXVvdGVkYmxiYXNlDXF1b3RlZGJscmlnaHQOZ3VpbGxlbW90cmlnaHQIZWxsaXBzaXMLcGVydGhvdXNhbmQMcXVlc3Rpb25kb3duBWdyYXZlBWFjdXRlCmNpcmN1bWZsZXgFdGlsZGUGbWFjcm9uBWJyZXZlCWRvdGFjY2VudAhkaWVyZXNpcwRyaW5nB2NlZGlsbGEGb2dvbmVrBWNhcm9uBmVtZGFzaAJBRQtvcmRmZW1pbmluZQZMc2xhc2gGT3NsYXNoAk9FDG9yZG1hc2N1bGluZQJhZQhkb3RsZXNzaQZsc2xhc2gGb3NsYXNoAm9lCmdlcm1hbmRibHMLb25lc3VwZXJpb3IKbG9naWNhbG5vdAJtdQl0cmFkZW1hcmsDRXRoB29uZWhhbGYJcGx1c21pbnVzBVRob3JuCm9uZXF1YXJ0ZXIGZGl2aWRlCWJyb2tlbmJhcgZkZWdyZWUFdGhvcm4NdGhyZWVxdWFydGVycwt0d29zdXBlcmlvcgpyZWdpc3RlcmVkBW1pbnVzA2V0aAhtdWx0aXBseQ10aHJlZXN1cGVyaW9yCWNvcHlyaWdodAl5ZGllcmVzaXMGeWFjdXRlBnVncmF2ZQl1ZGllcmVzaXMLdWNpcmN1bWZsZXgGdWFjdXRlBnNjYXJvbgZvdGlsZGUGb2dyYXZlCW9kaWVyZXNpcwtvY2lyY3VtZmxleAZvYWN1dGUGbnRpbGRlBmlncmF2ZQlpZGllcmVzaXMLaWNpcmN1bWZsZXgGaWFjdXRlBmVncmF2ZQllZGllcmVzaXMLZWNpcmN1bWZsZXgGZWFjdXRlCGNjZWRpbGxhBmF0aWxkZQVhcmluZwZhZ3JhdmUJYWRpZXJlc2lzC2FjaXJjdW1mbGV4BmFhY3V0ZQlZZGllcmVzaXMGWWFjdXRlBlVncmF2ZQlVZGllcmVzaXMLVWNpcmN1bWZsZXgGVWFjdXRlBlNjYXJvbgZPdGlsZGUGT2dyYXZlCU9kaWVyZXNpcwtPY2lyY3VtZmxleAZPYWN1dGUGTnRpbGRlBklncmF2ZQlJZGllcmVzaXMLSWNpcmN1bWZsZXgGSWFjdXRlBkVncmF2ZQlFZGllcmVzaXMLRWNpcmN1bWZsZXgGRWFjdXRlCENjZWRpbGxhBkF0aWxkZQVBcmluZwZBZ3JhdmUJQWRpZXJlc2lzC0FjaXJjdW1mbGV4BkFhY3V0ZQAAAAEAAAEQAAEAKwBAAAUAFgAKAAr/2wAKAFf/tAAKAFj/2wAlAAr/tAAqAA//RAAqABL/RAA4AA/++AA4ABD++AA4ABL++AA4AB7++AA4AB/++AA4AEX/RAA4AEf/RAA4AEn/RAA4AE3/aAA4AFP/RAA4AFb/aAA4AFf/aAA4AFn/aAA4AFv/aAA4AF3/aAA6AA//aAA6ABL/aAA6AB7/tAA6AB//tAA7AA//aAA7ABL/aAA7AB7/tAA7AB//tAA9AA//aAA9ABD/tAA9ABL/aAA9AB7/aAA9AB//aABEAET/2wBWAA/++ABWABL++ABaAA//jwBaABL/jwBbAA//jwBbABL/jwBdAA//tABdABL/tA=="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:font/opentype;base64,T1RUTwANAIAAAwBQQkFTRT9iT7oAAJLAAAAANENGRiAG2e+nAAAPDAAAcblEU0lHBb2ZqgAAkvQAABSYR1BPU87S4g0AAIp0AAAITEdTVUI0xkqjAACFwAAABLRPUy8ydPggPQAAAUAAAABgY21hcC9ZDBoAAAm8AAAFMGhlYWTULhiDAAAA3AAAADZoaGVhCG8GsgAAARQAAAAkaG10eKD8yJAAAIDIAAAE+G1heHABPlAAAAABOAAAAAZuYW1l/Jx8OgAAAaAAAAgZcG9zdP+cADIAAA7sAAAAIAABAAAAAQds87JWml8PPPUAAwPoAAAAALkj5ukAAAAAuSPm6f2V/rwFOgOpAAAAAwACAAAAAAAAAAEAAALA/tgAyARq/ZX+WgU6A+gCFP/wAAAAAAAAAAAAAAE+AABQAAE+AAAAAgIdArwABQAEAooCWP/YAEsCigJYALoBXgAyAM4AAAAACAAAAAAAAACAAACvUAAgSgAAAAAAAAAAQURCRQAAACD7AgLA/tgAyAOpAUQAAAABAAAAAAFYAsAAIAAgAAQAAAAZATIAAQAAAAAAAACcAAAAAQAAAAAAAQAWAJwAAQAAAAAAAgALALIAAQAAAAAAAwAkAL0AAQAAAAAABAAiAOEAAQAAAAAABQA0AQMAAQAAAAAABgAZATcAAQAAAAAABwClAVAAAQAAAAAACQAOAfUAAQAAAAAACwAZAgMAAQAAAAAADgAkAhwAAQAAAAAAEgAfAkAAAwABBAkAAAE4Al8AAwABBAkAAQA+A5cAAwABBAkAAgAOA9UAAwABBAkAAwBIA+MAAwABBAkABAAyBCsAAwABBAkABQBoBF0AAwABBAkABgAyBCsAAwABBAkABwFKBMUAAwABBAkACQAcBg8AAwABBAkACwAyBisAAwABBAkADgBIBl0AAwABBAkAEAAsBqUAAwABBAkAEQAWBtFDb3B5cmlnaHQgqSAxOTkwLCAxOTk1LCAyMDAxLCAyMDAyIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC4gqSAxOTgxLCAyMDAxLCAyMDAyIEhlaWRlbGJlcmdlciBEcnVja21hc2NoaW5lbiBBRy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5TbmVsbCBSb3VuZGhhbmQgTFQgU3RkQm9sZCBTY3JpcHQxLjAyOTtBREJFO1NuZWxsUm91bmRoYW5kTFRTdGQtQmRTY3JTbmVsbCBSb3VuZGhhbmQgTFQgU3RkIEJvbGQgU2NyaXB0T1RGIDEuMDI5O1BTIDAwMS4wMDQ7Q29yZSAxLjAuMzM7bWFrZW90Zi5saWIxLjQuMTU4NVNuZWxsUm91bmRoYW5kTFRTdGQtQmRTY3JTbmVsbCBSb3VuZGhhbmQgaXMgYSB0cmFkZW1hcmsgb2YgSGVpZGVsYmVyZ2VyIERydWNrbWFzY2hpbmVuIEFHLCBleGNsdXNpdmVseSBsaWNlbnNlZCB0aHJvdWdoIExpbm90eXBlIExpYnJhcnkgR21iSCwgYW5kIG1heSBiZSByZWdpc3RlcmVkIGluIGNlcnRhaW4ganVyaXNkaWN0aW9ucy5NYXR0aGV3IENhcnRlcmh0dHA6Ly93d3cuYWRvYmUuY29tL3R5cGVodHRwOi8vd3d3LmFkb2JlLmNvbS90eXBlL2xlZ2FsLmh0bWxTbmVsbCBSb3VuZGhhbmQgTFQgU3RkIEJvbGQgU2NyAEMAbwBwAHkAcgBpAGcAaAB0ACAAqQAgADEAOQA5ADAALAAgADEAOQA5ADUALAAgADIAMAAwADEALAAgADIAMAAwADIAIABBAGQAbwBiAGUAIABTAHkAcwB0AGUAbQBzACAASQBuAGMAbwByAHAAbwByAGEAdABlAGQALgAgACAAQQBsAGwAIABSAGkAZwBoAHQAcwAgAFIAZQBzAGUAcgB2AGUAZAAuACAAqQAgADEAOQA4ADEALAAgADIAMAAwADEALAAgADIAMAAwADIAIABIAGUAaQBkAGUAbABiAGUAcgBnAGUAcgAgAEQAcgB1AGMAawBtAGEAcwBjAGgAaQBuAGUAbgAgAEEARwAuACAAQQBsAGwAIAByAGkAZwBoAHQAcwAgAHIAZQBzAGUAcgB2AGUAZAAuAFMAbgBlAGwAbAAgAFIAbwB1AG4AZABoAGEAbgBkACAATABUACAAUwB0AGQAIABCAG8AbABkACAAUwBjAHIAUgBlAGcAdQBsAGEAcgAxAC4AMAAyADkAOwBBAEQAQgBFADsAUwBuAGUAbABsAFIAbwB1AG4AZABoAGEAbgBkAEwAVABTAHQAZAAtAEIAZABTAGMAcgBTAG4AZQBsAGwA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ZmkuYmVnaW51Z3JhdmUuYmVnaW5ldGguYmVnaW5jY2VkaWxsYS5iZWdpbmVjaXJjdW1mbGV4LmJlZ2luYWFjdXRlLmJlZ2luZWdyYXZlLmJlZ2luZ2VybWFuZGJscy5iZWdpbmZsLmJlZ2luYWUuYmVnaW55YWN1dGUuYmVnaW5vc2xhc2guYmVnaW5lZGllcmVzaXMuYmVnaW5sc2xhc2guYmVnaW51bmkyMjE1aWNpcmN1bWZsZXguYmVnaW5pZGllcmVzaXMuYmVnaW5hY2lyY3VtZmxleC5iZWdpbnlkaWVyZXNpcy5iZWdpbmlhY3V0ZS5iZWdpbm50aWxkZS5iZWdpbm9hY3V0ZS5iZWdpbm9lLmJlZ2luYWRpZXJlc2lzLmJlZ2luZWFjdXRlLmJlZ2lub2RpZXJlc2lzLmJlZ2lub2dyYXZlLmJlZ2lub3RpbGRlLmJlZ2luYWdyYXZlLmJlZ2luZG90bGVzc2kuYmVnaW50aG9ybi5iZWdpbnVuaTAzQTl1Y2lyY3VtZmxleC5iZWdpbnVkaWVyZXNpcy5iZWdpbm9jaXJjdW1mbGV4LmJlZ2luemNhcm9uLmJlZ2luaWdyYXZlLmJlZ2ludWFjdXRlLmJlZ2luYXRpbGRlLmJlZ2luMDAxLjAwNENvcHlyaWdodCAxOTkwLCAxOTk1LCAyMDAxLCAyMDAyIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgUmlnaHRzIFJlc2VydmVkLiBTbmVsbCBSb3VuZGhhbmQgaXMgYSB0cmFkZW1hcmsgb2YgSGVpZGVsYmVyZ2VyIERydWNrbWFzY2hpbmVuIEFHLCBleGNsdXNpdmVseSBsaWNlbnNlZCB0aHJvdWdoIExpbm90eXBlIExpYnJhcnkgR21iSCwgYW5kIG1heSBiZSByZWdpc3RlcmVkIGluIGNlcnRhaW4ganVyaXNkaWN0aW9ucy4gVGhlIGRpZ2l0YWxseSBlbmNvZGVkIG1hY2hpbmUgcmVhZGFibGUgc29mdHdhcmUgZm9yIHByb2R1Y2luZyB0aGUKIFR5cGVmYWNlcyBsaWNlbnNlZCB0byB5b3UgaXMgY29weXJpZ2h0ZWQgKGMpIDE5OTAsIDE5OTUsIDIwMDEsIDIwMDIgQWRvYmUgU3lzdGVtcy4KIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFRoaXMgc29mdHdhcmUgaXMgdGhlIHByb3BlcnR5IG9mIEFkb2JlIFN5c3RlbXMKIEluY29ycG9yYXRlZCBhbmQgaXRzIGxpY2Vuc29ycywgYW5kIG1heSBub3QgYmUgcmVwcm9kdWNlZCwgdXNlZCwgCiBkaXNwbGF5ZWQsIG1vZGlmaWVkLCBkaXNjbG9zZWQgb3IgdHJhbnNmZXJyZWQgd2l0aG91dCB0aGUgZXhwcmVzcyAKIHdyaXR0ZW4gYXBwcm92YWwgb2YgQWRvYmUuCiAKIFRoZSBkaWdpdGFsbHkgZW5jb2RlZCBtYWNoaW5lIHJlYWRhYmxlIG91dGxpbmUgZGF0YSBmb3IgcHJvZHVjaW5nIHRoZSBUeXBlZmFjZXMgCiBwcm92aWRlZCBhcyBwYXJ0IG9mIHlvdXIgbGFzZXIgcHJpbnRlciBpcyBjb3B5cmlnaHRlZCAoYykgMTk4MSwgMjAwMSwgMjAwMiBIZWlkZWxiZXJnZXIgRHJ1Y2ttYXNjaGluZW4gQUcuIAogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBkYXRhIGlzIHRoZSBwcm9wZXJ0eSBvZiBIZWlkZWxiZXJnZXIgRHJ1Y2ttYXNjaGluZW4gQUcsIAogYW5kIG1heSBub3QgYmUgcmVwcm9kdWNlZCwgdXNlZCwgZGlzcGxheWVkLCBtb2RpZmllZCwgZGlzY2xvc2VkIG9yIHRyYW5zZmVycmVkIAogd2l0aG91dCB0aGUgZXhwcmVzcyB3cml0dGVuIGFwcHJvdmFsIG9mIEhlaWRlbGJlcmdlciBEcnVja21hc2NoaW5lbiBBRy4gU25lbGwgUm91bmRoYW5kIExUIFN0ZCBCb2xkIFNjcmlwdFNuZWxsIFJvdW5kaGFuZCBMVCBTdGQAxAIAAQAkAEIARgBwAHMAfwChAPwBCgEWASoBOQFZAXIBeAGmAcIB+AI1AjkCUgJiAmwCcQKuArgCvwLvAvgDFAMvA0UDTQNwA5cDpQOwA7kEEwQhBCwEUARZBHAE+AUYBSgFUAXRBkoGUgZsBnIGmQcEB0sHswfBB8cIJAgtCEYInwizCNIJJgk9CVwJYQmtCcIKCgpSClYKeQp9Cr0KzAsKCxQLIwszCzsLQgtPC2wLfwuGC4wLvgvN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ABEAegAEAGMAEQARAAQACgASABoAIgCbAAMAEAATAJ4AAwAQABUAmwADAGMAEwCeAAMAYwAVAAIABgAOAKMAAwAQABUAowADAGMAFQABACgAAQAIAAIABgAOAAYAAwAQABEABgADAGMAEQACAOYAAgCLAI8AAQABABEAAQACABAAYwABAAEAEgABAAEAFQABAAEAEwABAAEAFAABAAEARwABAAEAQgACAAEAEQAaAAAAAQABAFAAAQABAA8AAQAHABIAEwAUACIAMABCAFAAAgAGAEIAWwAAAG0AbgAaAJAAlQAcAKIAogAiAKcApwAjAMgA5AAkAAIACwAPAA8AAAASABQAAQAiACIABAAwADAABQBDAE8ABgBRAFsAEwBtAG4AHgCQAJUAIACiAKIAJgCnAKcAJwDIAOQAKAABAAMADgBCAFAAAQADABEAEgAUAAEAAgBCAFAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAD//wABAAAAAWtlcm4ACAAAAAEAAAABAAQAAgAAAAIACgSYAAEGKgAEAAAABwAYAB4AZABqAXACdgOAAAEACP/JABEAyf/SAMr/0gDL/9IAzP+7AM3/0gDP/9IA0P/SANH/0gDS/9IA0//bANQADwDWAAAA2P+7ANn/0gDa/9IA2//SAN3/2wABAEH/yQBBAPsANgD8ADYA/QA2AP4ANgD/ADYBAAA2AQEANgECADYBAwA2AQQANgEFADYBBgA2AQcANgEIADYBCQA2AQoANgELADYBDAA2AQ0ANgEOADYBDwA2ARAANgERADYBEgA2ARMANgEUADYBFQA2ARYANgEXADYBGAA2ARkANgEaADYBGwA2ARwANgEdADYBHgA2AR8ANgEgADYBIQA2ASIANgEjADYBJAA2ASYANgEnADYBKAA2ASkANgEqADYBKwA2ASwANgEtADYBLgA2AS8ANgEwADYBMQA2ATIANgEzADYBNAA2ATUANgE3ADYBOAA2ATkANgE6ADYBOwA2ATwANgE9ADYAQQD7ADYA/AA2AP0ANgD+ADYA/wA2AQAANgEBADYBAgA2AQMANgEEADYBBQA2AQYANgEHADYBCAA2AQkANgEKADYBCwA2AQwANgENADYBDgA2AQ8ANgEQADYBEQA2ARIANgETADYBFAA2ARUANgEWADYBFwA2ARgANgEZADYBGgA2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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*** IMPORTS FROM imports-loader ***/
	var $ = __webpack_require__(1);

	/*!
	 * Bootstrap v3.3.6 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
	d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var $ = __webpack_require__(1);

	/*!
	 * jQuery Scrollify
	 * Version 0.1.14
	 *
	 * Requires:
	 * - jQuery 1.6 or higher
	 *
	 * https://github.com/lukehaas/Scrollify
	 *
	 * Copyright 2016, Luke Haas
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(n){return t(n,e,e.document)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=function(n,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(n)),t(o,e,e.document),o}:t(jQuery,e,e.document)}("undefined"!=typeof window?window:this,function(e,t,n,o){"use strict";function s(n,o,s){if(M===!0)return!0;if(f[n]){if(b=!1,s&&D.before(n,p),y=1,D.sectionName&&(H!==!0||0!==n))if(history.pushState)try{history.replaceState(null,null,f[n])}catch(i){t.console&&console.warn("Scrollify warning: This needs to be hosted on a server to manipulate the hash value.")}else t.location.hash=f[n];o?(e(D.target).stop().scrollTop(d[n]),s&&D.after(n,p)):(S=!0,e(D.target).stop().animate({scrollTop:d[n]},D.scrollSpeed,D.easing),t.location.hash.length&&e(t.location.hash).length&&t.console&&console.warn("Scrollify warning: There are IDs on the page that match the hash value - this will cause the page to anchor."),e(D.target).promise().done(function(){S=!1,H=!1,s&&D.after(n,p)}))}}function i(e){if(4>e)return!1;var t,n=20,o=0,s=e.length-1;for(e.length<2*n&&(n=Math.floor(e.length/2)),t=e.length-n;s>=t;s--)o+=e[s];var i=o/n;for(o=0,s=e.length-n-1,t=e.length-2*n;s>=t;s--)o+=e[s];var c=o/n;return i>=c?!0:!1}function c(e,t){for(var n=f.length;n>=0;n--)"string"==typeof e?f[n]===e&&(m=n,s(n,t,!0)):n===e&&(m=n,s(n,t,!0))}var r,a,u,h,l,d=[],f=[],p=[],g=[],m=0,y=1,v=!1,w=e(t).scrollTop(),b=!1,S=!1,E=!1,M=!1,T=[],x=(new Date).getTime(),H=!0,D={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",standardScrollElements:!1,setHeights:!0,before:function(){},after:function(){},afterResize:function(){},afterRender:function(){}};e.scrollify=function(o){function c(t){e(D.target).stop().animate({scrollTop:t},D.scrollSpeed,D.easing)}function H(){e(D.section).each(function(n){D.setHeights?e(this).css("height","auto").outerHeight()<e(t).height()?(e(this).css({height:e(t).height()}),g[n]=!1):(e(this).css({height:e(this).height()}),g[n]=!0):e(this).outerHeight()<e(t).height()?g[n]=!1:g[n]=!0})}function z(n){e(D.section).each(function(n){n>0?d[n]=parseInt(e(this).offset().top)+D.offset:d[n]=parseInt(e(this).offset().top),D.sectionName&&e(this).data(D.sectionName)?f[n]="#"+e(this).data(D.sectionName).replace(/ /g,"-"):f[n]="#"+(n+1),p[n]=e(this),e(f[n]).length&&t.console&&console.warn("Scrollify warning: Section names can't match IDs on the page - this will cause the browser to anchor."),t.location.hash===f[n]&&(m=n,v=!0)}),!0===n?s(m,!1,!1):D.afterRender()}function I(){return w=e(t).scrollTop(),w>parseInt(d[m])?!1:!0}function L(){return w=e(t).scrollTop(),w<parseInt(d[m])+(p[m].height()-e(t).height())?!1:!0}e.easing.easeOutExpo=function(e,t,n,o,s){return t==s?n+o:o*(-Math.pow(2,-10*t/s)+1)+n},u={handleMousedown:function(){return M===!0?!0:(b=!1,void(E=!1))},handleMouseup:function(){return M===!0?!0:(b=!0,void(E&&u.calculateNearest()))},handleScroll:function(){return M===!0?!0:(r&&clearTimeout(r),void(r=setTimeout(function(){return E=!0,b===!1?!1:(b=!1,void u.calculateNearest())},200)))},calculateNearest:function(){w=e(t).scrollTop();for(var n,o=1,i=d.length,c=0,r=Math.abs(d[0]-w);i>o;o++)n=Math.abs(d[o]-w),r>n&&(r=n,c=o);(L()||I())&&(m=c,s(c,!1,!0))},wheelHandler:function(t,n){if(M===!0)return!0;if(D.standardScrollElements&&(e(t.target).is(D.standardScrollElements)||e(t.target).closest(D.standardScrollElements).length))return!0;g[m]||t.preventDefault();var o=(new Date).getTime();if(n=n||-t.originalEvent.detail/3||t.originalEvent.wheelDelta/120,o-x>1300&&(T=[]),x=o,T.length>=35&&T.shift(),T.push(Math.abs(10*n)),S)return!1;if(0>n){if(m<d.length-1&&L()){if(!i(T))return!1;t.preventDefault(),m++,S=!0,s(m,!1,!0)}}else if(n>0&&m>0&&I()){if(!i(T))return!1;t.preventDefault(),m--,S=!0,s(m,!1,!0)}},keyHandler:function(e){return M===!0?!0:void(38==e.keyCode?m>0&&I()&&(m--,s(m,!1,!0)):40==e.keyCode&&m<d.length-1&&L()&&(m++,s(m,!1,!0)))},init:function(){D.scrollbars?(e(t).bind("mousedown",u.handleMousedown),e(t).bind("mouseup",u.handleMouseup),e(t).bind("scroll",u.handleScroll)):e("body").css({overflow:"hidden"}),e(n).bind("DOMMouseScroll mousewheel",u.wheelHandler),e(n).bind("keydown",u.keyHandler)}},h={touches:{touchstart:{y:-1,x:-1},touchmove:{y:-1,x:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(t){if(M===!0)return!0;if(D.standardScrollElements&&(e(t.target).is(D.standardScrollElements)||e(t.target).closest(D.standardScrollElements).length))return!0;var n;if("undefined"!=typeof t&&"undefined"!=typeof t.touches)switch(n=t.touches[0],t.type){case"touchstart":h.touches.touchstart.y=n.pageY,h.touches.touchmove.y=-1,h.touches.touchstart.x=n.pageX,h.touches.touchmove.x=-1,h.options.timeStamp=(new Date).getTime(),h.touches.touchend=!1;case"touchmove":h.touches.touchmove.y=n.pageY,h.touches.touchmove.x=n.pageX,h.touches.touchstart.y!==h.touches.touchmove.y&&Math.abs(h.touches.touchstart.y-h.touches.touchmove.y)>Math.abs(h.touches.touchstart.x-h.touches.touchmove.x)&&(t.preventDefault(),h.touches.direction="y",h.options.timeStamp+h.options.timeGap<(new Date).getTime()&&0==h.touches.touchend&&(h.touches.touchend=!0,h.touches.touchstart.y>-1&&Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down())));break;case"touchend":h.touches[t.type]===!1&&(h.touches[t.type]=!0,h.touches.touchstart.y>-1&&h.touches.touchmove.y>-1&&"y"===h.touches.direction&&(Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down()),h.touches.touchstart.y=-1,h.touches.touchstart.x=-1,h.touches.direction="undetermined"))}},down:function(){m<=d.length-1&&(L()&&m<d.length-1?(m++,s(m,!1,!0)):Math.floor(p[m].height()/e(t).height())>y?(c(parseInt(d[m])+e(t).height()*y),y+=1):c(parseInt(d[m])+(p[m].height()-e(t).height())))},up:function(){m>=0&&(I()&&m>0?(m--,s(m,!1,!0)):y>2?(y-=1,c(parseInt(d[m])+e(t).height()*y)):(y=1,c(parseInt(d[m]))))},init:function(){n.addEventListener&&(n.addEventListener("touchstart",h.touchHandler,!1),n.addEventListener("touchmove",h.touchHandler,!1),n.addEventListener("touchend",h.touchHandler,!1))}},l={handleResize:function(){clearTimeout(a),a=setTimeout(function(){H(),z(!0),D.afterResize()},400)}},D=e.extend(D,o),H(),z(!1),!0===v?s(m,!1,!0):s(0,!0,!0),u.init(),h.init(),e(t).bind("resize",l.handleResize),n.addEventListener&&t.addEventListener("orientationchange",l.handleResize,!1)},e.scrollify.move=function(e){return e===o?!1:void c(e,!1)},e.scrollify.instantMove=function(e){return e===o?!1:void c(e,!0)},e.scrollify.next=function(){m<f.length&&(m+=1,s(m,!1,!0))},e.scrollify.previous=function(){m>0&&(m-=1,s(m,!1,!0))},e.scrollify.instantNext=function(){m<f.length&&(m+=1,s(m,!0,!0))},e.scrollify.instantPrevious=function(){m>0&&(m-=1,s(m,!0,!0))},e.scrollify.destroy=function(){e(D.section).each(function(){e(this).css("height","auto")}),e(t).unbind("resize",l.handleResize),D.scrollbars&&(e(t).unbind("mousedown",u.handleMousedown),e(t).unbind("mouseup",u.handleMouseup),e(t).unbind("scroll",u.handleScroll)),e(n).unbind("DOMMouseScroll mousewheel",u.wheelHandler),e(n).unbind("keydown",u.keyHandler),n.addEventListener&&(n.removeEventListener("touchstart",h.touchHandler,!1),n.removeEventListener("touchmove",h.touchHandler,!1),n.removeEventListener("touchend",h.touchHandler,!1)),d=[],f=[],p=[],g=[]},e.scrollify.update=function(){l.handleResize()},e.scrollify.current=function(){return p[m]},e.scrollify.disable=function(){M=!0},e.scrollify.enable=function(){M=!1},e.scrollify.isDisabled=function(){return M},e.scrollify.setOptions=function(n){"object"==typeof n?(D=e.extend(D,n),l.handleResize()):t.console&&console.warn("Scrollify warning: Options need to be in an object.")}});


/***/ }
/******/ ]);